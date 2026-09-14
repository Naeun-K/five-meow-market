import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404/404";
import SignupPage from "./pages/AuthPage/SignupPage";
import LoginPage from "./pages/AuthPage/LoginPage";
import UpdatePage from "./pages/AuthPage/UpdatePage";
import MainPage from "./pages/MainPage/MainPage";
import ProductList from "./pages/productListPage/ProductList";
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
import DetailProduct from "./pages/detailProduct/DetailProduct";

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        
        <Route path="/" element={<MainPage />} />

        
        <Route path="/products" element={<ProductList />} />
        
        <Route path="/products/:productId" element={<DetailProduct />} />
        
        <Route path="/products" element={<ProductList />}>
          <Route index element={<ProductList />} />
          
        </Route>

        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/mypage/edit" element={<UpdatePage />} />
        <Route path="/mypage/inquiry" element={<MyInquiry />} />
        <Route path="/mypage/reviews" element={<MyReviewPage />} />
        <Route path="/mypage/wishlist" element={<WishlistPage />} />
        <Route path="/mypage/orders" element={<MyOrderList />} />
        <Route path="/mypage/orders/:orderId" element={<MyOrderDetail />} />

        
        <Route path="/cart" element={<CartPage />} />
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
