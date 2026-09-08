import mainBanner from "../../../assets/main-meow-pick-banner.webp";

const MainBanner = () => {
  return (
    <section
      style={{
        width: "calc(100% - 60px)",
        margin: "0 auto",
      }}
    >
      <img
        src={mainBanner}
        alt="다섯 고양이가 고른 묘한 PICK"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </section>
  );
};

export default MainBanner;
