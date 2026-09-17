import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/404";
import SignupPage from "./pages/AuthPage/SignupPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import UpdatePage from "./pages/AuthPage/UpdatePage";
import MainPage from "./pages/MainPage/MainPage";
import ProductList from "./pages/product/productListPage/ProductList";
import NoticePage from "./pages/communitypage/NoticePage";
import QnaPage from "./pages/communitypage/QnaPage";
import ReviewPage from "./pages/communitypage/ReviewPage";
import CartPage from "./pages/cartpage/CartPage";
import ScrollToTop from "./routes/ScrollTop";
import MyPage from "./pages/MyPage/MyPage";
import PrivacyPolicyPage from "./pages/privacyPolicy/PrivacyPolicyPage";
import TermsPage from "./pages/terms/TermsPage";
import AboutPage from "./pages/about/AboutPage";
import MyInquiry from "./pages/MyPage/inquiry/MyInquiry";
import CustomerContactPage from "./pages/customerContact/CustomerContactPage";
import CustomerInquiryPage from "./pages/customerInquiry/CustomerInquiryPage";
import MyOrderList from "./pages/MyPage/order/MyOrderList";
import MyOrderDetail from "./pages/MyPage/order/MyOrderDetail";
import MyReviewPage from "./pages/MyPage/reviews/MyReviewPage";
import WishlistPage from "./pages/wishlist/WishlistPage";
import PointPage from "./pages/MyPage/PointPage/PointPage";
import CopyDetailProduct from "./pages/product/detailProduct/CopyDetailProduct";
import BestProductList from "./pages/product/best/BestProductList";
import NewProductList from "./pages/product/new/NewProductList";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import CancelPage from "./pages/cancelPage/CancelPage";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/products" element={<ProductList />} />
        <Route path="/products/best" element={<BestProductList />} />
        <Route path="/products/new" element={<NewProductList />} />
        <Route path="/products/:productId" element={<CopyDetailProduct />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/points" element={<PointPage />} />
        <Route path="/mypage/edit" element={<UpdatePage />} />
        <Route path="/mypage/inquiry" element={<MyInquiry />} />
        <Route path="/mypage/reviews" element={<MyReviewPage />} />
        <Route path="/mypage/wishlist" element={<WishlistPage />} />
        <Route path="/mypage/orders" element={<MyOrderList />} />
        <Route path="/mypage/orders/:orderId" element={<MyOrderDetail />} />

        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/claims/cancel" element={<CancelPage />} />
        {/* <Route path="/claims/exchange" element={<ExchangePage />} /> */}
        {/* <Route path="/claims/return" element={<ReturnPage />} /> */}

        <Route path="/terms" element={<TermsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/community/notice" element={<NoticePage />} />
        <Route path="/community/inquiry" element={<QnaPage />} />
        <Route path="/community/review" element={<ReviewPage />} />

        <Route path="/support" element={<CustomerContactPage />} />
        <Route path="/support/inquiry" element={<CustomerInquiryPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
