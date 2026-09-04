import "./App.css";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignupPage from "./pages/AuthPage/SignupPage";
import UpdatePage from "./pages/AuthPage/UpdatePage";

const PAGES = {
  "/login": LoginPage,
  "/signup": SignupPage,
  "/update": UpdatePage,
};

function App() {
  const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      <Page />
    </main>
  );
}

export default App;
