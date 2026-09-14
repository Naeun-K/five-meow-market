import BasicPage from "../basicPage/BasicPage";
import BoardPage from "../../components/board/BoardPage";

const reviewData = [
  {
    id: "review-001",
    number: 14608,
    product: {
      productId: "cat-play-001",
      name: "고양이 낚싯대 장난감",
      thumbnail: "/images/products/cat-play-001.webp",
    },
    title: "우리 고양이가 정말 좋아해요!",
    writer: "김****",
    date: "2026-09-10",
    rating: 5,
    isNew: true,
  },
  {
    id: "review-002",
    number: 14607,
    product: {
      productId: "cat-rest-001",
      name: "포근한 고양이 쿠션",
      thumbnail: "/images/products/cat-rest-001.webp",
    },
    title: "생각보다 푹신하고 좋네요",
    writer: "이****",
    date: "2026-09-09",
    rating: 4,
  },
  {
    id: "review-003",
    number: 14606,
    product: {
      productId: "cat-eat-001",
      name: "오묘한 세라믹 식기",
      thumbnail: "/images/products/cat-eat-001.webp",
    },
    title: "높이가 적당해서 잘 먹어요",
    writer: "박****",
    date: "2026-09-08",
    rating: 5,
  },
  {
    id: "review-004",
    number: 14605,
    product: {
      productId: "cat-clean-001",
      name: "고양이 모래매트",
      thumbnail: "/images/products/cat-clean-001.webp",
    },
    title: "모래가 확실히 덜 튀어요",
    writer: "최****",
    date: "2026-09-07",
    rating: 5,
  },
  {
    id: "review-005",
    number: 14604,
    product: {
      productId: "cat-high-001",
      name: "원목 캣타워",
      thumbnail: "/images/products/cat-high-001.webp",
    },
    title: "조립도 쉽고 튼튼합니다",
    writer: "정****",
    date: "2026-09-06",
    rating: 4,
  },
  {
    id: "review-006",
    number: 14603,
    product: {
      productId: "cat-play-002",
      name: "바스락 고양이 터널",
      thumbnail: "/images/products/cat-play-002.webp",
    },
    title: "하루 종일 여기서 놀고 있어요",
    writer: "윤****",
    date: "2026-09-05",
    rating: 5,
  },
  {
    id: "review-007",
    number: 14602,
    product: {
      productId: "cat-rest-002",
      name: "구름 고양이 방석",
      thumbnail: "/images/products/cat-rest-002.webp",
    },
    title: "폭신폭신해서 잠을 잘 자네요",
    writer: "한****",
    date: "2026-09-04",
    rating: 5,
  },
];

export default function ReviewPage() {
  return (
    <BasicPage>
      <BoardPage type="review" data={reviewData} />
    </BasicPage>
  );
}
