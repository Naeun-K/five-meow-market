import { Link } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

import logoEat from "../../assets/logo-eat.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";

import styles from "./CustomerContactPageStyle";

const CustomerContactPage = () => {
  return (
    <>
      <style>{styles}</style>

      <Header />

      <main className="customer-contact-page">
        <div className="customer-contact-container">
          {/* 왼쪽 영역 */}
          <section className="contact-heading">
            <p className="contact-label">CONTACT</p>

            <h1>
              궁금한 이야기가
              <br />
              있나요?
            </h1>

            {/* 모바일에서는 제목 아래, PC·태블릿에서는 오른쪽 */}
            <section className="contact-information">
              <a href="mailto:help@omyo-life.example" className="contact-email">
                help@omyo-life.example
              </a>

              <p className="contact-hours">평일 10:00 - 17:00</p>
            </section>

            {/* 문의 버튼 */}
            <div className="inquiry-button-wrapper">
              <div className="inquiry-cats" aria-hidden="true">
                <img src={logoEat} alt="" />
                <img src={logoClean} alt="" />
                <img src={logoHigh} alt="" />
                <img src={logoPlay} alt="" />
                <img src={logoRest} alt="" />
              </div>

              <Link to="/customer-inquiry" className="contact-inquiry-link">
                <span>고객 문의</span>
                <span className="contact-arrow">↗</span>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default CustomerContactPage;
