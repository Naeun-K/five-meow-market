import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/404";
import SignupPage from "./pages/AuthPage/SignupPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import UpdatePage from "./pages/AuthPage/LoginPage";
import MainPage from "./pages/MainPage/MainPage";
import ProductList from "./pages/productListPage/ProductList";

function App() {
  return (
    //

    <Routes>
      {/* 홈 */}
      <Route path="/" element={<MainPage />} />

      {/* 상품 */}
      <Route path="/products" element={<ProductList />}>
        <Route index element={<ProductList />} />
        <Route path="/products" element={<ProductList />} />
      </Route>

      {/* 회원 */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      {/* 마이페이지 */}
      {/* <Route path="/mypage" element={<MyPage />} /> */}
      <Route path="/mypage/edit" element={<UpdatePage />} />
      {/* <Route path="/mypage/wishlist" element={<Wishlist />} /> */}
      {/* <Route path="/mypage/orders" element={<OrderList />} /> */}

      {/* 장바구니 / 주문 */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      {/* <Route path="/checkout" element={<Checkout />} /> */}

      {/* 리뷰 */}
      {/* <Route path="/reviews" element={<Reviews />} /> */}

      {/* 취소 / 교환 / 반품 */}
      {/* <Route path="/claims" element={<Claims />} /> */}

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
