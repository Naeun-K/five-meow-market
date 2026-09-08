import { useState } from "react";

import {
  Header,
  TopBar,
  MenuToggle,
  Bar,
  DesktopNav,
  IconGroup,
  IconButton,
  MegaMenuWrapper,
  MegaMenuCard,
  MegaInner,
  LeftGroup,
  Divider,
  MegaCol,
  ExtraHeading,
  CommunityLists,
  MyShopGrid,
  MyShopButton,
  Backdrop,
  CloseButton,
  LogoWraaper,
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
import Logo from "../logo/Logo.jsx";

const navItems = ["홈", "베스트", "카테고리", "전체상품", "커뮤니티"];

const leftColumns = [
  {
    title: "집사 PICK💗",
    items: [
      "베스트 상품",
    ],
  },
  {
    title: "카테고리",
    items: ["먹묘", "놀묘", "쉼묘", "높묘", "깔묘"],
  },
  {
    title: "전체상품",
    items: [],
  },
  {
    title: "REVIEW",
    items: [],
  },
];

const communityLeft = [
  "제품후기",
  "Q&A",
  "공지사항",
];

const myShopButtons = [
  { label: "로그인", filled: false },
  { label: "회원가입", filled: true },
  { label: "장바구니", filled: false },
  { label: "마이페이지", filled: false },
];

  // 모바일 아코디언용: leftColumns + COMMUNITY를 한 리스트로
const mobileSections = [
  ...leftColumns.filter((col) => col.title !== "REVIEW"),
  { title: "COMMUNITY", items: communityLeft },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState("집사 PICK💗"); // 기본으로 첫 섹션 열어둠

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  const authButtons = myShopButtons.filter(
    (b) => b.label === "로그인" || b.label === "회원가입"
  );

  return (
    <Header>
      <TopBar>
        <LogoWraaper>
        <Logo/>
        </LogoWraaper>

        {/* 햄버거 메뉴 */}
        <MenuToggle
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? "메뉴 닫기" : "메뉴 열기"}
        >
          <Bar isOpen={isOpen} order={1} />
          <Bar isOpen={isOpen} order={2} />
          <Bar isOpen={isOpen} order={3} />
          <Bar isOpen={isOpen} order={4} />
        </MenuToggle>

        {/* 상단 메뉴 */}
        <DesktopNav>
          {navItems.map((item) => (
            <a key={item} href="#">
              {item}
            </a>
          ))}
        </DesktopNav>

        {/* 오른쪽 아이콘 */}
        <IconGroup>
          <IconButton aria-label="검색">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
          </IconButton>

          <IconButton aria-label="장바구니" hideOnMobile>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
          </IconButton>

          <IconButton aria-label="마이페이지" hideOnMobile>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
          </IconButton>
        </IconGroup>

      </TopBar>

      {/* 메가 메뉴 */}
      <MegaMenuWrapper isOpen={isOpen}>

        <MegaMenuCard>
          {/* 닫기 버튼 */}
          <CloseButton
            onClick={handleClose}
            aria-label="메뉴 닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
          </CloseButton>

          <MegaInner>

            {/* 왼쪽 메뉴 */}
            <LeftGroup>
              {leftColumns.map((col) => (
                <MegaCol key={col.title}>
                  <h3>{col.title}</h3>

                  {col.items.length > 0 && (
                    <ul>
                      {col.items.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            onClick={handleClose}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}

                  {col.extra && (
                    <ExtraHeading onClick={handleClose}>
                      {col.extra.title}
                    </ExtraHeading>
                  )}
                </MegaCol>
              ))}
            </LeftGroup>

            {/* 세로 구분선 */}
            <Divider />

              {/* COMMUNITY */}
              <MegaCol>
                <h3>COMMUNITY</h3>

                <CommunityLists>
                  <ul>
                    {communityLeft.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          onClick={handleClose}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </CommunityLists>
              </MegaCol>

              {/* MY SHOP */}
              <MegaCol>
                <h3>MY SHOP</h3>

                <MyShopGrid>
                  {myShopButtons.map((btn) => (
                    <MyShopButton
                      key={btn.label}
                      filled={btn.filled}
                      onClick={handleClose}
                    >
                      {btn.label}
                    </MyShopButton>
                  ))}
                </MyShopGrid>
              </MegaCol>
          </MegaInner>
        </MegaMenuCard>

        {/* ---------- 모바일 리스트형 ---------- */}
        <MobileCard>
          
          <MobileAuthRow>
            {authButtons.map((btn) => (
              <MyShopButton key={btn.label} filled={btn.filled} onClick={handleClose}>
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
                  <MobilePlainLink href="#" onClick={handleClose}>
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
                      <li key={item}>
                        <MobileSubNavLink href="#" onClick={handleClose}>
                          {item}
                        </MobileSubNavLink>
                      </li>
                    ))}
                  </MobileSubNavList>
                )}
              </MobileAccordionSection>
            );
          })}

          <MobileMyShopHeading>MY SHOP</MobileMyShopHeading>

          <MobileCloseButton
            onClick={handleClose}
            aria-label="메뉴 닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
          </MobileCloseButton>
        </MobileCard>
      </MegaMenuWrapper>

      {/* 메뉴 바깥 영역 클릭 시 닫기 */}
      <Backdrop
        isOpen={isOpen}
        onClick={handleClose}
      />
    </Header>
  );
 }