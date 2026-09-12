import { useEffect, useState } from "react";
import { FloatingIconStyle } from "./FloatingIconStyle";
import TopIcon from "./topIcon/TopIcon";
import ChatIcon from "./chatIcon/ChatIcon";

export default function FloatingIcon() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FloatingIconStyle $isVisible={isVisible}>
      <ChatIcon />
      <TopIcon />
    </FloatingIconStyle>
  );
}
