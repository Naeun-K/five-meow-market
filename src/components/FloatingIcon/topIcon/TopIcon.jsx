import { TopIconStyle } from "./TopIconStyle";

export default function TopIcon() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <TopIconStyle
      type="button"
      onClick={handleScrollTop}
      aria-label="페이지 최상단으로 이동"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M6 15L12 9L18 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </TopIconStyle>
  );
}
