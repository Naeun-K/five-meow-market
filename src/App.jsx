import MainPage from "./pages/MainPage/MainPage";
// import ProductList from "./pages/productListPage/ProductList";
// import DetailProduct from "./pages/detailProduct/DetailProduct";

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

      <MainPage />
      {/* <ProductList /> */}
    </main>
  );
}

export default App;
