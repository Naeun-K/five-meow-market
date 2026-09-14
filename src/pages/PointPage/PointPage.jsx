import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicPage from "../basicPage/BasicPage";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/loader/Loader";
import { getPointHistory, getPoints } from "../../services/userService";
import { mockGetMyPoint, mockGetPointHistory } from "../../data/mockUser";
import {
  page,
  pageHeader,
  pageTitle,
  pageSubtitle,
  balanceCard,
  balanceLabel,
  balanceValue,
  balanceCaption,
  historySection,
  sectionTitle,
  filterGroup,
  filterButton,
  historyContainer,
  historyCard,
  historyRow,
  historyDate,
  historyAmount,
  historyBalance,
  historyLabel,
  historyMeta,
  historyTable,
  tableHeader,
  tableRow,
  tableInfo,
  tableCell,
  emptyState,
  emptyIcon,
  emptyTitle,
  emptyText,
  emptyButton,
  loginNotice,
} from "./PointPageStyle";

const FILTERS = [
  { key: "ALL", label: "전체" },
  { key: "EARN", label: "적립" },
  { key: "USE", label: "사용" },
];

function formatAmount(value) {
  return `${Number(value ?? 0).toLocaleString()}P`;
}

function formatSignedAmount(type, amount) {
  const numericAmount = Number(amount ?? 0);
  const sign = type === "EARN" ? "+" : "-";
  return `${sign}${numericAmount.toLocaleString()}P`;
}

function formatDateTime(value) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}.${month}.${day} ${hours}:${minutes}`;
}

function PointPage() {
  const navigate = useNavigate();
  const { accessToken, isLoggedIn, isAuthLoading } = useAuth();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [pointBalance, setPointBalance] = useState(0);
  const [pointHistory, setPointHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      setIsLoading(false);
      return;
    }

    const loadPointData = async () => {
      try {
        setIsLoading(true);

        const [balanceResponse, historyResponse] = await Promise.all([
          getPoints(accessToken),
          getPointHistory(accessToken),
        ]);

        const nextBalance = Number(balanceResponse?.point ?? 0);
        const nextHistory = Array.isArray(historyResponse?.pointHistory)
          ? historyResponse.pointHistory
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          : [];

        setPointBalance(nextBalance);
        setPointHistory(nextHistory);
      } catch {
        const fallbackBalance = mockGetMyPoint();
        const fallbackHistory = mockGetPointHistory();

        setPointBalance(Number(fallbackBalance?.point ?? 0));
        setPointHistory(
          Array.isArray(fallbackHistory?.pointHistory)
            ? fallbackHistory.pointHistory
                .slice()
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
            : [],
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadPointData();
  }, [accessToken, isLoggedIn]);

  const filteredHistory = useMemo(() => {
    if (activeFilter === "ALL") return pointHistory;
    return pointHistory.filter((item) => item.type === activeFilter);
  }, [activeFilter, pointHistory]);

  if (isAuthLoading) {
    return (
      <BasicPage>
        <Loader />
      </BasicPage>
    );
  }

  if (!isLoggedIn) {
    return (
      <BasicPage>
        <div css={loginNotice}>로그인이 필요합니다.</div>
      </BasicPage>
    );
  }

  return (
    <BasicPage>
      <main css={page}>
        <header css={pageHeader}>
          <h1 css={pageTitle}>적립금</h1>
          <p css={pageSubtitle}>적립 및 사용 내역을 확인해보세요.</p>
        </header>

        <section css={balanceCard}>
          <p css={balanceLabel}>사용 가능한 적립금</p>
          <p css={balanceValue}>{formatAmount(pointBalance)}</p>
          <p css={balanceCaption}>주문/결제 시 사용할 수 있어요.</p>
        </section>

        <section css={historySection}>
          <h2 css={sectionTitle}>적립금 내역</h2>

          <div css={filterGroup}>
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                css={filterButton(activeFilter === filter.key)}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div css={historyContainer}>불러오는 중입니다...</div>
          ) : filteredHistory.length === 0 ? (
            <div css={emptyState}>
              <div css={emptyIcon}>🐾</div>
              <h3 css={emptyTitle}>아직 적립금 내역이 없습니다.</h3>
              <p css={emptyText}>
                상품을 구매하면
                <br />
                적립된 내역을 여기에서 확인할 수 있어요.
              </p>
              <button
                type="button"
                css={emptyButton}
                onClick={() => navigate("/products")}
              >
                상품 보러가기
              </button>
            </div>
          ) : (
            <>
              <div css={historyContainer} className="mobile-history">
                {filteredHistory.map((item) => (
                  <article key={item.id} css={historyCard}>
                    <div css={historyRow}>
                      <span css={historyMeta}>{item.description}</span>
                      <strong
                        css={historyAmount(
                          item.type === "EARN" ? "earn" : "use",
                        )}
                      >
                        {formatSignedAmount(item.type, item.amount)}
                      </strong>
                    </div>

                    <p css={historyDate}>{formatDateTime(item.createdAt)}</p>

                    <div css={historyRow}>
                      <span css={historyLabel}>변동 후 적립금</span>
                      <span css={historyBalance}>
                        {formatAmount(item.balance)}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div css={historyContainer} className="tablet-history">
                {filteredHistory.map((item) => (
                  <article key={item.id} css={historyCard("tablet")}>
                    <div css={historyRow("tablet")}>
                      <span css={historyMeta}>{item.description}</span>
                      <strong
                        css={historyAmount(
                          item.type === "EARN" ? "earn" : "use",
                        )}
                      >
                        {formatSignedAmount(item.type, item.amount)}
                      </strong>
                    </div>
                    <div css={historyRow("tablet", true)}>
                      <span css={historyDate}>
                        {formatDateTime(item.createdAt)}
                      </span>
                      <span css={historyBalance}>
                        {formatAmount(item.balance)}
                      </span>
                    </div>
                  </article>
                ))}
              </div>

              <div css={historyTable} className="desktop-history">
                <div css={tableHeader}>
                  <span>변동일</span>
                  <span>내용</span>
                  <span>적립 / 사용</span>
                  <span>변동 후 적립금</span>
                </div>

                {filteredHistory.map((item) => (
                  <div key={item.id} css={tableRow}>
                    <div css={tableInfo}>
                      <span css={tableCell("description")}>
                        {item.description}
                      </span>
                      <span css={tableCell("date")}>
                        {formatDateTime(item.createdAt)}
                      </span>
                    </div>
                    <span
                      css={tableCell(
                        item.type === "EARN" ? "earn" : "use",
                        "amount",
                      )}
                    >
                      {formatSignedAmount(item.type, item.amount)}
                    </span>
                    <span css={tableCell("balance")}>
                      {formatAmount(item.balance)}
                    </span>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      </main>
    </BasicPage>
  );
}

export default PointPage;
