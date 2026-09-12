import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";

const noticeData = [
  {
    id: "notice-001",
    isNotice: true,
    title: "오묘한 생활 이용 안내",
    writer: "대표 관리자",
    date: "2026-09-10",
    views: 430,
  },
  {
    id: "notice-002",
    isNotice: true,
    title: "배송 및 교환/반품 안내",
    writer: "대표 관리자",
    date: "2026-09-09",
    views: 1499,
  },
  {
    id: "notice-003",
    number: 6,
    title: "추석 연휴 배송 일정 안내",
    writer: "대표 관리자",
    date: "2026-09-08",
    views: 905,
  },
  {
    id: "notice-004",
    number: 5,
    title: "오묘한 생활 신규 회원 혜택 안내",
    writer: "대표 관리자",
    date: "2026-09-05",
    views: 398,
  },
  {
    id: "notice-005",
    number: 4,
    title: "9월 베스트 상품 선정 안내",
    writer: "대표 관리자",
    date: "2026-09-01",
    views: 445,
  },
  {
    id: "notice-006",
    number: 3,
    title: "택배사 배송 지연 관련 안내",
    writer: "대표 관리자",
    date: "2026-08-28",
    views: 1036,
  },
  {
    id: "notice-007",
    number: 2,
    title: "오묘한 생활 포인트 적립 정책 안내",
    writer: "대표 관리자",
    date: "2026-08-20",
    views: 607,
  },
  {
    id: "notice-008",
    number: 1,
    title: "고객센터 운영시간 변경 안내",
    writer: "대표 관리자",
    date: "2026-08-15",
    views: 571,
  },
];

export default function NoticePage() {
  return (
    <BasicPage>
      <BoardPage type="notice" data={noticeData} />
    </BasicPage>
  );
}
