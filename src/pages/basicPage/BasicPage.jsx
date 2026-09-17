import Footer from "../../components/footer/Footer";
import Header from "../../components/header/header";
import FloatingIcon from "../../components/FloatingIcon/FloatingIcon";
import { BasicPageStyle } from "./BasicPageStyle";

export default function BasicPage({ children }) {
  return (
    <BasicPageStyle>
      <Header />
      <main>{children}</main>
      <FloatingIcon />
      <Footer />
    </BasicPageStyle>
  );
}
