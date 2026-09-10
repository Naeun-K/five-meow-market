import EmptyCart from "./components/cartui/emptyCart";
import MainPage from "./pages/MainPage/MainPage";
// import ProductList from "./pages/productListPage/ProductList";
// import DetailProduct from "./pages/detailProduct/DetailProduct";
import CartItem from "./components/cart/CartItem/CartItem";
// const PAGES = {
//   "/login": LoginPage,
//   "/signup": SignupPage,
//   "/update": UpdatePage,
// };
//
function App() {
  // const Page = PAGES[window.location.pathname] ?? SignupPage;

  return (
    <main>
      {/* <DetailProduct /> */}

      {/* {/*<MainPage /> */}
      {/* <ProductList /> */}
      <CartItem />
      <EmptyCart/>
    </main>
  );
}

export default App;
