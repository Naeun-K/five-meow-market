import { useEffect, useState } from "react";

function getProductLimit() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    return 6;
  }

  if (window.matchMedia("(max-width: 1023px)").matches) {
    return 9;
  }

  return 12;
}

export function useProductLimit() {
  const [limit, setLimit] = useState(() => getProductLimit());

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const tabletQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)",
    );

    const handleChange = () => {
      const newLimit = getProductLimit();

      console.log("현재 width:", window.innerWidth);
      console.log("변경된 limit:", newLimit);

      setLimit(newLimit);
    };

    mobileQuery.addEventListener("change", handleChange);
    tabletQuery.addEventListener("change", handleChange);

    // mount 시점에도 한 번 확인
    handleChange();

    return () => {
      mobileQuery.removeEventListener("change", handleChange);
      tabletQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return limit;
}
