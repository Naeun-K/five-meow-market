import { LoaderStyles } from "./LoaderStyle";
import { ImgBounce } from "./LoaderStyle";
import logoClean from "../../assets/logo-clean.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";
import logoEat from "../../assets/logo-eat.webp";
import logoHigh from "../../assets/logo-high.webp";

export default function Loader() {
  return (
    <LoaderStyles>
      <ImgBounce>
        <div className="img-container">
          <img src={logoHigh} alt="회색고양이얼굴사진" />
        </div>
        <div className="img-container">
          <img src={logoPlay} alt="턱시도고양이얼굴사진" />
        </div>
        <div className="img-container">
          <img src={logoRest} alt="하얀고양이얼굴사진" />
        </div>
        <div className="img-container">
          <img src={logoEat} alt="치즈색고양이얼굴사진" />
        </div>
        <div className="img-container">
          <img src={logoClean} alt="샴고양이얼굴사진" />
        </div>
      </ImgBounce>
      <p>Loading...</p>
    </LoaderStyles>
  );
}
