import { useEffect, useState } from "react";
import { headerStyle } from "./headerStyle";
import logo from "../../assets/logo.webp";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header style={headerStyle.header}>
      {isMobile ? (
        /* ================= 모바일 ================= */
        <div style={headerStyle.mobileHeader}>
          <img src={logo} alt="로고" style={headerStyle.mobileLogo} />
        </div>
      ) : (
        /* ================= PC ================= */
        <div style={headerStyle.pcHeader}>
          {/* 로고 */}
          <div style={headerStyle.logoArea}>
            <img src={logo} alt="로고" style={headerStyle.logo} />
          </div>

          {/* 오른쪽 전체 영역 */}
          <div style={headerStyle.menuArea}>
            {/* 햄버거 */}
            <button
              type="button"
              aria-label="메뉴"
              style={headerStyle.menuButton}
            >
              <svg
                width="32"
                height="20"
                viewBox="0 0 32 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 18.8831C0 18.6195 0.139612 18.3667 0.388122 18.1803C0.636631 17.994 0.973683 17.8892 1.32513 17.8892H30.478C30.8294 17.8892 31.1665 17.994 31.415 18.1803C31.6635 18.3667 31.8031 18.6195 31.8031 18.8831C31.8031 19.1467 31.6635 19.3995 31.415 19.5858C31.1665 19.7722 30.8294 19.8769 30.478 19.8769H1.32513C0.973683 19.8769 0.636631 19.7722 0.388122 19.5858C0.139612 19.3995 0 19.1467 0 18.8831ZM0 12.92C0 12.6564 0.139612 12.4036 0.388122 12.2173C0.636631 12.0309 0.973683 11.9262 1.32513 11.9262H30.478C30.8294 11.9262 31.1665 12.0309 31.415 12.2173C31.6635 12.4036 31.8031 12.6564 31.8031 12.92C31.8031 13.1836 31.6635 13.4364 31.415 13.6228C31.1665 13.8092 30.8294 13.9139 30.478 13.9139H1.32513C0.973683 13.9139 0.636631 13.8092 0.388122 13.6228C0.139612 13.4364 0 13.1836 0 12.92ZM0 6.95693C0 6.69334 0.139612 6.44056 0.388122 6.25417C0.636631 6.06779 0.973683 5.96308 1.32513 5.96308H30.478C30.8294 5.96308 31.1665 6.06779 31.415 6.25417C31.6635 6.44056 31.8031 6.69334 31.8031 6.95693C31.8031 7.22051 31.6635 7.4733 31.415 7.65968C31.1665 7.84607 30.8294 7.95078 30.478 7.95078H1.32513C0.973683 7.95078 0.636631 7.84607 0.388122 7.65968C0.139612 7.4733 0 7.22051 0 6.95693ZM0 0.993847C0 0.730262 0.139612 0.477474 0.388122 0.291091C0.636631 0.104709 0.973683 0 1.32513 0H30.478C30.8294 0 31.1665 0.104709 31.415 0.291091C31.6635 0.477474 31.8031 0.730262 31.8031 0.993847C31.8031 1.25743 31.6635 1.51022 31.415 1.6966C31.1665 1.88299 30.8294 1.98769 30.478 1.98769H1.32513C0.973683 1.98769 0.636631 1.88299 0.388122 1.6966C0.139612 1.51022 0 1.25743 0 0.993847Z"
                  fill="black"
                />
              </svg>
            </button>

            {/* 메뉴 */}
            <nav style={headerStyle.nav}>
              <a href="#home" style={headerStyle.navItem}>
                홈
              </a>

              <a href="#best" style={headerStyle.navItem}>
                베스트
              </a>

              <a href="#category" style={headerStyle.navItem}>
                카테고리
              </a>

              <a href="#products" style={headerStyle.navItem}>
                전체상품
              </a>

              <a href="#community" style={headerStyle.navItem}>
                커뮤니티
              </a>
            </nav>

            {/* 오른쪽 아이콘 */}
            <div style={headerStyle.icons}>
              {/* 검색 */}
              <button
                type="button"
                aria-label="검색"
                style={headerStyle.iconButton}
              >
                <svg
                  width="20.15"
                  height="20.32"
                  viewBox="0 0 20.15 20.32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="black"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M13.2 13.2L19 19"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* 쇼핑백 */}
              <button
                type="button"
                aria-label="장바구니"
                style={headerStyle.iconButton}
              >
                <svg
                  width="25.96"
                  height="25.96"
                  viewBox="0 0 25.96 25.96"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 8H21V24H5V8Z"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M9 8V6C9 3.5 10.8 2 13 2C15.2 2 17 3.5 17 6V8"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M13 11V21"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M9 16H17"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              {/* 마이페이지 */}
              <button
                type="button"
                aria-label="마이페이지"
                style={headerStyle.iconButton}
              >
                <svg
                  width="26.87"
                  height="20.38"
                  viewBox="0 0 26.87 20.38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="13.4"
                    cy="5.5"
                    r="4.5"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                  />

                  <path
                    d="M1.2 19C1.2 15.5 6.5 13 13.4 13C20.3 13 25.7 15.5 25.7 19"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
