import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/404";
import SignupPage from "./pages/AuthPage/SignupPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import UpdatePage from "./pages/AuthPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProductList from "./pages/productListPage/ProductList";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* 회원 */}
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage/edit" element={<UpdatePage />} />

        <Route path="/products">
          {/* 전체상품 / 검색 */}
          <Route index element={<ProductList />} />

          {/* 카테고리별 상품 */}
          <Route path=":categoryId" element={<ProductList />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
