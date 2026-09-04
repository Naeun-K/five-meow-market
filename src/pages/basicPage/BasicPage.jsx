import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import { BasicPageStyle } from "./BasicPageStyle";

export default function BasicPage({ children }) {
  return (
    <BasicPageStyle>
      <Header />
      {children}
      <Footer />
    </BasicPageStyle>
  );
}
