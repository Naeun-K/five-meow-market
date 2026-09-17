import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./checkoutStyle";
import * as checkoutService from "../../services/checkOutServices";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import Loader from "../../components/loader/Loader";
import { createOrder } from "../../services/orderServices";
import { getPoints } from "../../services/userService";

import logoEat from "../../assets/logo-eat.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";

import { searchAddress } from "../../services/addressService";

const cardCompanies = [
  "신한카드",
  "삼성카드",
  "현대카드",
  "KB국민카드",
  "롯데카드",
  "NH농협카드",
  "하나카드",
  "우리카드",
];

const bankCompanies = [
  "KB국민은행",
  "신한은행",
  "우리은행",
  "하나은행",
  "NH농협은행",
  "IBK기업은행",
  "SC제일은행",
  "카카오뱅크",
  "토스뱅크",
];

const deliveryMemos = [
  "문 앞에 놓아주세요.",
  "직접 받고 부재 시 문 앞에 놓아주세요.",
  "경비실에 맡겨주세요.",
  "택배함에 넣어주세요.",
  "기타사항",
];

// =========================
// 휴대폰 번호 화면 표시용
// =========================

const formatPhoneNumber = (value = "") => {
  const numbers = String(value).replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 3) {
    return numbers;
  }

  if (numbers.length <= 7) {
    return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  }

  return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
};

// =========================
// 배송지 데이터 형식 통일
// =========================

const normalizeShippingAddress = (addressItem) => {
  if (!addressItem) {
    return null;
  }

  return {
    ...addressItem,

    shippingAddressId:
      addressItem.shippingAddressId ?? addressItem.addressId ?? null,

    recipientName: addressItem.recipientName ?? addressItem.recipient ?? "",

    recipientPhone: addressItem.recipientPhone ?? addressItem.phone ?? "",

    zipCode: addressItem.zipCode ?? "",

    address: addressItem.address ?? "",

    detailAddress: addressItem.detailAddress ?? "",

    isDefault: Boolean(addressItem.isDefault),
  };
};

const normalizeShippingAddresses = (addressList = []) => {
  if (!Array.isArray(addressList)) {
    return [];
  }

  return addressList.map(normalizeShippingAddress).filter(Boolean);
};

function InfoSection({ id, title, children }) {
  return (
    <S.InfoSection>
      <S.SectionHeader>
        <S.SectionTitle>{title}</S.SectionTitle>
      </S.SectionHeader>

      <S.SectionContent id={id}>{children}</S.SectionContent>
    </S.InfoSection>
  );
}

function CheckoutPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { accessToken, user, isLoggedIn, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  const checkoutId = searchParams.get("checkoutId");

  const [checkout, setCheckout] = useState(null);

  const [addresses, setAddresses] = useState([]);

  const [availablePoints, setAvailablePoints] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const [deliveryMemo, setDeliveryMemo] = useState("문 앞에 놓아주세요.");

  const [isDeliveryMemoOpen, setIsDeliveryMemoOpen] = useState(false);

  const [isAddressDropdownOpen, setIsAddressDropdownOpen] = useState(false);

  const [isRequestInputOpen, setIsRequestInputOpen] = useState(false);

  const [requestMessage, setRequestMessage] = useState("");

  const [pointInput, setPointInput] = useState("");

  const [selectedCardCompany, setSelectedCardCompany] = useState("");

  const [isCardCompanyOpen, setIsCardCompanyOpen] = useState(false);

  const [selectedBank, setSelectedBank] = useState("");

  const [isBankOpen, setIsBankOpen] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [isAgreed, setIsAgreed] = useState(false);

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  // =========================
  // 배송지 추가 모달
  // =========================

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);

  const [isAddressSubmitting, setIsAddressSubmitting] = useState(false);

  const [newAddress, setNewAddress] = useState({
    recipientName: "",
    recipientPhone: "",
    zipCode: "",
    address: "",
    detailAddress: "",
    isDefault: false,
  });

  // =========================
  // Checkout / 배송지 / 적립금 조회
  // =========================

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    if (!isLoggedIn || !accessToken) {
      navigate("/login", {
        replace: true,
      });

      return;
    }

    if (!checkoutId) {
      showToast("Checkout 정보를 확인할 수 없습니다.", false);

      navigate("/cart", {
        replace: true,
      });

      return;
    }

    const fetchCheckout = async () => {
      try {
        setIsLoading(true);

        const [checkoutResult, addressResult, pointResult] = await Promise.all([
          checkoutService.getCheckoutSummary(checkoutId, accessToken),

          checkoutService.getAddresses(accessToken),

          getPoints(accessToken),
        ]);

        if (!checkoutResult.success) {
          throw new Error(
            checkoutResult.message || "결제 정보를 불러오지 못했습니다.",
          );
        }

        // =========================
        // 적립금
        // =========================

        if (pointResult.success) {
          setAvailablePoints(pointResult.point ?? 0);
        } else {
          setAvailablePoints(0);
        }

        // =========================
        // 배송지
        // =========================

        const normalizedAddresses = normalizeShippingAddresses(
          addressResult.success ? (addressResult.addresses ?? []) : [],
        );

        setAddresses(normalizedAddresses);

        let normalizedSelectedAddress = normalizeShippingAddress(
          checkoutResult.shippingAddress,
        );

        if (normalizedSelectedAddress?.shippingAddressId) {
          const fullAddress = normalizedAddresses.find(
            (addressItem) =>
              addressItem.shippingAddressId ===
              normalizedSelectedAddress.shippingAddressId,
          );

          if (fullAddress) {
            normalizedSelectedAddress = fullAddress;
          }
        }

        // =========================
        // Checkout
        // =========================

        setCheckout({
          checkoutId: checkoutResult.checkoutId,

          items: checkoutResult.items ?? [],

          shippingAddress: normalizedSelectedAddress,

          productAmount: checkoutResult.productAmount ?? 0,

          shippingFee: checkoutResult.shippingFee ?? 0,

          appliedPoints: checkoutResult.appliedPoints ?? 0,

          expectedPoint: checkoutResult.expectedPoint ?? 0,

          finalAmount: checkoutResult.finalAmount ?? 0,
        });

        setPointInput(
          String(
            checkoutResult.appliedPoints && checkoutResult.appliedPoints > 0
              ? checkoutResult.appliedPoints
              : "",
          ),
        );
      } catch (error) {
        console.error("Checkout 정보 조회 실패:", error);

        showToast(error.message || "결제 정보를 불러오지 못했습니다.", false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCheckout();
  }, [checkoutId, accessToken, isLoggedIn, isAuthLoading, navigate, showToast]);

  // =========================
  // 배송지 선택
  // =========================

  const handleAddressChange = async (shippingAddressId) => {
    if (!shippingAddressId) {
      return;
    }

    const addressFromList =
      addresses.find(
        (addressItem) => addressItem.shippingAddressId === shippingAddressId,
      ) ?? null;

    try {
      const result = await checkoutService.selectCheckoutAddress(
        checkoutId,
        shippingAddressId,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "배송지 선택에 실패했습니다.");
      }

      const addressFromResponse = normalizeShippingAddress(
        result.shippingAddress,
      );

      const selectedAddress = addressFromResponse ?? addressFromList;

      if (!selectedAddress) {
        throw new Error("선택한 배송지 정보를 확인할 수 없습니다.");
      }

      setCheckout((prev) => ({
        ...prev,
        shippingAddress: selectedAddress,
      }));
    } catch (error) {
      console.error("배송지 선택 실패:", error);

      showToast(error.message || "배송지 선택에 실패했습니다.", false);
    }
  };

  // =========================
  // 일반 배송지 입력
  // =========================

  const handleAddressInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setNewAddress((prev) => ({
      ...prev,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================
  // 휴대폰 번호 입력
  // =========================

  const handlePhoneChange = (event) => {
    const formattedPhone = formatPhoneNumber(event.target.value);

    setNewAddress((prev) => ({
      ...prev,
      recipientPhone: formattedPhone,
    }));
  };

  // =========================
  // 카카오 주소 검색
  // =========================

  const handleAddressSearch = async () => {
    try {
      const result = await searchAddress();

      setNewAddress((prev) => ({
        ...prev,

        zipCode: result.zoneCode,

        address: result.address || result.jibunAddress,

        detailAddress: "",
      }));
    } catch (error) {
      console.error("주소 검색 실패:", error);

      showToast("주소 검색 중 문제가 발생했습니다.", false);
    }
  };

  // =========================
  // 배송지 추가
  // =========================

  // const handleAddAddress = async (event) => {
  //   event.preventDefault();

  //   if (isAddressSubmitting) {
  //     return;
  //   }

  //   const recipientName = newAddress.recipientName.trim();

  //   const recipientPhone = newAddress.recipientPhone.replace(/\D/g, "");

  //   const zipCode = newAddress.zipCode.trim();

  //   const address = newAddress.address.trim();

  //   const detailAddress = newAddress.detailAddress.trim();

  //   if (!recipientName) {
  //     showToast("받는 분을 입력해주세요.", false);

  //     return;
  //   }

  //   if (!recipientPhone) {
  //     showToast("연락처를 입력해주세요.", false);

  //     return;
  //   }

  //   if (recipientPhone.length !== 11) {
  //     showToast("휴대폰 번호 11자리를 입력해주세요.", false);

  //     return;
  //   }

  //   if (!zipCode) {
  //     showToast("우편번호를 검색해주세요.", false);

  //     return;
  //   }

  //   if (!address) {
  //     showToast("주소를 검색해주세요.", false);

  //     return;
  //   }

  //   try {
  //     setIsAddressSubmitting(true);

  //     const result = await checkoutService.addAddress(
  //       {
  //         recipientName,
  //         recipientPhone,
  //         zipCode,
  //         address,
  //         detailAddress,
  //         isDefault: newAddress.isDefault,
  //       },

  //       accessToken,
  //     );

  //     if (!result.success) {
  //       throw new Error(result.message || "배송지 추가에 실패했습니다.");
  //     }

  //     const shippingAddressId =
  //       result.shippingAddressId ??
  //       result.addressId ??
  //       result.shippingAddress?.shippingAddressId ??
  //       result.shippingAddress?.addressId;

  //     if (!shippingAddressId) {
  //       throw new Error("추가된 배송지 정보를 확인할 수 없습니다.");
  //     }

  //     // =========================
  //     // 배송지 목록 다시 조회
  //     // =========================

  //     const addressResult = await checkoutService.getAddresses(accessToken);

  //     if (!addressResult.success) {
  //       throw new Error(
  //         addressResult.message || "배송지 목록 조회에 실패했습니다.",
  //       );
  //     }

  //     const normalizedAddresses = normalizeShippingAddresses(
  //       addressResult.addresses ?? [],
  //     );

  //     setAddresses(normalizedAddresses);

  //     // =========================
  //     // 추가한 배송지를 현재 Checkout에 선택
  //     // =========================

  //     const selectResult = await checkoutService.selectShippingAddress(
  //       checkoutId,
  //       shippingAddressId,
  //       accessToken,
  //     );

  //     if (!selectResult.success) {
  //       throw new Error(selectResult.message || "배송지 선택에 실패했습니다.");
  //     }

  //     const selectedAddress =
  //       normalizeShippingAddress(selectResult.shippingAddress) ??
  //       normalizedAddresses.find(
  //         (addressItem) => addressItem.shippingAddressId === shippingAddressId,
  //       );

  //     if (!selectedAddress) {
  //       throw new Error("추가한 배송지 정보를 확인할 수 없습니다.");
  //     }

  //     setCheckout((prev) => ({
  //       ...prev,

  //       shippingAddress: selectedAddress,
  //     }));

  //     setNewAddress({
  //       recipientName: "",
  //       recipientPhone: "",
  //       zipCode: "",
  //       address: "",
  //       detailAddress: "",
  //       isDefault: false,
  //     });

  //     setIsAddressModalOpen(false);

  //     showToast("배송지가 추가되었습니다.", true);
  //   } catch (error) {
  //     console.error("배송지 추가 실패:", error);

  //     showToast(error.message || "배송지 추가에 실패했습니다.", false);
  //   } finally {
  //     setIsAddressSubmitting(false);
  //   }
  // };

  const handleAddAddress = async (event) => {
    event.preventDefault();

    if (isAddressSubmitting) {
      return;
    }

    const recipient = newAddress.recipientName.trim();
    const phone = newAddress.recipientPhone.replace(/\D/g, "");
    const zipCode = newAddress.zipCode.trim();
    const address = newAddress.address.trim();
    const detailAddress = newAddress.detailAddress.trim();

    if (!recipient) {
      showToast("받는 분을 입력해주세요.", false);
      return;
    }

    if (!phone) {
      showToast("연락처를 입력해주세요.", false);
      return;
    }

    if (phone.length !== 11) {
      showToast("휴대폰 번호 11자리를 입력해주세요.", false);
      return;
    }

    if (!zipCode) {
      showToast("우편번호를 검색해주세요.", false);
      return;
    }

    if (!address) {
      showToast("주소를 검색해주세요.", false);
      return;
    }

    try {
      setIsAddressSubmitting(true);

      // =========================
      // 배송지 추가
      // =========================

      const result = await checkoutService.addAddress(
        {
          recipient,
          phone,
          zipCode,
          address,
          detailAddress,
          isDefault: newAddress.isDefault,
        },
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "배송지 추가에 실패했습니다.");
      }

      // =========================
      // 배송지 목록 다시 조회
      // =========================

      const addressResult = await checkoutService.getAddresses(accessToken);

      if (!addressResult.success) {
        throw new Error(
          addressResult.message || "배송지 목록 조회에 실패했습니다.",
        );
      }

      const normalizedAddresses = normalizeShippingAddresses(
        addressResult.addresses ?? [],
      );

      setAddresses(normalizedAddresses);

      // =========================
      // 방금 추가한 배송지 찾기
      // =========================
      // addAddress 서비스에서 shippingAddressId를 반환하지 않으므로
      // 추가한 배송지 정보와 목록의 배송지 정보를 비교한다.

      const addedAddress = normalizedAddresses.find(
        (addressItem) =>
          addressItem.recipient === result.recipient &&
          addressItem.phone === result.phone &&
          addressItem.zipCode === result.zipCode &&
          addressItem.address === result.address &&
          (addressItem.detailAddress ?? "") === (result.detailAddress ?? ""),
      );

      if (!addedAddress) {
        throw new Error("추가된 배송지 정보를 확인할 수 없습니다.");
      }

      const shippingAddressId = addedAddress.shippingAddressId;

      if (!shippingAddressId) {
        throw new Error("추가된 배송지 ID를 확인할 수 없습니다.");
      }

      // =========================
      // 추가한 배송지를 현재 Checkout에 선택
      // =========================

      const selectResult = await checkoutService.selectCheckoutAddress(
        checkoutId,
        shippingAddressId,
        accessToken,
      );

      if (!selectResult.success) {
        throw new Error(selectResult.message || "배송지 선택에 실패했습니다.");
      }

      const selectedAddress =
        normalizeShippingAddress(selectResult.shippingAddress) ?? addedAddress;

      setCheckout((prev) => ({
        ...prev,
        shippingAddress: selectedAddress,
      }));

      // =========================
      // 배송지 입력 폼 초기화
      // =========================

      setNewAddress({
        recipientName: "",
        recipientPhone: "",
        zipCode: "",
        address: "",
        detailAddress: "",
        isDefault: false,
      });

      setIsAddressModalOpen(false);

      showToast("배송지가 추가되었습니다.", true);
    } catch (error) {
      console.error("배송지 추가 실패:", error);

      showToast(error.message || "배송지 추가에 실패했습니다.", false);
    } finally {
      setIsAddressSubmitting(false);
    }
  };
  // =========================
  // 적립금 적용
  // =========================

  const handleApplyPoints = async () => {
    if (!checkoutId || !checkout) {
      return;
    }

    const appliedPoints = pointInput === "" ? 0 : Number(pointInput);

    if (!Number.isInteger(appliedPoints) || appliedPoints < 0) {
      showToast("사용할 적립금을 올바르게 입력해주세요.", false);

      return;
    }

    if (appliedPoints > availablePoints) {
      showToast("보유 적립금을 초과할 수 없습니다.", false);

      return;
    }

    // 적립금은 상품금액까지만 사용
    if (appliedPoints > checkout.productAmount) {
      showToast("상품금액을 초과하여 적립금을 사용할 수 없습니다.", false);

      return;
    }

    // 이미 적용된 금액과 같으면 API 중복 요청 방지
    if (appliedPoints === (checkout.appliedPoints ?? 0)) {
      return;
    }

    try {
      const result = await checkoutService.applyPoints(
        checkoutId,
        appliedPoints,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "적립금 적용에 실패했습니다.");
      }

      setCheckout((prev) => ({
        ...prev,

        appliedPoints: result.appliedPoints ?? appliedPoints,

        finalAmount: result.finalAmount ?? prev.finalAmount,

        expectedPoint: result.expectedPoint ?? prev.expectedPoint,
      }));

      setPointInput(String(result.appliedPoints ?? appliedPoints));

      showToast(
        appliedPoints > 0
          ? "적립금이 적용되었습니다."
          : "적립금 사용이 취소되었습니다.",
        true,
      );
    } catch (error) {
      console.error("적립금 적용 실패:", error);

      showToast(error.message || "적립금 적용에 실패했습니다.", false);
    }
  };

  // =========================
  // 적립금 전액 사용
  // =========================

  const handleUseAllPoints = () => {
    if (!checkout) {
      return;
    }

    /*
     * 배송비에는 적립금을 적용하지 않으므로
     * 상품금액까지만 사용 가능
     */
    const maximumPoints = Math.min(
      availablePoints,
      checkout.productAmount ?? 0,
    );

    setPointInput(String(maximumPoints));
  };

  // =========================
  // 결제
  // =========================

  const handlePayment = async () => {
    if (isPaymentProcessing) {
      return;
    }

    if (!isAgreed) {
      showToast("주문 상품 및 결제정보 구매 동의가 필요합니다.", false);

      return;
    }

    if (!checkout?.shippingAddress) {
      showToast("배송지를 선택해주세요.", false);

      return;
    }

    if (paymentMethod === "card" && !selectedCardCompany) {
      showToast("카드사를 선택해주세요.", false);

      return;
    }

    if (paymentMethod === "bank" && !selectedBank) {
      showToast("은행을 선택해주세요.", false);

      return;
    }

    try {
      setIsPaymentProcessing(true);

      // =========================
      // 입력한 적립금이 아직 적용되지 않은 경우
      // 결제 직전에 먼저 적용
      // =========================

      const inputPoints = pointInput === "" ? 0 : Number(pointInput);

      if (!Number.isInteger(inputPoints) || inputPoints < 0) {
        showToast("사용할 적립금을 올바르게 입력해주세요.", false);

        return;
      }

      if (inputPoints > availablePoints) {
        showToast("보유 적립금을 초과할 수 없습니다.", false);

        return;
      }

      if (inputPoints > checkout.productAmount) {
        showToast("상품금액을 초과하여 적립금을 사용할 수 없습니다.", false);

        return;
      }

      if (inputPoints !== (checkout.appliedPoints ?? 0)) {
        const pointResult = await checkoutService.applyPoints(
          checkoutId,
          inputPoints,
          accessToken,
        );

        if (!pointResult.success) {
          throw new Error(pointResult.message || "적립금 적용에 실패했습니다.");
        }

        setCheckout((prev) => ({
          ...prev,

          appliedPoints: pointResult.appliedPoints ?? inputPoints,

          expectedPoint: pointResult.expectedPoint ?? prev.expectedPoint,

          finalAmount: pointResult.finalAmount ?? prev.finalAmount,
        }));

        setPointInput(String(pointResult.appliedPoints ?? inputPoints));
      }

      // =========================
      // Checkout 최종 검증
      // =========================

      const result = await checkoutService.validateCheckout(
        checkoutId,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "주문 정보를 확인하지 못했습니다.");
      }

      /*
       * 최신 명세는 isValid.
       * 기존 Service가 isOrderable로 변환하고 있을 가능성도 있어서
       * 둘 다 대응.
       */
      const isValid = result.isValid ?? result.isOrderable ?? false;

      if (!isValid) {
        const reason = result.reasons?.join(", ") || "현재 주문할 수 없습니다.";

        showToast(reason, false);

        return;
      }

      // =========================
      // 주문 생성
      //
      // 서버에서
      // 주문 생성
      // + 사용 적립금 차감
      // + 적립금 적립
      // + 포인트 히스토리 저장
      // 을 함께 처리
      // =========================

      const orderResult = await createOrder(checkoutId, accessToken);

      if (!orderResult.success) {
        throw new Error(orderResult.message || "주문 생성에 실패했습니다.");
      }

      if (!orderResult.orderId) {
        throw new Error("생성된 주문 정보를 확인할 수 없습니다.");
      }

      /*
       * 주문 생성 응답의 pointBalance가 있으면
       * 현재 화면의 보유 적립금도 최신 값으로 맞춤.
       */
      if (typeof orderResult.pointBalance === "number") {
        setAvailablePoints(orderResult.pointBalance);
      }

      showToast(
        orderResult.message ||
          "결제가 완료되었습니다. 주문해주셔서 감사합니다.",
        true,
      );

      navigate("/mypage/orders", {
        replace: true,
      });
    } catch (error) {
      console.error("주문 처리 실패:", error);

      showToast(error.message || "주문 처리 중 문제가 발생했습니다.", false);
    } finally {
      setIsPaymentProcessing(false);
    }
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
  }

  if (!isLoggedIn || !accessToken) {
    return null;
  }

  if (!checkout) {
    return null;
  }

  const {
    items,
    shippingAddress,
    productAmount,
    shippingFee,
    appliedPoints,
    expectedPoint,
    finalAmount,
  } = checkout;

  return (
    <>
      <S.CheckoutPage>
        <S.BackToCartButton type="button" onClick={() => navigate("/cart")}>
          <span aria-hidden="true">←</span>
          장바구니로 돌아가기
        </S.BackToCartButton>

        <S.PageHeader>
          <h1>결제하기</h1>

          <p>주문 내역을 확인하시고 결제를 진행해주세요.</p>
        </S.PageHeader>

        <S.CheckoutLayout>
          <S.MainColumn>
            {/* =====================
                주문 상품
            ====================== */}

            <InfoSection id="order-products" title="주문 상품">
              <S.ProductList>
                {items.map((product) => (
                  <S.ProductRow key={product.cartItemId ?? product.productId}>
                    <S.ProductThumbnail>
                      {product.thumbnail ? (
                        <img src={product.thumbnail} alt={product.name} />
                      ) : (
                        "사진"
                      )}
                    </S.ProductThumbnail>

                    <S.ProductDetails>
                      <p>{product.name}</p>

                      {product.option && (
                        <S.ProductOption>{product.option}</S.ProductOption>
                      )}

                      <strong>
                        {(
                          product.itemAmount ?? product.price * product.quantity
                        ).toLocaleString()}
                        원
                      </strong>
                    </S.ProductDetails>

                    <S.ProductQuantity>{product.quantity}개</S.ProductQuantity>
                  </S.ProductRow>
                ))}
              </S.ProductList>
            </InfoSection>

            {/* =====================
                주문자 정보
            ====================== */}

            <InfoSection id="customer-info" title="주문자 정보">
              <S.InfoList>
                <S.InfoRow>
                  <span>이름</span>

                  <p>{user?.nickname ?? ""}</p>
                </S.InfoRow>

                <S.InfoRow>
                  <span>연락처</span>

                  <p>{formatPhoneNumber(user?.phone ?? "")}</p>
                </S.InfoRow>

                <S.InfoRow>
                  <span>이메일</span>

                  <p>{user?.email ?? ""}</p>
                </S.InfoRow>
              </S.InfoList>
            </InfoSection>

            {/* =====================
                배송 정보
            ====================== */}

            <InfoSection id="delivery-info" title="배송 정보">
              <S.InfoList className="delivery-info-list">
                <S.MessageBox>
                  <span>배송지 선택</span>

                  <S.CustomDropdown>
                    <S.CustomDropdownTrigger
                      type="button"
                      aria-expanded={isAddressDropdownOpen}
                      aria-haspopup="listbox"
                      onClick={() => {
                        setIsAddressDropdownOpen((isOpen) => !isOpen);

                        setIsDeliveryMemoOpen(false);
                      }}
                    >
                      <span>
                        {shippingAddress
                          ? `${
                              shippingAddress.recipientName || "받는 분 없음"
                            } - ${shippingAddress.address}`
                          : "배송지를 선택해주세요."}
                      </span>

                      <span aria-hidden="true">▾</span>
                    </S.CustomDropdownTrigger>

                    {isAddressDropdownOpen && (
                      <S.CustomDropdownList
                        role="listbox"
                        aria-label="배송지 목록"
                      >
                        {addresses.length > 0 ? (
                          addresses.map((addressItem) => (
                            <S.CustomDropdownOption
                              key={addressItem.shippingAddressId}
                              type="button"
                              role="option"
                              aria-selected={
                                shippingAddress?.shippingAddressId ===
                                addressItem.shippingAddressId
                              }
                              onClick={() => {
                                handleAddressChange(
                                  addressItem.shippingAddressId,
                                );

                                setIsAddressDropdownOpen(false);
                              }}
                            >
                              {addressItem.recipientName || "받는 분 없음"} -{" "}
                              {addressItem.address}
                              {addressItem.isDefault ? " (기본 배송지)" : ""}
                            </S.CustomDropdownOption>
                          ))
                        ) : (
                          <S.CustomDropdownEmpty>
                            등록된 배송지가 없습니다.
                          </S.CustomDropdownEmpty>
                        )}
                      </S.CustomDropdownList>
                    )}
                  </S.CustomDropdown>
                </S.MessageBox>

                <S.MessageBox>
                  <span>배송지 관리</span>

                  <S.MessageTrigger
                    type="button"
                    onClick={() => setIsAddressModalOpen(true)}
                  >
                    + 배송지 추가
                  </S.MessageTrigger>
                </S.MessageBox>

                <S.InfoRow>
                  <span>받는 분</span>

                  <p>{shippingAddress?.recipientName ?? ""}</p>
                </S.InfoRow>

                <S.InfoRow>
                  <span>연락처</span>

                  <p>
                    {formatPhoneNumber(shippingAddress?.recipientPhone ?? "")}
                  </p>
                </S.InfoRow>

                <S.InfoRow>
                  <span>우편번호</span>

                  <p>{shippingAddress?.zipCode ?? ""}</p>
                </S.InfoRow>

                <S.InfoRow>
                  <span>주소</span>

                  <p>{shippingAddress?.address ?? ""}</p>
                </S.InfoRow>

                <S.InfoRow>
                  <span>상세주소</span>

                  <p>{shippingAddress?.detailAddress ?? ""}</p>
                </S.InfoRow>

                <S.MessageBox>
                  <span>배송메모</span>

                  <S.CustomDropdown>
                    <S.CustomDropdownTrigger
                      type="button"
                      aria-expanded={isDeliveryMemoOpen}
                      aria-haspopup="listbox"
                      onClick={() => {
                        setIsDeliveryMemoOpen((isOpen) => !isOpen);

                        setIsAddressDropdownOpen(false);
                      }}
                    >
                      <span>{deliveryMemo}</span>

                      <span aria-hidden="true">▾</span>
                    </S.CustomDropdownTrigger>

                    {isDeliveryMemoOpen && (
                      <S.CustomDropdownList
                        role="listbox"
                        aria-label="배송메모 목록"
                      >
                        {deliveryMemos.map((memo) => (
                          <S.CustomDropdownOption
                            key={memo}
                            type="button"
                            role="option"
                            aria-selected={deliveryMemo === memo}
                            onClick={() => {
                              setDeliveryMemo(memo);

                              setIsDeliveryMemoOpen(false);
                            }}
                          >
                            {memo}
                          </S.CustomDropdownOption>
                        ))}
                      </S.CustomDropdownList>
                    )}
                  </S.CustomDropdown>
                </S.MessageBox>

                <S.MessageBox>
                  <span>요청사항</span>

                  {isRequestInputOpen ? (
                    <S.MessageInput
                      autoFocus
                      value={requestMessage}
                      onChange={(event) =>
                        setRequestMessage(event.target.value)
                      }
                      placeholder="요청사항을 입력해주세요."
                      aria-label="요청사항 직접 입력"
                    />
                  ) : (
                    <S.MessageTrigger
                      type="button"
                      onClick={() => setIsRequestInputOpen(true)}
                    >
                      요청사항 직접 입력하기
                    </S.MessageTrigger>
                  )}
                </S.MessageBox>
              </S.InfoList>
            </InfoSection>

            {/* =====================
                적립금
            ====================== */}

            <InfoSection id="points-info" title="적립금 사용">
              <S.PointRows>
                <S.InfoRow>
                  <span>보유 적립금</span>

                  <p>{availablePoints.toLocaleString()}원</p>
                </S.InfoRow>

                <S.PointInputRow>
                  <span>적립금 입력</span>

                  <input
                    type="number"
                    min="0"
                    max={Math.min(availablePoints, productAmount)}
                    value={pointInput}
                    onChange={(event) => setPointInput(event.target.value)}
                    onBlur={handleApplyPoints}
                    placeholder="사용할 적립금을 입력해주세요."
                    aria-label="사용할 적립금"
                  />

                  <button type="button" onClick={handleUseAllPoints}>
                    전액사용
                  </button>
                </S.PointInputRow>

                <small>
                  사용 가능 적립금{" "}
                  <strong>{availablePoints.toLocaleString()}원</strong>
                </small>
              </S.PointRows>
            </InfoSection>

            {/* =====================
                결제수단
            ====================== */}

            <InfoSection id="payment-method" title="결제수단">
              <S.PaymentOptions>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                  />

                  <p>신용/체크카드</p>
                </label>

                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(event) => setPaymentMethod(event.target.value)}
                  />

                  <p>무통장입금</p>
                </label>
              </S.PaymentOptions>

              {paymentMethod === "card" && (
                <S.PaymentSelect>
                  <S.PaymentTrigger
                    type="button"
                    aria-expanded={isCardCompanyOpen}
                    aria-haspopup="listbox"
                    onClick={() => setIsCardCompanyOpen((isOpen) => !isOpen)}
                  >
                    <span>{selectedCardCompany || "카드사 선택"}</span>

                    <span aria-hidden="true">▾</span>
                  </S.PaymentTrigger>

                  {isCardCompanyOpen && (
                    <S.PaymentOptionsList
                      role="listbox"
                      aria-label="카드사 목록"
                    >
                      {cardCompanies.map((cardCompany) => (
                        <S.PaymentOption
                          key={cardCompany}
                          type="button"
                          role="option"
                          aria-selected={selectedCardCompany === cardCompany}
                          onClick={() => {
                            setSelectedCardCompany(cardCompany);

                            setIsCardCompanyOpen(false);
                          }}
                        >
                          {cardCompany}
                        </S.PaymentOption>
                      ))}
                    </S.PaymentOptionsList>
                  )}
                </S.PaymentSelect>
              )}

              {paymentMethod === "bank" && (
                <S.PaymentSelect>
                  <S.PaymentTrigger
                    type="button"
                    aria-expanded={isBankOpen}
                    aria-haspopup="listbox"
                    onClick={() => setIsBankOpen((isOpen) => !isOpen)}
                  >
                    <span>{selectedBank || "은행 선택"}</span>

                    <span aria-hidden="true">▾</span>
                  </S.PaymentTrigger>

                  {isBankOpen && (
                    <S.PaymentOptionsList role="listbox" aria-label="은행 목록">
                      {bankCompanies.map((bank) => (
                        <S.PaymentOption
                          key={bank}
                          type="button"
                          role="option"
                          aria-selected={selectedBank === bank}
                          onClick={() => {
                            setSelectedBank(bank);

                            setIsBankOpen(false);
                          }}
                        >
                          {bank}
                        </S.PaymentOption>
                      ))}
                    </S.PaymentOptionsList>
                  )}
                </S.PaymentSelect>
              )}
            </InfoSection>
          </S.MainColumn>

          {/* =====================
              결제 금액
          ====================== */}

          <S.SideColumn>
            <S.PriceSummary>
              <S.SectionTitle>결제 금액</S.SectionTitle>

              <S.PriceRow>
                <span>상품금액</span>

                <p>{productAmount.toLocaleString()}원</p>
              </S.PriceRow>

              <S.PriceRow>
                <span>배송비</span>

                <p>+{shippingFee.toLocaleString()}원</p>
              </S.PriceRow>

              <S.PriceRow>
                <span>적립금 사용</span>

                <p>-{appliedPoints.toLocaleString()}원</p>
              </S.PriceRow>

              <S.TotalRow>
                <span>총 결제금액</span>

                <p>{finalAmount.toLocaleString()}원</p>
              </S.TotalRow>

              <S.RewardRow>
                <span>결제 후 적립 예정</span>

                <p>{expectedPoint.toLocaleString()}원</p>
              </S.RewardRow>
            </S.PriceSummary>

            <S.AgreementBox>
              <label>
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(event) => setIsAgreed(event.target.checked)}
                />

                <p>전체 동의</p>
              </label>

              <p>주문 상품 및 결제정보를 확인하였으며 구매에 동의합니다.</p>
            </S.AgreementBox>

            <S.SubmitButtonWrapper>
              <S.HoverCats className="hover-cats" aria-label="고양이 장식">
                <img src={logoEat} alt="" />

                <img src={logoClean} alt="" />

                <img src={logoHigh} alt="" />

                <img src={logoPlay} alt="" />

                <img src={logoRest} alt="" />
              </S.HoverCats>

              <S.SubmitButton
                type="button"
                onClick={handlePayment}
                disabled={isPaymentProcessing}
              >
                {isPaymentProcessing
                  ? "결제 처리 중..."
                  : `${finalAmount.toLocaleString()}원 결제하기`}
              </S.SubmitButton>
            </S.SubmitButtonWrapper>
          </S.SideColumn>
        </S.CheckoutLayout>
      </S.CheckoutPage>

      {/* =========================
          배송지 추가 모달
      ========================== */}

      {isAddressModalOpen && (
        <S.ModalOverlay onClick={() => setIsAddressModalOpen(false)}>
          <S.AddressModal
            role="dialog"
            aria-modal="true"
            aria-labelledby="address-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <S.ModalHeader>
              <h2 id="address-modal-title">배송지 추가</h2>

              <S.ModalCloseButton
                type="button"
                aria-label="배송지 추가 모달 닫기"
                onClick={() => setIsAddressModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </S.ModalCloseButton>
            </S.ModalHeader>

            <S.AddressForm onSubmit={handleAddAddress}>
              <S.ModalInput
                type="text"
                name="recipientName"
                value={newAddress.recipientName}
                onChange={handleAddressInputChange}
                placeholder="받는 분"
              />

              <S.ModalInput
                type="tel"
                name="recipientPhone"
                value={newAddress.recipientPhone}
                onChange={handlePhoneChange}
                placeholder="휴대폰번호를 입력해주세요"
                inputMode="numeric"
                autoComplete="tel"
                maxLength={13}
                aria-label="연락처"
              />

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <strong
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                  }}
                >
                  주소
                </strong>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "stretch",
                    gap: "10px",
                  }}
                >
                  <S.ModalInput
                    type="text"
                    name="zipCode"
                    value={newAddress.zipCode}
                    placeholder="우편번호"
                    readOnly
                    aria-label="우편번호"
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  />

                  <button
                    type="button"
                    onClick={handleAddressSearch}
                    style={{
                      flexShrink: 0,
                      minWidth: "110px",
                      padding: "0 16px",
                      border: "none",
                      borderRadius: "14px",
                      backgroundColor: "#ebccb2",
                      color: "#4F3927",
                      fontSize: "15px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    우편번호검색
                  </button>
                </div>

                <S.ModalInput
                  type="text"
                  name="address"
                  value={newAddress.address}
                  placeholder="주소"
                  readOnly
                  aria-label="주소"
                />

                <S.ModalInput
                  type="text"
                  name="detailAddress"
                  value={newAddress.detailAddress}
                  onChange={handleAddressInputChange}
                  placeholder="상세주소를 입력해주세요"
                  aria-label="상세주소"
                />
              </div>

              <label>
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={newAddress.isDefault}
                  onChange={handleAddressInputChange}
                />
                기본 배송지로 설정
              </label>

              <S.AddressModalSubmit
                type="submit"
                disabled={isAddressSubmitting}
              >
                {isAddressSubmitting ? "추가 중..." : "배송지 추가하기"}
              </S.AddressModalSubmit>
            </S.AddressForm>
          </S.AddressModal>
        </S.ModalOverlay>
      )}
    </>
  );
}

export default CheckoutPage;
