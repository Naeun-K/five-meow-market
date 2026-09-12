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
import { Link, useNavigate } from "react-router-dom";
import useToast from "../../hooks/useToast.js";
import navCat1 from "../../assets/logo-eat.webp";
import navCat2 from "../../assets/logo-play.webp";
import navCat3 from "../../assets/logo-rest.webp";
import navCat4 from "../../assets/logo-high.webp";
import navCat5 from "../../assets/logo-clean.webp";
import { useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth.js";

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
  { label: "장바구니", path: "/cart", filled: false },
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
  const { user, isLoggedIn, isAuthLoading, logout } = useAuth();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const { pathname, search } = useLocation();

  const nickname =
    user?.nickname || user?.nickName || user?.username || user?.name || "회원";

  const points = user?.points ?? 0;

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

  // useEffect(() => {
  //   try {
  //     const savedUser = localStorage.getItem("user");
  //     setUser(savedUser ? JSON.parse(savedUser) : null);
  //   } catch {
  //     setUser(null);
  //   }
  // }, [pathname]);

  useEffect(() => {
    const handleUserMenuOutsideClick = (event) => {
      if (!userMenuRef.current?.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleUserMenuOutsideClick);

    return () =>
      document.removeEventListener("pointerdown", handleUserMenuOutsideClick);
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

  const handleLogout = async () => {
    try {
      await logout();

      setIsUserMenuOpen(false);
      navigate("/");
      showToast("로그아웃되었습니다.", true);
    } catch (error) {
      console.error("로그아웃 실패:", error);
      showToast("로그아웃 중 오류가 발생했습니다.", false);
    }
  };

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
            {/* 햄버거 아이콘 1개 / 4줄 */}
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 32 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0" width="32" height="2" rx="1" fill="black" />
              <rect y="7" width="32" height="2" rx="1" fill="black" />
              <rect y="14" width="32" height="2" rx="1" fill="black" />
              <rect y="21" width="32" height="2" rx="1" fill="black" />
            </svg>
          </button>

          <div className="logo-container">
            <Logo />
          </div>

          <div className="svg-list">
            {!isAuthLoading &&
              (!isLoggedIn ? (
                <button
                  onClick={() => navigate("/login")}
                  className="login-link"
                >
                  로그인
                </button>
              ) : (
                <div className="user-area" ref={userMenuRef}>
                  <button
                    type="button"
                    className="user-menu-button"
                    aria-expanded={isUserMenuOpen}
                    aria-haspopup="menu"
                    onClick={() => setIsUserMenuOpen((isOpen) => !isOpen)}
                  >
                    <span className="user-nickname">{nickname}</span>
                    <span className="user-nim">님</span>

                    <span className="user-icon svg-container">
                      <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="7"
                          r="4"
                          stroke="black"
                          strokeWidth="1.5"
                        />

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
                  </button>

                  <DropdownMenu
                    $isOpen={isUserMenuOpen}
                    $alignRight={true}
                    className="user-dropdown"
                  >
                    <div className="user-dropdown-info">
                      <strong>{nickname}님</strong>
                      <span>{points.toLocaleString()}P</span>
                    </div>

                    <div className="user-dropdown-divider" />

                    <Link to="/mypage" onClick={() => setIsUserMenuOpen(false)}>
                      마이페이지
                    </Link>

                    <button type="button" onClick={handleLogout}>
                      로그아웃
                    </button>
                  </DropdownMenu>
                </div>
              ))}

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

            <button
              type="button"
              aria-label="장바구니"
              className="svg-container cart"
              onClick={() => navigate("/cart")}
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
            </button>
          </div>
        </div>

        <div className="navigation-container">
          <nav className="navigation">
            {navItems.map((menu) => {
              const isActive = isActiveMenu(menu.label);

              return (
                <div
                  key={menu.label}
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
                    <button
                      type="button"
                      onClick={() => handleNavigate(menu.path)}
                    >
                      {menu.label}
                    </button>
                  )}

                  {menu.children && (
                    <DropdownMenu $isOpen={openMenu === menu.label}>
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
                  onClick={() => handleNavigate(btn.path)}
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
                      {section.title}
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
                        <li key={item.path}>
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
