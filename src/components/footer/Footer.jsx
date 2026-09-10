import { useNavigate } from "react-router-dom";
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
  WholeStyle,
} from "./footerStyle";

function Footer() {
  const navigate = useNavigate();
  return (
    <WholeStyle>
      <FooterWrapper>
        <FooterInner>
          <FooterMain>
            <FooterLogo>
              <Logo />
            </FooterLogo>

            <FooterTop>
              <FooterLinks>
                <button onClick={() => navigate("/*")}>이용약관</button>
                <button onClick={() => navigate("/*")} className="desktop-text">
                  개인정보처리방침
                </button>
                <button onClick={() => navigate("/*")} className="mobile-text">
                  개인정보
                </button>
                <button onClick={() => navigate("/*")}>고객문의</button>
                <button onClick={() => navigate("/*")}>회사소개</button>
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
    </WholeStyle>
  );
}

export default Footer;
