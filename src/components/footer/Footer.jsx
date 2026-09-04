import Logo from "../logo/Logo";

import {
  FooterWrapper,
  FooterInner,
  FooterMain,
  FooterLogo,
  FooterTop,
  FooterLinks,
  FooterLine,
  FooterCopyright,
} from "./footerStyle";

function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterMain>
          <FooterLogo>
            <Logo />
          </FooterLogo>

          <FooterTop>
            <FooterLinks>
              <a href="#">이용약관</a>
              <a href="#" className="desktop-text">
                개인정보처리방침
              </a>
              <a href="#" className="mobile-text">
                개인정보
              </a>
              <a href="#">고객센터</a>
              <a href="#">회사소개</a>
            </FooterLinks>
          </FooterTop>
        </FooterMain>

        <FooterLine />

        <FooterCopyright>
          © 2026 오묘한 생활 Clarity Dental Co. All rights reserved. 고양이와
          함께하는 조금 더 좋은 세상.
        </FooterCopyright>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
