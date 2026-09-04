import "./App.css";
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
  // const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      <BasicPage />
      {/* <UpdatePage /> */}
      {/* <LoginPage /> */}
      {/* <SignupPage /> */}
    </main>
  );
}

export default App;
