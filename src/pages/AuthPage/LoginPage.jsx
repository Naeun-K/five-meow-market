import AuthPageLayout from "./AuthPageLayout";
import LoginForm from "../../components/Login/LoginForm";
import UserBrandSection from "../../components/userBrandSection/UserBrandSection";
import loginimg from "../../assets/loginimg.svg";

export default function LoginPage() {
  return (
    <AuthPageLayout>
      <section className="brand-part">
        <UserBrandSection
          phrase="필요한 순간, 가장 좋은 선택
오묘한 생할이 함께 할게요"
          message="반갑다냥"
          image={loginimg}
        />
      </section>
      <section className="form-part">
        <LoginForm />
      </section>
    </AuthPageLayout>
  );
}
