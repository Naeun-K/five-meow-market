import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const waveAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }

  25% {
    transform: translateY(-10px) rotate(-2deg);
  }

  50% {
    transform: translateY(-20px) rotate(0deg);
  }

  75% {
    transform: translateY(-10px) rotate(2deg);
  }

  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

export const ImgBounce = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  "& .img-container": {
    width: "100px",
    animation: `${waveAnimation} 2s infinite linear`,

    willChange: "transform",
  },

  "& .img-container:nth-of-type(2)": {
    animationDelay: "0.15s",
  },

  "& .img-container:nth-of-type(3)": {
    animationDelay: "0.3s",
  },
  "& .img-container:nth-of-type(4)": {
    animationDelay: "0.45s",
  },
  "& .img-container:nth-of-type(5)": {
    animationDelay: "0.6s",
  },
  "& img": { width: "100%", height: "100%", display: "block" },
});

export const LoaderStyles = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 0,
  "& p": { fontSize: "22px" },
});
