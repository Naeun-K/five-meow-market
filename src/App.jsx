import "./App.css";
// import UpdateInfo from "./components/updateinfo/updateInfo";
import UserBrandSection from "./components/userBrandSection/UserBrandSection";
import updateimg from "./assets/updateimg.svg";

function App() {
  return (
    <main>
      <UserBrandSection
        phrase="냥이들이 헷갈리지 않도록
정보를 예쁘게 정리해주세요"
        message="뭐로 바꿀거냥"
        image={updateimg}
      />
    </main>
  );
}

export default App;
