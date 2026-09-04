import { HeaderStyle } from "./headerStyle";
import Logo from "../logo/Logo";

function Header() {
  return (
    <HeaderStyle>
      <div className="logo-container">
        <Logo />
      </div>
      <div className="menu-container">
        <div className="navigation-container">
          <span type="button" aria-label="메뉴" className="svg-container">
            <svg
              width="100%"
              height="100%"
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
          </span>
          <nav className="navigation">
            <a href="#home" className="nav-item">
              홈
            </a>

            <a href="#best" className="nav-item">
              베스트
            </a>

            <a href="#category" className="nav-item">
              카테고리
            </a>

            <a href="#products" className="nav-item">
              전체상품
            </a>

            <a href="#community" className="nav-item">
              커뮤니티
            </a>
          </nav>
        </div>
        <div className="svg-list">
          <span type="button" aria-label="검색" className="svg-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="6" stroke="black" strokeWidth="1.5" />

              <path
                d="M13.5 13.5L19.5 19.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>

          <span type="button" aria-label="마이페이지" className="svg-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="7" r="4" stroke="black" strokeWidth="1.5" />

              <path
                d="M4 21C4 16.5 7.6 13 12 13C16.4 13 20 16.5 20 21H4Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span type="button" aria-label="장바구니" className="svg-container">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21V22H3V7Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <path
                d="M8 7V5.5C8 3.3 9.8 2 12 2C14.2 2 16 3.3 16 5.5V7"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M12 10.5V18.5"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <path
                d="M8 14.5H16"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
    </HeaderStyle>
  );
}

export default Header;
