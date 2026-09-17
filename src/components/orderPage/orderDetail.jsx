import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as S from "./orderStyle";
import * as orderService from "../../services/orderServices";

import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";

import Loader from "../loader/Loader";


const STATUS_LABELS = {
  PAYMENT_COMPLETED: "결제완료",
  PREPARING_SHIPMENT: "상품준비중",
  SHIPPING: "배송중",
  DELIVERED: "배송완료",
  CONFIRMED: "구매결정",
  CANCELED: "주문취소",
};


const PAYMENT_METHOD_LABELS = {
  CARD: "카드",
  BANK: "무통장입금",
};


const ACTIVE_CLAIM_STATUSES = ["REQUESTED", "PROCESSING"];


function formatDate(dateString) {
  if (!dateString) {
    return "-";
  }

  return new Date(dateString).toLocaleString("ko-KR");
}


function formatPrice(price) {
  return `${Number(price ?? 0).toLocaleString("ko-KR")}원`;
}


function getCancelClaims(order) {
  if (!Array.isArray(order?.claims)) {
    return [];
  }

  return order.claims.filter((claim) => claim.type === "CANCEL");
}


function findAllCancelClaim(order) {
  const cancelClaims = getCancelClaims(order);

  return (
    cancelClaims.find(
      (claim) =>
        claim.scope === "ALL" ||
        (claim.scope == null &&
          claim.productId == null &&
          !Array.isArray(claim.items)),
    ) ?? null
  );
}


function isProductIncludedInClaim(claim, productId) {
  if (!claim || productId == null) {
    return false;
  }

  
  if (claim.type === "CANCEL" && claim.scope === "ALL") {
    return true;
  }

  
  if (claim.productId != null) {
    return String(claim.productId) === String(productId);
  }

  
  if (Array.isArray(claim.items)) {
    return claim.items.some((item) => {
      const claimProductId = item.productId ?? item.product?.productId;

      return String(claimProductId) === String(productId);
    });
  }

  return false;
}


function findProductCancelClaim(order, productId) {
  const cancelClaims = getCancelClaims(order);

  return (
    cancelClaims.find((claim) => isProductIncludedInClaim(claim, productId)) ??
    null
  );
}


function findProductClaim(order, productId) {
  if (!Array.isArray(order?.claims)) {
    return null;
  }

  return (
    order.claims.find(
      (claim) =>
        (claim.type === "EXCHANGE" || claim.type === "RETURN") &&
        isProductIncludedInClaim(claim, productId),
    ) ?? null
  );
}


function getCancelStatusLabel(claim) {
  if (!claim) {
    return null;
  }

  switch (claim.status) {
    case "REQUESTED":
      return "취소 신청완료";

    case "PROCESSING":
      return "취소 처리중";

    case "COMPLETED":
      return "취소완료";

    case "REJECTED":
      return "취소 처리불가";

    default:
      return null;
  }
}


function getExchangeStatusLabel(claim) {
  if (!claim) {
    return null;
  }

  switch (claim.status) {
    case "REQUESTED":
      return "교환 신청완료";

    case "PROCESSING":
      return "교환 처리중";

    case "COMPLETED":
      return "교환완료";

    case "REJECTED":
      return "교환 처리불가";

    default:
      return null;
  }
}


function getReturnStatusLabel(claim) {
  if (!claim) {
    return null;
  }

  switch (claim.status) {
    case "REQUESTED":
      return "반품 신청완료";

    case "PROCESSING":
      return "반품 처리중";

    case "COMPLETED":
      return "반품완료";

    case "REJECTED":
      return "반품 처리불가";

    default:
      return null;
  }
}


function getOrderStatusLabel(order) {
  const allCancelClaim = findAllCancelClaim(order);

  
  if (allCancelClaim) {
    const cancelStatus = getCancelStatusLabel(allCancelClaim);

    if (cancelStatus) {
      return cancelStatus;
    }
  }

  
  if (
    order.status === "CANCELED" &&
    !getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")
  ) {
    return "주문취소";
  }

  
  if (
    order.status === "CANCELED" &&
    getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")
  ) {
    return "결제완료";
  }

  return STATUS_LABELS[order.status] ?? order.status;
}


