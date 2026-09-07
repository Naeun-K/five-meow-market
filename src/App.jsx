import { useState } from "react";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignupPage from "./pages/AuthPage/SignupPage";
import UpdatePage from "./pages/AuthPage/UpdatePage";
import BasicPage from "./pages/basicPage/BasicPage";

// const PAGES = {
//   "/login": LoginPage,
//   "/signup": SignupPage,
//   "/update": UpdatePage,
// };

function App() {
  // const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      {/* <BasicPage /> */}
      {/* <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
      /> */}
      {/* <BasicPage /> */}
      {/* <UpdatePage /> */}
      {/* <LoginPage /> */}
      <SignupPage />
    </main>
  );
}

export default App;
