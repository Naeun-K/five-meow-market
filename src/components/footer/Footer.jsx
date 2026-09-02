import logo from "../../assets/logo.svg";

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
            <img src={logo} alt="오묘한 생활" />
          </FooterLogo>

          <FooterTop>
            <FooterLinks>
              <a href="#">이용약관</a>
              <a href="#">개인정보처리방침</a>
              <a href="#">고객센터</a>
              <a href="#">회사소개</a>
            </FooterLinks>
          </FooterTop>
        </FooterMain>

        <FooterLine />

        <FooterCopyright>
          © 2024 오묘한 생활 Clarity Dental Co. All rights reserved. 고양이와
          함께하는 조금 더 좋은 세상.
        </FooterCopyright>
      </FooterInner>
    </FooterWrapper>
  );
}

export default Footer;
