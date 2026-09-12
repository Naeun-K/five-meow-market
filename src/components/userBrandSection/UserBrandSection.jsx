import { BrandStyle } from "./UserBrandStyle";
import Logo from "../logo/Logo";
import PawIcon from "../common/PawIcon/PawIcon";

export default function UserBrandSection({ phrase, image, message }) {
  return (
    <BrandStyle>
      <div className="logo-box">
        <Logo />
      </div>
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
