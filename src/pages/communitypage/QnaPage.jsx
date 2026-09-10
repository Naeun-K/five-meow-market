import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";
import ChatIcon from "../../components/ChatIcon/ChatIcon";

const qnaData = [
  {
    id: "qna-001",
    number: 666,
    title: "재입고 예정이 있나요?",
    writer: "홍****",
    date: "2026-09-10",
    views: 2,
    isNew: true,
  },
  {
    id: "qna-002",
    number: 665,
    title: "배송 관련 문의드립니다.",
    writer: "소****",
    date: "2026-09-09",
    views: 1,
    isSecret: true,
  },
  {
    id: "qna-003",
    number: 664,
    title: "상품 옵션 문의드립니다.",
    writer: "이****",
    date: "2026-08-29",
    views: 0,
    isSecret: true,
  },
  {
    id: "qna-004",
    number: 663,
    title: "주문 취소 문의드립니다.",
    writer: "모****",
    date: "2026-08-27",
    views: 1,
    isSecret: true,
  },
  {
    id: "qna-005",
    number: 662,
    title: "캣타워 사이즈 문의",
    writer: "최****",
    date: "2026-08-13",
    views: 4,
    isSecret: true,
  },
  {
    id: "qna-006",
    number: 661,
    title: "교환 신청은 어떻게 하나요?",
    writer: "박****",
    date: "2026-08-10",
    views: 3,
  },
  {
    id: "qna-007",
    number: 660,
    title: "고양이 쿠션 세탁 가능한가요?",
    writer: "김****",
    date: "2026-08-05",
    views: 12,
  },
  {
    id: "qna-008",
    number: 659,
    title: "상품 추천 부탁드려요",
    writer: "정****",
    date: "2026-07-10",
    views: 25,
  },
];

export default function QnaPage() {
  return (
    <BasicPage>
      <BoardPage type="qna" data={qnaData}></BoardPage>
      <ChatIcon />
    </BasicPage>
  );
}
