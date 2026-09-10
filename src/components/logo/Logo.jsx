import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.webp";
import { LogoStyle } from "./LogoStyle";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <LogoStyle onClick={() => navigate("/")}>
      <img src={logo} alt="쇼핑몰 홈 로고" fetchPriority="high" />
    </LogoStyle>
  );
}