function getProductStatusLabel(order, product) {
  const productId = product.productId;

  
  const cancelClaim = findProductCancelClaim(order, productId);

  if (cancelClaim) {
    const cancelStatus = getCancelStatusLabel(cancelClaim);

    if (cancelStatus) {
      return cancelStatus;
    }
  }

  
  const productClaim = findProductClaim(order, productId);

  if (productClaim) {
    if (productClaim.type === "EXCHANGE") {
      const exchangeStatus = getExchangeStatusLabel(productClaim);

      if (exchangeStatus) {
        return exchangeStatus;
      }
    }

    if (productClaim.type === "RETURN") {
      const returnStatus = getReturnStatusLabel(productClaim);

      if (returnStatus) {
        return returnStatus;
      }
    }
  }

  
  if (product.status) {
    return STATUS_LABELS[product.status] ?? product.status;
  }

  
  if (order.status === "CANCELED") {
    const hasPartialCancel = getCancelClaims(order).some(
      (claim) => claim.scope === "PARTIAL",
    );

    if (hasPartialCancel) {
      return "결제완료";
    }
  }

  
  if (order.status === "DELIVERED") {
    return "배송완료";
  }

  
  return STATUS_LABELS[order.status] ?? order.status;
}


function hasActiveAllCancelClaim(order) {
  const claim = findAllCancelClaim(order);

  return Boolean(claim && ACTIVE_CLAIM_STATUSES.includes(claim.status));
}


function hasActiveProductClaim(order, productId) {
  const cancelClaim = findProductCancelClaim(order, productId);

  if (cancelClaim && ACTIVE_CLAIM_STATUSES.includes(cancelClaim.status)) {
    return true;
  }

  const productClaim = findProductClaim(order, productId);

  return Boolean(
    productClaim && ACTIVE_CLAIM_STATUSES.includes(productClaim.status),
  );
}


function isProductCancelClaimed(order, productId) {
  const cancelClaim = findProductCancelClaim(order, productId);

  if (!cancelClaim) {
    return false;
  }

  return ["REQUESTED", "PROCESSING", "COMPLETED"].includes(cancelClaim.status);
}


function OrderRow({ label, children }) {
  return (
    <S.InfoRow>
      <S.InfoLabel>{label}</S.InfoLabel>

      {children}
    </S.InfoRow>
  );
}


function Chevron({ isOpen }) {
  return (
    <S.ChevronIcon
      isOpen={isOpen}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9l6 6 6-6" />
    </S.ChevronIcon>
  );
}


function CollapsiblePanel({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Panel>
      <S.AccordionHeader
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
      >
        {title}

        <Chevron isOpen={isOpen} />
      </S.AccordionHeader>

      <S.PanelBody isOpen={isOpen}>{children}</S.PanelBody>
    </S.Panel>
  );
}


function ProductItem({
  product,
  statusLabel,
  canWriteReview,
  canRequestClaim,
  showCancelButton,
  onReview,
  onClaim,
  onCancel,
}) {
  return (
    <S.ProductItemWrap>
      <S.Thumb>
        {product.thumbnail ? (
          <img src={product.thumbnail} alt={product.name} />
        ) : (
          <S.ThumbText />
        )}
      </S.Thumb>

      <S.ProductBody>
        <S.ProductName>{product.name}</S.ProductName>

        <S.ProductOption>상품번호 {product.productId}</S.ProductOption>

        <S.PriceRow>
          <S.ProductPrice>{formatPrice(product.itemAmount)}</S.ProductPrice>

          <S.ProductQty>{product.quantity}개</S.ProductQty>
        </S.PriceRow>
      </S.ProductBody>

      <S.ProductActions>
        <S.StatusBadgeSmall>{statusLabel}</S.StatusBadgeSmall>

        <S.ActionButtons>
          {canWriteReview && (
            <S.GhostButton
              type="button"
              onClick={() => onReview(product.productId)}
            >
              구매평 작성
            </S.GhostButton>
          )}

          {canRequestClaim && (
            <S.GhostButton
              type="button"
              onClick={() => onClaim(product.productId)}
            >
              반품/교환
            </S.GhostButton>
          )}

          {showCancelButton && (
            <S.GhostButton type="button" onClick={onCancel}>
              주문 취소
            </S.GhostButton>
          )}
        </S.ActionButtons>
      </S.ProductActions>
    </S.ProductItemWrap>
  );
}

