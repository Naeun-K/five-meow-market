import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./checkoutStyle";
import * as checkoutService from "../../services/checkOutServices";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import Loader from "../../components/loader/Loader";
import { createOrder } from "../../services/orderServices";

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

// function InfoSection({ id, title, children, defaultOpen = false }) {
//   const [isOpen, setIsOpen] = useState(defaultOpen);

//   return (
//     <S.InfoSection>
//       <S.SectionHeader>
//         <S.SectionTitle>{title}</S.SectionTitle>

//         <S.SectionToggle
//           type="button"
//           aria-expanded={isOpen}
//           aria-controls={id}
//           aria-label={`${title} ${isOpen ? "닫기" : "열기"}`}
//           onClick={() => setIsOpen((open) => !open)}
//         >
//           <S.SectionChevron aria-hidden="true" data-open={isOpen} />
//         </S.SectionToggle>
//       </S.SectionHeader>

//       {isOpen && <S.SectionContent id={id}>{children}</S.SectionContent>}
//     </S.InfoSection>
//   );
// }

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
  const [isLoading, setIsLoading] = useState(true);

  const [deliveryMemo, setDeliveryMemo] = useState("문 앞에 놓아주세요.");

  const [isRequestInputOpen, setIsRequestInputOpen] = useState(false);

  const [requestMessage, setRequestMessage] = useState("");

  const [pointInput, setPointInput] = useState("");

  const [selectedCardCompany, setSelectedCardCompany] = useState("");

  const [isCardCompanyOpen, setIsCardCompanyOpen] = useState(false);

  const [selectedBank, setSelectedBank] = useState("");
  const [isBankOpen, setIsBankOpen] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("card");

  const [isAgreed, setIsAgreed] = useState(false);

  // =========================
  // 배송지 추가 관련 state
  // =========================

  const [isAddressFormOpen, setIsAddressFormOpen] = useState(false);

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
  // Checkout / 배송지 조회
  // =========================

  useEffect(() => {
    if (isAuthLoading) {
      return;
    }

    if (!isLoggedIn || !accessToken) {
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

        const [checkoutResult, addressResult] = await Promise.all([
          checkoutService.getCheckoutSummary(checkoutId, accessToken),

          checkoutService.getShippingAddresses(accessToken),
        ]);

        if (!checkoutResult.success) {
          throw new Error(
            checkoutResult.message || "결제 정보를 불러오지 못했습니다.",
          );
        }

        setCheckout({
          checkoutId: checkoutResult.checkoutId,
          items: checkoutResult.items,
          shippingAddress: checkoutResult.shippingAddress,
          productAmount: checkoutResult.productAmount,
          shippingFee: checkoutResult.shippingFee,
          appliedPoints: checkoutResult.appliedPoints,
          expectedPoint: checkoutResult.expectedPoint,
          finalAmount: checkoutResult.finalAmount,
        });

        if (addressResult.success) {
          setAddresses(addressResult.addresses ?? []);
        }
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

    try {
      const result = await checkoutService.selectShippingAddress(
        checkoutId,
        shippingAddressId,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "배송지 선택에 실패했습니다.");
      }

      setCheckout((prev) => ({
        ...prev,
        shippingAddress: result.shippingAddress,
      }));
    } catch (error) {
      console.error("배송지 선택 실패:", error);

      showToast(error.message || "배송지 선택에 실패했습니다.", false);
    }
  };

  // =========================
  // 배송지 입력
  // =========================

  const handleAddressInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setNewAddress((prev) => ({
      ...prev,

      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // =========================
  // 배송지 추가
  // =========================

  const handleAddAddress = async () => {
    const recipientName = newAddress.recipientName.trim();

    const recipientPhone = newAddress.recipientPhone.trim();

    const zipCode = newAddress.zipCode.trim();

    const address = newAddress.address.trim();

    const detailAddress = newAddress.detailAddress.trim();

    if (!recipientName) {
      showToast("받는 분을 입력해주세요.", false);
      return;
    }

    if (!recipientPhone) {
      showToast("연락처를 입력해주세요.", false);
      return;
    }

    if (!zipCode) {
      showToast("우편번호를 입력해주세요.", false);
      return;
    }

    if (!address) {
      showToast("주소를 입력해주세요.", false);
      return;
    }

    try {
      setIsAddressSubmitting(true);

      // 1. 배송지 추가
      const result = await checkoutService.addShippingAddress(
        {
          recipientName,
          recipientPhone,
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

      const shippingAddressId = result.shippingAddressId;

      if (!shippingAddressId) {
        throw new Error("추가된 배송지 정보를 확인할 수 없습니다.");
      }

      // 2. 배송지 목록 다시 조회
      const addressResult =
        await checkoutService.getShippingAddresses(accessToken);

      if (!addressResult.success) {
        throw new Error(
          addressResult.message || "배송지 목록 조회에 실패했습니다.",
        );
      }

      setAddresses(addressResult.addresses ?? []);

      // 3. 방금 추가한 배송지를 현재 Checkout에 선택
      const selectResult = await checkoutService.selectShippingAddress(
        checkoutId,
        shippingAddressId,
        accessToken,
      );

      if (!selectResult.success) {
        throw new Error(selectResult.message || "배송지 선택에 실패했습니다.");
      }

      setCheckout((prev) => ({
        ...prev,
        shippingAddress: selectResult.shippingAddress,
      }));

      // 4. 입력폼 초기화
      setNewAddress({
        recipientName: "",
        recipientPhone: "",
        zipCode: "",
        address: "",
        detailAddress: "",
        isDefault: false,
      });

      setIsAddressFormOpen(false);

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
    const appliedPoints = Number(pointInput);

    if (!Number.isInteger(appliedPoints) || appliedPoints < 0) {
      showToast("사용할 적립금을 올바르게 입력해주세요.", false);

      return;
    }

    const availablePoints = user?.point ?? 0;

    if (appliedPoints > availablePoints) {
      showToast("보유 적립금을 초과할 수 없습니다.", false);

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
        appliedPoints: result.appliedPoints,
        finalAmount: result.finalAmount,
        expectedPoint: result.expectedPoint,
      }));

      setPointInput(String(result.appliedPoints));

      showToast("적립금이 적용되었습니다.", true);
    } catch (error) {
      console.error("적립금 적용 실패:", error);

      showToast(error.message || "적립금 적용에 실패했습니다.", false);
    }
  };

  // =========================
  // 적립금 전액 사용
  // =========================

  // const handleUseAllPoints = () => {
  //   const availablePoints = user?.point ?? 0;

  //   const maximumPoints = Math.min(
  //     availablePoints,
  //     (checkout?.productAmount ?? 0) + (checkout?.shippingFee ?? 0),
  //   );

  //   setPointInput(String(maximumPoints));
  // };

  // =========================
  // 결제 검증
  // =========================

  const handlePayment = async () => {
    if (!isAgreed) {
      showToast("주문 상품 및 결제정보 구매 동의가 필요합니다.", false);
      return;
    }

    if (!checkout?.shippingAddress) {
      showToast("배송지를 선택해주세요.", false);
      return;
    }

    // 카드 결제를 선택한 경우에만 카드사 검사
    if (paymentMethod === "card" && !selectedCardCompany) {
      showToast("카드사를 선택해주세요.", false);
      return;
    }

    // 무통장입금을 선택한 경우에만 은행 검사
    if (paymentMethod === "bank" && !selectedBank) {
      showToast("은행을 선택해주세요.", false);
      return;
    }

    try {
      // Checkout 최종 검증
      const result = await checkoutService.validateCheckout(
        checkoutId,
        accessToken,
      );

      if (!result.success) {
        throw new Error(result.message || "주문 정보를 확인하지 못했습니다.");
      }

      // 주문 불가능 상태
      if (!result.isOrderable) {
        const reason = result.reasons?.join(", ") || "현재 주문할 수 없습니다.";

        showToast(reason, false);

        return;
      }

      // 주문 생성
      const orderResult = await createOrder(checkoutId, accessToken);

      if (!orderResult.success) {
        throw new Error(orderResult.message || "주문 생성에 실패했습니다.");
      }

      // 주문 생성 성공 후에만 완료 처리
      showToast("결제가 완료되었습니다. 주문해주셔서 감사합니다.", true);

      navigate("/");
    } catch (error) {
      console.error("주문 처리 실패:", error);

      showToast(error.message || "주문 처리 중 문제가 발생했습니다.", false);
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

  const availablePoints = user?.point ?? 0;

  return (
    <S.CheckoutPage>
      <S.PageHeader>
        <h1>결제하기</h1>

        <p>주문 내역을 확인하시고 결제를 진행해주세요.</p>
      </S.PageHeader>

      <S.CheckoutLayout>
        <S.MainColumn>
          {/* =========================
              주문 상품
          ========================== */}

          <InfoSection id="order-products" title="주문 상품" defaultOpen>
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

          {/* =========================
              주문자 정보
          ========================== */}

          <InfoSection id="customer-info" title="주문자 정보">
            <S.InfoList>
              <S.InfoRow>
                <span>이름</span>

                <p>{user?.nickname ?? ""}</p>
              </S.InfoRow>

              <S.InfoRow>
                <span>연락처</span>

                <p>{user?.phone ?? ""}</p>
              </S.InfoRow>

              <S.InfoRow>
                <span>이메일</span>

                <p>{user?.email ?? ""}</p>
              </S.InfoRow>
            </S.InfoList>
          </InfoSection>

          {/* =========================
              배송 정보
          ========================== */}

          <InfoSection id="delivery-info" title="배송 정보">
            <S.InfoList>
              {/* 배송지 선택 */}

              {addresses.length > 0 && (
                <S.MessageBox>
                  <span>배송지 선택</span>

                  <S.MessageSelect
                    value={shippingAddress?.shippingAddressId ?? ""}
                    onChange={(event) =>
                      handleAddressChange(event.target.value)
                    }
                    aria-label="배송지 선택"
                  >
                    <option value="">배송지를 선택해주세요.</option>

                    {addresses.map((addressItem) => (
                      <option
                        key={addressItem.shippingAddressId}
                        value={addressItem.shippingAddressId}
                      >
                        {addressItem.recipientName} - {addressItem.address}
                        {addressItem.isDefault ? " (기본 배송지)" : ""}
                      </option>
                    ))}
                  </S.MessageSelect>
                </S.MessageBox>
              )}

              {/* 배송지 추가 버튼 */}

              <S.MessageBox>
                <span>배송지 관리</span>

                <S.MessageTrigger
                  type="button"
                  onClick={() => setIsAddressFormOpen((prev) => !prev)}
                >
                  {isAddressFormOpen ? "배송지 추가 취소" : "+ 배송지 추가"}
                </S.MessageTrigger>
              </S.MessageBox>

              {/* 배송지 추가 입력폼 */}

              {isAddressFormOpen && (
                <>
                  <S.MessageBox>
                    <span>받는 분</span>

                    <S.MessageInput
                      type="text"
                      name="recipientName"
                      value={newAddress.recipientName}
                      onChange={handleAddressInputChange}
                      placeholder="받는 분을 입력해주세요."
                    />
                  </S.MessageBox>

                  <S.MessageBox>
                    <span>연락처</span>

                    <S.MessageInput
                      type="tel"
                      name="recipientPhone"
                      value={newAddress.recipientPhone}
                      onChange={handleAddressInputChange}
                      placeholder="01012345678"
                    />
                  </S.MessageBox>

                  <S.MessageBox>
                    <span>우편번호</span>

                    <S.MessageInput
                      type="text"
                      name="zipCode"
                      value={newAddress.zipCode}
                      onChange={handleAddressInputChange}
                      placeholder="우편번호"
                    />
                  </S.MessageBox>

                  <S.MessageBox>
                    <span>주소</span>

                    <S.MessageInput
                      type="text"
                      name="address"
                      value={newAddress.address}
                      onChange={handleAddressInputChange}
                      placeholder="주소를 입력해주세요."
                    />
                  </S.MessageBox>

                  <S.MessageBox>
                    <span>상세주소</span>

                    <S.MessageInput
                      type="text"
                      name="detailAddress"
                      value={newAddress.detailAddress}
                      onChange={handleAddressInputChange}
                      placeholder="상세주소를 입력해주세요."
                    />
                  </S.MessageBox>

                  <S.MessageBox>
                    <span>기본 배송지</span>

                    <label>
                      <input
                        type="checkbox"
                        name="isDefault"
                        checked={newAddress.isDefault}
                        onChange={handleAddressInputChange}
                      />
                      기본 배송지로 설정
                    </label>
                  </S.MessageBox>

                  <S.MessageBox>
                    <span />

                    <S.MessageTrigger
                      type="button"
                      onClick={handleAddAddress}
                      disabled={isAddressSubmitting}
                    >
                      {isAddressSubmitting ? "추가 중..." : "배송지 추가하기"}
                    </S.MessageTrigger>
                  </S.MessageBox>
                </>
              )}

              {/* 현재 선택된 배송지 */}

              <S.InfoRow>
                <span>받는 분</span>

                <p>{shippingAddress?.recipientName ?? ""}</p>
              </S.InfoRow>

              <S.InfoRow>
                <span>연락처</span>

                <p>{shippingAddress?.recipientPhone ?? ""}</p>
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

              {/* 배송 메모 */}

              <S.MessageBox>
                <span>배송메모</span>

                <S.MessageSelect
                  value={deliveryMemo}
                  onChange={(event) => setDeliveryMemo(event.target.value)}
                  aria-label="배송메모 선택"
                >
                  <option value="문 앞에 놓아주세요.">문 앞</option>

                  <option value="직접 받고 부재 시 문 앞에 놓아주세요.">
                    직접 받고 부재 시 문 앞
                  </option>

                  <option value="경비실에 맡겨주세요.">경비실</option>

                  <option value="택배함에 넣어주세요.">택배함</option>

                  <option value="기타사항">기타사항</option>
                </S.MessageSelect>
              </S.MessageBox>

              {/* 요청사항 */}

              <S.MessageBox>
                <span>요청사항</span>

                {isRequestInputOpen ? (
                  <S.MessageInput
                    autoFocus
                    value={requestMessage}
                    onChange={(event) => setRequestMessage(event.target.value)}
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

          {/* =========================
              적립금 사용
          ========================== */}

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
                  max={availablePoints}
                  value={pointInput}
                  onChange={(event) => setPointInput(event.target.value)}
                  placeholder="사용할 적립금을 입력해주세요."
                  aria-label="사용할 적립금"
                />

                <button type="button" onClick={handleApplyPoints}>
                  전액사용
                </button>
              </S.PointInputRow>

              <small>
                사용 가능 적립금{" "}
                <strong>{availablePoints.toLocaleString()}원</strong>
              </small>

              {/* <button type="button" onClick={handleApplyPoints}>
                적립금 적용
              </button> */}
            </S.PointRows>
          </InfoSection>

          {/* =========================
              결제수단
          ========================== */}

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
                  <S.PaymentOptionsList role="listbox" aria-label="카드사 목록">
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
            {/* 무통장입금 은행 선택 */}
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

        {/* =========================
            결제 금액
        ========================== */}

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

          {/* 구매 동의 */}

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

          {/* 결제 버튼 */}

          <S.SubmitButton type="button" onClick={handlePayment}>
            {finalAmount.toLocaleString()}원 결제하기
          </S.SubmitButton>
        </S.SideColumn>
      </S.CheckoutLayout>
    </S.CheckoutPage>
  );
}

export default CheckoutPage;
