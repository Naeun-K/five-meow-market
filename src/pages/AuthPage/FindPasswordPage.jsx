import AuthPageLayout from "./AuthPageLayout";
import FindPasswordForm from "../../components/findPassword/FindPasswordForm";
import UserBrandSection from "../../components/userBrandSection/UserBrandSection";
import loginimg from "../../assets/loginimg.webp";

export default function FindPasswordPage() {
  return (
    <AuthPageLayout>
      <section className="brand-part">
        <UserBrandSection
          phrase="잊어버린 비밀번호도
차근차근 찾아드릴게요"
          message="괜찮다냥"
          image={loginimg}
        />
      </section>
      <section className="form-part">
        <FindPasswordForm />
      </section>
    </AuthPageLayout>
  );
}
