import AuthPageLayout from "./AuthPageLayout";
import signupimg from "../../assets/signupimg.svg";
import UserBrandSection from "../../components/userBrandSection/UserBrandSection";
import SignupForm from "../../components/signup/signupForm";

export default function SignupPage() {
  return (
    <AuthPageLayout>
      <section className="brand-part">
        <UserBrandSection
          phrase="오묘한 생활의 가족이
되어주세요"
          message="함께하자냥"
          image={signupimg}
        />
      </section>
      <section className="form-part">
        <SignupForm />
      </section>
    </AuthPageLayout>
  );
}
