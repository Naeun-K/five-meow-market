import React from "react";
import { BrandStyle } from "./UserBrandStyle";
import Logo from "../logo/Logo";

export default function UserBrandSection({ phrase, image, message }) {
  const lines = phrase.split("\n");
  return (
    <BrandStyle>
      <Logo />
      <div className="brand-desc">
        <p className="phrase-wrapper">고양이와 함께하는 오묘한 일상</p>

        <span className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            fill="var(--acent-beidge)"
            aria-hidden="true"
          >
            <ellipse
              cx="25"
              cy="46"
              rx="10"
              ry="14"
              transform="rotate(-25 25 46)"
            />
            <ellipse
              cx="47"
              cy="29"
              rx="10"
              ry="14"
              transform="rotate(-8 47 29)"
            />
            <ellipse
              cx="73"
              cy="29"
              rx="10"
              ry="14"
              transform="rotate(8 73 29)"
            />
            <ellipse
              cx="95"
              cy="46"
              rx="10"
              ry="14"
              transform="rotate(25 95 46)"
            />
            <path
              d="
      M60 52
      C47 52 39 61 34 71
      C31 77 27 82 27 90
      C27 101 35 108 46 108
      C51 108 56 104 60 104
      C64 104 69 108 74 108
      C85 108 93 101 93 90
      C93 82 89 77 86 71
      C81 61 73 52 60 52Z
    "
            />
          </svg>
        </span>

        <p className="phrase-wrapper">{phrase}</p>
      </div>
      <div className="brand-deco">
        <p className="message-container">{message}</p>
        <span className="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 120 120"
            fill="var(--acent-beidge)"
            aria-hidden="true"
          >
            <ellipse
              cx="25"
              cy="46"
              rx="10"
              ry="14"
              transform="rotate(-25 25 46)"
            />
            <ellipse
              cx="47"
              cy="29"
              rx="10"
              ry="14"
              transform="rotate(-8 47 29)"
            />
            <ellipse
              cx="73"
              cy="29"
              rx="10"
              ry="14"
              transform="rotate(8 73 29)"
            />
            <ellipse
              cx="95"
              cy="46"
              rx="10"
              ry="14"
              transform="rotate(25 95 46)"
            />
            <path
              d="
      M60 52
      C47 52 39 61 34 71
      C31 77 27 82 27 90
      C27 101 35 108 46 108
      C51 108 56 104 60 104
      C64 104 69 108 74 108
      C85 108 93 101 93 90
      C93 82 89 77 86 71
      C81 61 73 52 60 52Z
    "
            />
          </svg>
        </span>
      </div>

      <img className="cat-image" src={image} alt="" />
    </BrandStyle>
  );
}