export default function OrderDetail() {
  const [order, setOrder] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const { orderId } = useParams();

  const navigate = useNavigate();

  const { accessToken, isAuthLoading } = useAuth();

  const { showToast } = useToast();

  
  useEffect(() => {
    if (isAuthLoading || !accessToken || !orderId) {
      return;
    }

    let isCancelled = false;

    orderService
      .getOrder(orderId, accessToken)
      .then((result) => {
        if (isCancelled) {
          return;
        }

        if (!result.success || !result.order) {
          throw new Error(result.message || "주문 정보를 불러오지 못했습니다.");
        }

        setOrder(result.order);
      })
      .catch((error) => {
        if (isCancelled) {
          return;
        }

        console.error("주문 상세 조회 실패:", error);

        showToast(error.message || "주문 정보를 불러오지 못했습니다.", false);
      })
      .finally(() => {
        if (!isCancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [orderId, accessToken, isAuthLoading, showToast]);

  
  const handleReview = (productId) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      productId: String(productId),
    });

    navigate(`/reviews?${searchParams.toString()}`);
  };

  
  const handleClaim = (productId) => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
      productId: String(productId),
    });

    navigate(`/claims?${searchParams.toString()}`);
  };

  
  const handleCancel = () => {
    const searchParams = new URLSearchParams({
      orderId: String(orderId),
    });

    navigate(`/claims/cancel?${searchParams.toString()}`);
  };

  if (isAuthLoading || isLoading) {
    return <Loader />;
  }

  if (!order) {
    return null;
  }

  const { shippingInfo, payment } = order;

  
  const orderStatusLabel = getOrderStatusLabel(order);

  
  const activeAllCancelClaim = hasActiveAllCancelClaim(order);

  
  const hasCancelableProduct =
    order.items?.some(
      (product) => !isProductCancelClaimed(order, product.productId),
    ) ?? false;

  
  const canCancelOrder =
    !activeAllCancelClaim &&
    hasCancelableProduct &&
    (order.status === "PAYMENT_COMPLETED" ||
      (order.status === "CANCELED" &&
        getCancelClaims(order).some((claim) => claim.scope === "PARTIAL")));

  return (
    <S.Page>
      <S.Breadcrumb href="/mypage/orders">
        ← 주문/배송내역으로 돌아가기
      </S.Breadcrumb>

      <S.Header>
        <S.Title>주문 상세보기</S.Title>

        <S.Subtitle>고객님의 주문 내역을 확인해보세요.</S.Subtitle>
      </S.Header>

      <S.SummaryBar>
        <OrderRow label="주문일">
          <S.InfoValue>{formatDate(order.createdAt)}</S.InfoValue>
        </OrderRow>

        <OrderRow label="주문번호">
          <S.InfoValue>{order.orderId}</S.InfoValue>
        </OrderRow>

        <OrderRow label="주문자">
          <S.InfoValue>{order.ordererName}</S.InfoValue>
        </OrderRow>

        <OrderRow label="주문상태">
          <S.StatusBadge>{orderStatusLabel}</S.StatusBadge>
        </OrderRow>

        <OrderRow label="주문 총 금액">
          <S.InfoValueStrong>
            {formatPrice(payment?.finalAmount)}
          </S.InfoValueStrong>
        </OrderRow>
      </S.SummaryBar>

      <S.Section>
        <S.SectionTitle>주문 상품</S.SectionTitle>

        <S.ProductList>
          {order.items?.map((product, index) => {
            
            const activeProductClaim = hasActiveProductClaim(
              order,
              product.productId,
            );

            
            const productStatusLabel = getProductStatusLabel(order, product);

            
            const cancelClaim = findProductCancelClaim(
              order,
              product.productId,
            );

            const exchangeOrReturnClaim = findProductClaim(
              order,
              product.productId,
            );

            const hasProductClaim = Boolean(
              cancelClaim || exchangeOrReturnClaim,
            );

            
            const baseProductStatus = product.status ?? order.status;

            const canUseDeliveredActions =
              baseProductStatus === "DELIVERED" &&
              !hasProductClaim &&
              !activeProductClaim;

            return (
              <ProductItem
                key={product.productId}
                product={product}
                statusLabel={productStatusLabel}
                canWriteReview={canUseDeliveredActions}
                canRequestClaim={canUseDeliveredActions}
                showCancelButton={canCancelOrder && index === 0}
                onReview={handleReview}
                onClaim={handleClaim}
                onCancel={handleCancel}
              />
            );
          })}
        </S.ProductList>
      </S.Section>

      <S.BottomGrid>
        <CollapsiblePanel title="배송 정보">
          <S.PanelRow>
            <S.PanelLabel>받는 분</S.PanelLabel>

            <S.PanelValue>{shippingInfo?.recipientName ?? "-"}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>연락처</S.PanelLabel>

            <S.PanelValue>{shippingInfo?.recipientPhone ?? "-"}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송지</S.PanelLabel>

            <S.PanelValueGroup>
              <S.PanelValue>
                {shippingInfo?.zipCode
                  ? `(${shippingInfo.zipCode}) ${shippingInfo.address}`
                  : (shippingInfo?.address ?? "-")}
              </S.PanelValue>

              <S.PanelValueSub>{shippingInfo?.detailAddress}</S.PanelValueSub>
            </S.PanelValueGroup>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송요청사항</S.PanelLabel>

            <S.PanelValue>{shippingInfo?.deliveryRequest ?? "-"}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송방법</S.PanelLabel>

            <S.PanelValue>택배배송</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>송장번호</S.PanelLabel>

            <S.TrackingGroup>
              <S.PanelValue>1234-5678-9012</S.PanelValue>

              <S.LinkButton type="button">배송조회</S.LinkButton>
            </S.TrackingGroup>
          </S.PanelRow>
        </CollapsiblePanel>

        <CollapsiblePanel title="결제 정보">
          <S.PanelRow>
            <S.PanelLabel>상품금액</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.productAmount)}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>배송비</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.shippingFee)}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>쿠폰할인</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.discountAmount)}</S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>포인트 사용</S.PanelLabel>

            <S.PanelValue>{formatPrice(payment?.appliedPoints)}</S.PanelValue>
          </S.PanelRow>

          <S.Divider />

          <S.PanelRow>
            <S.PanelLabel>총 결제금액</S.PanelLabel>

            <S.InfoValueStrong>
              {formatPrice(payment?.finalAmount)}
            </S.InfoValueStrong>
          </S.PanelRow>

          <S.Divider />

          <S.PanelRow>
            <S.PanelLabel>결제수단</S.PanelLabel>

            <S.PanelValue>
              {PAYMENT_METHOD_LABELS[payment?.paymentMethod] ??
                payment?.paymentMethod ??
                "-"}
            </S.PanelValue>
          </S.PanelRow>

          <S.PanelRow>
            <S.PanelLabel>결제일시</S.PanelLabel>

            <S.PanelValue>{formatDate(payment?.paidAt)}</S.PanelValue>
          </S.PanelRow>
        </CollapsiblePanel>
      </S.BottomGrid>
    </S.Page>
  );
}
