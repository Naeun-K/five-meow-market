import { useState } from "react";
// import LoginPage from "./pages/AuthPage/LoginPage";
// import SignupPage from "./pages/AuthPage/SignupPage";
// import UpdatePage from "./pages/AuthPage/UpdatePage";
import BasicPage from "./pages/basicPage/BasicPage";
import MainBenefits from "./components/main/MainBenefits/MainBenefits";
import MeowCategory from "./components/main/MeowCategory/MeowCategory";
import MainBanner from "./components/main/MainBanner/MainBanner";
import Navigation from "./components/navMenu/navMenu";

// const PAGES = {
//   "/login": LoginPage,
//   "/signup": SignupPage,
//   "/update": UpdatePage,
// };

function App() {
  // const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      {/* <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
      /> */}
      {<BasicPage />}
      {/* <UpdatePage /> */}
      {/* <LoginPage /> */}
      {/* <MainBenefits />
      {/* <SignupPage /> */}
      {/* 
      <MainBanner />
      <MeowCategory />
      <MainBenefits />
      */}
    </main>
  );
}

export default App;
