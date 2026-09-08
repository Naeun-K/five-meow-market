import { useState, useRef, useEffect } from "react";
import Header from "../header/header.jsx"; // 
import {
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

const leftColumns = [
  { title: "집사 PICK💗", items: ["베스트 상품"] },
  { title: "카테고리", items: ["먹묘", "놀묘", "쉼묘", "높묘", "깔묘"] },
  { title: "전체상품", items: [] },
  { title: "REVIEW", items: [] },
];

const communityLeft = ["제품후기", "Q&A", "공지사항"];

const myShopButtons = [
  { label: "로그인", filled: false },
  { label: "회원가입", filled: true },
  { label: "장바구니", filled: false },
  { label: "마이페이지", filled: false },
];

const mobileSections = [
  ...leftColumns.filter((col) => col.title !== "REVIEW"),
  { title: "COMMUNITY", items: communityLeft },
];

export default function NavigationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState("집사 PICK💗");
  const wrapperRef = useRef(null); // Header를 감싼 영역 참조

  const handleClose = () => setIsOpen(false);

  // Header 안의 기존 햄버거(span[aria-label="메뉴"])를 찾아서 클릭 이벤트를 붙임
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const menuButton = wrapper.querySelector('[aria-label="메뉴"]');
    if (!menuButton) return;

    const handleMenuClick = () => setIsOpen((prev) => !prev);
    menuButton.addEventListener("click", handleMenuClick);

    return () => menuButton.removeEventListener("click", handleMenuClick);
  }, []);

  const authButtons = myShopButtons.filter(
    (b) => b.label === "로그인" || b.label === "회원가입"
  );

  return (
    <div ref={wrapperRef} style={{ position: "relative" }}>
      <Header /> {/* header.jsx 그대로 렌더 */}

      <MegaMenuWrapper isOpen={isOpen}>
        <MegaMenuCard>
          <CloseButton onClick={handleClose} aria-label="메뉴 닫기">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </CloseButton>

          <MegaInner>
            <LeftGroup>
              {leftColumns.map((col) => (
                <MegaCol key={col.title}>
                  <h3>{col.title}</h3>
                  {col.items.length > 0 && (
                    <ul>
                      {col.items.map((item) => (
                        <li key={item}>
                          <a href="#" onClick={handleClose}>{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                  {col.extra && (
                    <ExtraHeading onClick={handleClose}>{col.extra.title}</ExtraHeading>
                  )}
                </MegaCol>
              ))}
            </LeftGroup>

            <Divider />

            <MegaCol>
              <h3>COMMUNITY</h3>
              <CommunityLists>
                <ul>
                  {communityLeft.map((item) => (
                    <li key={item}>
                      <a href="#" onClick={handleClose}>{item}</a>
                    </li>
                  ))}
                </ul>
              </CommunityLists>
            </MegaCol>

            <MegaCol>
              <h3>MY SHOP</h3>
              <MyShopGrid>
                {myShopButtons.map((btn) => (
                  <MyShopButton key={btn.label} filled={btn.filled} onClick={handleClose}>
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
                  onClick={() => setOpenSection(isSectionOpen ? null : section.title)}
                >
                  {section.title}
                  <MobileChevron isOpen={isSectionOpen}>▾</MobileChevron>
                </MobileAccordionHeader>

                {isSectionOpen && (
                  <MobileSubNavList>
                    {section.items.map((item) => (
                      <li key={item}>
                        <MobileSubNavLink href="#" onClick={handleClose}>{item}</MobileSubNavLink>
                      </li>
                    ))}
                  </MobileSubNavList>
                )}
              </MobileAccordionSection>
            );
          })}

          <MobileMyShopHeading>MY SHOP</MobileMyShopHeading>

          <MobileCloseButton onClick={handleClose} aria-label="메뉴 닫기">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </MobileCloseButton>
        </MobileCard>

        
      </MegaMenuWrapper>

      <Backdrop isOpen={isOpen} onClick={handleClose} />
    </div>
  );
}