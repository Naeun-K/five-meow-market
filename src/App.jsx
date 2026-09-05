import { useState } from "react";
import "./App.css";
import Pagination from "./components/pagnation/Pagnation";
// import UpdateInfo from "./components/updateinfo/updateInfo";
// import LoginForm from "./components/Login/LoginForm";
// import SignupForm from "./components/signup/signupForm";
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
  const [currentPage, setCurrentPage] = useState(1);
  // const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      <Pagination
        currentPage={currentPage}
        totalPages={5}
        onPageChange={setCurrentPage}
      />
      {/* <BasicPage /> */}
      {/* <UpdatePage /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
    </main>
  );
}

export default App;
