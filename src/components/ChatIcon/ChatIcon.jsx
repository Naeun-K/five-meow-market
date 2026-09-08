import { ChatIconStyle } from "./ChatIconStyle";

function ChatIcon() {
  return (
    <ChatIconStyle type="button" aria-label="채팅">
      <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* 원 + 그림자 */}
        <g filter="url(#filter0_d_522_1076)">
          <circle cx="44" cy="40" r="40" fill="#FAF8F4" />
        </g>

        {/* Bootstrap chat-dots 아이콘 */}
        <g transform="translate(24 20) scale(2.5)" fill="#000">
          <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />

          <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
        </g>

        <defs>
          <filter
            id="filter0_d_522_1076"
            x="0"
            y="0"
            width="88"
            height="88"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />

            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />

            <feOffset dy="4" />

            <feGaussianBlur stdDeviation="2" />

            <feComposite in2="hardAlpha" operator="out" />

            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />

            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_522_1076"
            />

            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_522_1076"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </ChatIconStyle>
  );
}

export default ChatIcon;
