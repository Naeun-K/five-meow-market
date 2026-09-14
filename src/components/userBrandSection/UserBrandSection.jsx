import { BrandStyle, HeaderStyle } from "./UserBrandStyle";
import Logo from "../logo/Logo";
import PawIcon from "../common/PawIcon/PawIcon";
import ForwardButton from "../common/forwardBtn/ForwardButton";

export default function UserBrandSection({ phrase, image, message }) {
  return (
    <BrandStyle>
      <HeaderStyle>
        <ForwardButton>이전페이지로</ForwardButton>

        <div className="logo-box">
          <Logo />
        </div>
      </HeaderStyle>
      <div className="brand-desc">
        <p className="phrase-wrapper">고양이와 함께하는 오묘한 일상</p>

        <span className="svg-container">
          <PawIcon />
        </span>

        <p className="phrase-wrapper">{phrase}</p>
      </div>
      <div className="brand-deco">
        <p className="message-container">{message}</p>
        <span className="svg-container">
          <PawIcon />
        </span>
      </div>

      <img className="cat-image" src={image} alt="" />
    </BrandStyle>
  );
}
