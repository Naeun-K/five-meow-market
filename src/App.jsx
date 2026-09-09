import { useState } from "react";
// import LoginPage from "./pages/AuthPage/LoginPage";
// import SignupPage from "./pages/AuthPage/SignupPage";
// import UpdatePage from "./pages/AuthPage/UpdatePage";
import BasicPage from "./pages/basicPage/BasicPage";
import MainBenefits from "./components/main/MainBenefits/MainBenefits";
import MeowCategory from "./components/main/MeowCategory/MeowCategory";
import MainBanner from "./components/main/MainBanner/MainBanner";
import MainPage from "./pages/MainPage/MainPage";
import ProductList from "./pages/productListPage/ProductList";

// const PAGES = {
//   "/login": LoginPage,
//   "/signup": SignupPage,
//   "/update": UpdatePage,
// };
//
function App() {
  // const [currentPage, setCurrentPage] = useState(1);
  // const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      {/* <SignupPage /> */}

      {/* <Pagination
        currentPage={currentPage}
        totalPages={3}
        onPageChange={setCurrentPage}
      /> */}
      {/* <MainPage /> */}
      <ProductList />
      {/* <UpdatePage /> */}
      {/* <LoginPage /> */}
      {/* <MainBenefits />
      {/* <SignupPage /> */}
      {/* <MainBanner /> */}
      {/* <MeowCategory /> */}
      {/* <MainBenefits /> */}
    </main>
  );
}

export default App;
