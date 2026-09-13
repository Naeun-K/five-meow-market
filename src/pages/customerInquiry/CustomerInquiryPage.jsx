import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";

import logoEat from "../../assets/logo-eat.webp";
import logoClean from "../../assets/logo-clean.webp";
import logoHigh from "../../assets/logo-high.webp";
import logoPlay from "../../assets/logo-play.webp";
import logoRest from "../../assets/logo-rest.webp";

import styles from "./CustomerInquiryPageStyle";

const CustomerInquiryPage = () => {
  const navigate = useNavigate();
  const selectRef = useRef(null);

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    content: "",
    isSecret: false,
  });

  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const categoryOptions = [
    { value: "product", label: "상품 문의" },
    { value: "delivery", label: "배송 문의" },
    { value: "order", label: "주문/결제 문의" },
    { value: "exchange", label: "교환/반품 문의" },
    { value: "etc", label: "기타 문의" },
  ];

  const selectedCategory = categoryOptions.find(
    (option) => option.value === formData.category,
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCategorySelect = (value) => {
    setFormData((prev) => ({
      ...prev,
      category: value,
    }));

    setIsCategoryOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.category) {
      alert("문의 유형을 선택해주세요.");
      return;
    }

    if (!formData.title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }

    if (!formData.content.trim()) {
      alert("문의 내용을 입력해주세요.");
      return;
    }

    alert("문의가 등록되었습니다.");
    navigate("/community/qna");
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />

      <style>{styles}</style>

      <main className="customer-inquiry-layout">
        <section className="customer-inquiry-page">
          <div className="customer-inquiry-inner">
            <div className="page-heading">
              <h1>문의하기</h1>
              <p className="page-description">
                궁금한 점이나 도움이 필요한 내용을 남겨주세요.
                <br />
                확인 후 빠르게 답변드리겠습니다.
              </p>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              {/* 문의 유형 */}
              <div className="form-field">
                <label htmlFor="category">문의 유형</label>

                <div className="select-wrapper" ref={selectRef}>
                  <button
                    type="button"
                    id="category"
                    className={`custom-select-button ${
                      isCategoryOpen ? "is-open" : ""
                    }`}
                    onClick={() => setIsCategoryOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={isCategoryOpen}
                  >
                    <span
                      className={
                        selectedCategory ? "selected-value" : "placeholder"
                      }
                    >
                      {selectedCategory
                        ? selectedCategory.label
                        : "문의 유형을 선택해주세요"}
                    </span>

                    <svg
                      className={`select-arrow ${
                        isCategoryOpen ? "is-open" : ""
                      }`}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </button>

                  {isCategoryOpen && (
                    <ul className="custom-select-options" role="listbox">
                      {categoryOptions.map((option) => (
                        <li key={option.value} role="option">
                          <button
                            type="button"
                            className={`custom-select-option ${
                              formData.category === option.value
                                ? "is-selected"
                                : ""
                            }`}
                            onClick={() => handleCategorySelect(option.value)}
                          >
                            {option.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              {/* 제목 */}
              <div className="form-field">
                <label htmlFor="title">제목</label>

                <input
                  id="title"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="문의 제목을 입력해주세요."
                />
              </div>

              {/* 문의 내용 */}
              <div className="form-field">
                <label htmlFor="content">문의 내용</label>

                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="문의하실 내용을 입력해주세요."
                />
              </div>

              {/* 비밀글 */}
              <label className="secret-check">
                <input
                  type="checkbox"
                  name="isSecret"
                  checked={formData.isSecret}
                  onChange={handleChange}
                />

                <span className="custom-checkbox">
                  {formData.isSecret ? "✓" : ""}
                </span>

                <svg
                  className="lock-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                  />
                </svg>

                <span>비밀글로 문의하기</span>
              </label>

              {/* 버튼 */}
              <div className="form-buttons">
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  취소
                </button>

                <div className="submit-button-wrapper">
                  <div className="hover-cats" aria-hidden="true">
                    <img src={logoEat} alt="" />
                    <img src={logoClean} alt="" />
                    <img src={logoHigh} alt="" />
                    <img src={logoPlay} alt="" />
                    <img src={logoRest} alt="" />
                  </div>

                  <button type="submit" className="submit-button">
                    문의 등록
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CustomerInquiryPage;
