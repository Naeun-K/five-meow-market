import logo from "../../assets/logo.webp";
import { LogoStyle } from "./LogoStyle";

export default function Logo() {
  return (
    <LogoStyle>
      <img src={logo} alt="쇼핑몰 홈 로고" fetchpriority="high" />
    </LogoStyle>
  );
}
