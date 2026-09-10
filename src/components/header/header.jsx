import { DropdownMenu, HeaderStyle, WholeStyle } from "./headerStyle";
import Logo from "../logo/Logo";
import { useEffect, useRef, useState } from "react";
import {
  MegaMenuWrapper,
  MegaMenuCard,
  MegaInner,
  LeftGroup,
  Divider,
  MegaCol,
  ExtraHeading,
  // CommunityLists,
  MyShopGrid,
  MyShopButton,
  Backdrop,
  CloseButton,
  MobileCard,
  MobileAccordionSection,
  MobileMyShopHeading,
  MobileAccordionHeader,
  MobilePlainLink,
  MobileAuthRow,
  MobileChevron,
  MobileSubNavList,
  MobileSubNavLink,
  MobileCloseButton,
} from "./navMenuStyle.js";
import { useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast.js";
import navCat1 from "../../assets/logo-eat.webp";
import navCat2 from "../../assets/logo-play.webp";
import navCat3 from "../../assets/logo-rest.webp";
import navCat4 from "../../assets/logo-high.webp";
import navCat5 from "../../assets/logo-clean.webp";
import { useLocation } from "react-router-dom";

const leftColumns = [
  {
    title: "집사 PICK💗",
    items: [{ label: "베스트 상품", path: "/products/best" }],
  },
  {
    title: "카테고리",
    items: [
      { label: "먹묘", path: "/products?category=cat-eat" },
      { label: "놀묘", path: "/products?category=cat-play" },
      { label: "쉼묘", path: "/products?category=cat-rest" },
      { label: "높묘", path: "/products?category=cat-high" },
      { label: "깔묘", path: "/products?category=cat-clean" },
    ],
  },
  {
    title: "전체상품",
    path: "/products",
    items: [],
  },
  {
    title: "COMMUNITY",
    items: [
      { label: "공지사항", path: "/community/notice" },
      { label: "제품후기", path: "/community/review" },
      { label: "Q&A", path: "/community/qna" },
    ],
  },
];
// const communityLeft = ["제품후기", "Q&A", "공지사항"];

const myShopButtons = [
  { label: "로그인", path: "/login", filled: false },
  { label: "회원가입", path: "/signup", filled: true },
  { label: "장바구니", path: "#", filled: false },
  { label: "마이페이지", path: "/mypage", filled: false },
];

const mobileSections = [
  ...leftColumns.filter((col) => col.title !== "REVIEW"),
  // { title: "COMMUNITY", items: communityLeft },
];

function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const desktopSearchInputRef = useRef(null);
  const mobileSearchInputRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState("집사 PICK💗");
  const headerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { pathname, search } = useLocation();

  const params = new URLSearchParams(search);
  const category = params.get("category");

  const isHomePage = pathname === "/";

  const isBestPage = pathname === "/products/best";

  // /products?category=cat-play 등
  const isCategoryPage = pathname === "/products" && Boolean(category);

  // 쿼리스트링에 category가 없는 /products
  const isAllProductsPage = pathname === "/products" && !category;

  const isCommunityPage =
    pathname === "/community/notice" ||
    pathname === "/community/review" ||
    pathname === "/community/qna";

  const isActiveMenu = (label) => {
    switch (label) {
      case "홈":
        return isHomePage;

      case "베스트":
        return isBestPage;

      case "카테고리":
        return isCategoryPage;

      case "전체상품":
        return isAllProductsPage;

      case "커뮤니티":
        return isCommunityPage;

      default:
        return false;
    }
  };

  const handleMenuEnter = (menu) => {
    if (isSmallScreen()) return;

    clearTimeout(closeTimerRef.current);

    if (menu.children) {
      setOpenMenu(menu.label);
    } else {
      setOpenMenu(null);
    }
  };

  const handleMenuLeave = () => {
    if (isSmallScreen()) return;

    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  useEffect(() => {
    desktopSearchInputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (isSearchOpen) {
      mobileSearchInputRef.current?.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    return () =>
      document.removeEventListener("pointerdown", handleOutsideClick);
  }, []);

  const isSmallScreen = () => window.matchMedia("(max-width: 1024px)").matches;

  const handleMenuClick = (label) => {
    if (isSmallScreen()) {
      setOpenMenu((currentMenu) => (currentMenu === label ? null : label));
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = new FormData(e.currentTarget);
    const keyword = searchValue.get("keyword")?.trim();

    if (!keyword) {
      showToast("검색할 상품명을 입력해주세요", false);
      return;
    }

    navigate(`/products?keyword=${encodeURIComponent(keyword)}`);

    setIsSearchOpen(false);
  };

  const handleSearchToggle = () => setIsSearchOpen((isOpen) => !isOpen); //추가 끝
  const handleMenuToggle = () => setIsMenuOpen((isOpen) => !isOpen);
  const handleMenuClose = () => setIsMenuOpen(false);
  //네비게이션 드롭다운 구현용 메뉴 데이터
  const authButtons = myShopButtons.filter(
    (b) => b.label === "로그인" || b.label === "회원가입",
  );

  const handleNavigate = (path) => {
    if (!path || path === "#") return;

    navigate(path);
    setOpenMenu(null);
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "홈", path: "/", image: navCat1 },
    { label: "베스트", path: "/products/best", image: navCat2 },
    {
      label: "카테고리",
      image: navCat3,
      children: [
        { label: "먹묘", path: "/products?category=cat-eat" },
        { label: "놀묘", path: "/products?category=cat-play" },
        { label: "쉼묘", path: "/products?category=cat-rest" },
        { label: "높묘", path: "/products?category=cat-high" },
        { label: "깔묘", path: "/products?category=cat-clean" },
      ],
    },
    { label: "전체상품", image: navCat4, path: "/products" },
    {
      label: "커뮤니티",
      image: navCat5,
      children: [
        { label: "공지사항", path: "/community/notice" },
        { label: "제품후기", path: "/community/review" },
        { label: "Q&A", path: "/community/qna" },
      ],
    },
  ];

  return (
    <WholeStyle>
      <HeaderStyle ref={headerRef}>
        <div className="menu-container">
          <button
            type="button"
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
            className="svg-container"
            onClick={handleMenuToggle}
          >
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
          </button>
          <div className="logo-container">
            <Logo />
          </div>

          <div className="svg-list">
            <button
              type="button"
              aria-label={isSearchOpen ? "검색창 닫기" : "검색창 열기"}
              aria-expanded={isSearchOpen}
              className="svg-container search-button"
              onClick={handleSearchToggle}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.5"
                  cy="9.5"
                  r="6.5"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.2 14.2L21 21"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <span
              type="button"
              aria-label="마이페이지"
              className="svg-container my-page"
              onClick={() => handleNavigate("/mypage/edit")}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="7" r="4" stroke="black" strokeWidth="1.5" />
                <path
                  d="M3 21
       C3.6 16.5 7 14 12 14
       C17 14 20.4 16.5 21 21
       H3Z"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              type="button"
              aria-label="장바구니"
              className="svg-container cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
            </span>
          </div>
        </div>
        <div className="navigation-container">
          <nav className="navigation">
            {navItems.map((menu) => {
              const isActive = isActiveMenu(menu.label);
              return (
                <div
                  key={menu.label}
                  // className="nav-item"
                  className={`nav-item${isActive ? " active" : ""}`}
                  onMouseEnter={() => handleMenuEnter(menu)}
                  onMouseLeave={handleMenuLeave}
                >
                  {isActive && (
                    <div className="nav-cat-container">
                      <img
                        src={menu.image}
                        alt="화면 네비게이션용 고양이 이미지"
                        className="nav-cat"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                  {menu.children ? (
                    <button
                      type="button"
                      aria-expanded={openMenu === menu.label}
                      onClick={() => handleMenuClick(menu.label)}
                    >
                      {menu.label}
                    </button>
                  ) : (
                    // <a href={`#${menu.label}`}>{menu.label}</a>
                    <button
                      type="button"
                      onClick={() => handleNavigate(menu.path)}
                    >
                      {menu.label}
                    </button>
                  )}
                  {menu.children && (
                    <DropdownMenu $isOpen={openMenu === menu.label}>
                      {/* {menu.children.map((child, index) => (
                    <a key={`${child.path}-${index}`} href={child.path}>
                      {child.label}
                    </a>
                  ))} */}
                      {menu.children.map((child) => (
                        <button
                          key={child.path}
                          type="button"
                          onClick={() => handleNavigate(child.path)}
                        >
                          {child.label}
                        </button>
                      ))}
                    </DropdownMenu>
                  )}
                </div>
              );
            })}
          </nav>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              name="keyword"
              className="search-input"
              ref={desktopSearchInputRef}
              aria-label="상품 검색"
              placeholder="검색할 상품을 입력하세요"
            />
            <button type="submit" className="search-btn svg-container">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="9.5"
                  cy="9.5"
                  r="6.5"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M14.2 14.2L21 21"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </form>
        </div>

        {/* 검색모달 */}
        <div
          className={`search-backdrop${isSearchOpen ? " is-open" : ""}`}
          aria-hidden={!isSearchOpen}
          onClick={() => setIsSearchOpen(false)}
        >
          <div
            className="search-wrapper"
            onClick={(event) => event.stopPropagation()}
          >
            <form
              onSubmit={handleSearch}
              className={`search-panel${isSearchOpen ? " is-open" : ""}`}
            >
              <input
                ref={mobileSearchInputRef}
                type="text"
                name="keyword"
                aria-label="상품 검색"
                placeholder="검색할 상품을 입력하세요"
                className="search-input"
                tabIndex={isSearchOpen ? 0 : -1}
              />

              <button
                type="submit"
                aria-label="검색"
                className="panel-search-button"
                tabIndex={isSearchOpen ? 0 : -1}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="9.5"
                    cy="9.5"
                    r="6.5"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M14.2 14.2L21 21"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>

            <button
              type="button"
              className="close-icon"
              aria-label="검색창 닫기"
              onClick={() => setIsSearchOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
        </div>
        {/* 여기서부터 모달 */}
        <MegaMenuWrapper isOpen={isMenuOpen}>
          <MegaMenuCard>
            <CloseButton onClick={handleMenuClose} aria-label="메뉴 닫기">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </CloseButton>

            <MegaInner>
              <LeftGroup>
                {leftColumns.map((col) => (
                  <MegaCol
                    key={col.title}
                    $title={col.title}
                    hideOnTablet={col.title === "REVIEW"}
                  >
                    {/* <h3>{col.title}</h3> */}

                    {col.path ? (
                      <button
                        type="button"
                        onClick={() => handleNavigate(col.path)}
                      >
                        <h3>{col.title}</h3>
                      </button>
                    ) : (
                      <h3>{col.title}</h3>
                    )}

                    {col.items.length > 0 && (
                      <ul>
                        {col.items.map((item) => (
                          <li key={item.path}>
                            <button
                              type="button"
                              onClick={() => handleNavigate(item.path)}
                            >
                              {item.label}
                            </button>
                            {/* <a href="#" onClick={handleMenuClose}>
                            {item}
                          </a> */}
                          </li>
                        ))}
                      </ul>
                    )}

                    {col.extra && (
                      <ExtraHeading onClick={handleMenuClose}>
                        {col.extra.title}
                      </ExtraHeading>
                    )}
                  </MegaCol>
                ))}
                {/* 
              <MegaCol $title="COMMUNITY">
                <h3>COMMUNITY</h3> */}

                {/* <CommunityLists>
                  <ul>
                    {communityLeft.map((item) => (
                      <li key={item}>
                        <button
                          type="button"
                          onClick={() => handleNavigate(item.path)}
                        >
                          {item.label}
                        </button> */}
                {/* <a href="#" onClick={handleMenuClose}>
                          {item}
                        </a> */}
                {/* </li>
                    ))}
                  </ul>
                </CommunityLists>
              </MegaCol> */}
              </LeftGroup>
              <Divider />

              <MegaCol>
                <h3>MY SHOP</h3>
                <MyShopGrid>
                  {myShopButtons.map((btn) => (
                    <MyShopButton
                      key={btn.label}
                      filled={btn.filled}
                      onClick={() => handleNavigate(btn.path)}
                    >
                      {btn.label}
                    </MyShopButton>
                  ))}
                </MyShopGrid>
              </MegaCol>
            </MegaInner>
          </MegaMenuCard>

          <MobileCard>
            <MobileAuthRow>
              {authButtons.map((btn) => (
                <MyShopButton
                  key={btn.label}
                  filled={btn.filled}
                  onClick={handleMenuClose}
                >
                  {btn.label}
                </MyShopButton>
              ))}
            </MobileAuthRow>

            {mobileSections.map((section) => {
              const isAccordion = section.items.length > 0;
              const isSectionOpen = openSection === section.title;

              if (!isAccordion) {
                return (
                  <MobileAccordionSection key={section.title}>
                    <MobilePlainLink
                      onClick={() => handleNavigate(section.path)}
                    >
                      {section.label}
                    </MobilePlainLink>
                  </MobileAccordionSection>
                );
              }

              return (
                <MobileAccordionSection key={section.title}>
                  <MobileAccordionHeader
                    onClick={() =>
                      setOpenSection(isSectionOpen ? null : section.title)
                    }
                  >
                    {section.title}
                    <MobileChevron isOpen={isSectionOpen}>▾</MobileChevron>
                  </MobileAccordionHeader>

                  {isSectionOpen && (
                    <MobileSubNavList>
                      {section.items.map((item) => (
                        <li key={item}>
                          <MobileSubNavLink
                            onClick={() => handleNavigate(item.path)}
                          >
                            {item.label}
                          </MobileSubNavLink>
                        </li>
                      ))}
                    </MobileSubNavList>
                  )}
                </MobileAccordionSection>
              );
            })}

            <MobileMyShopHeading>MY SHOP</MobileMyShopHeading>

            <MobileCloseButton onClick={handleMenuClose} aria-label="메뉴 닫기">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </MobileCloseButton>
          </MobileCard>
        </MegaMenuWrapper>

        <Backdrop isOpen={isMenuOpen} onClick={handleMenuClose} />
      </HeaderStyle>
    </WholeStyle>
  );
}

export default Header;
