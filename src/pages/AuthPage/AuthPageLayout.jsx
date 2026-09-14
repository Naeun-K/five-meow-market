import {
  AuthBackgroundStyle,
  AuthPageLayoutStyle,
} from "./AuthPageLayoutStyle";

export default function AuthPageLayout({ children }) {
  return (
    <AuthBackgroundStyle>
      <AuthPageLayoutStyle>{children}</AuthPageLayoutStyle>
    </AuthBackgroundStyle>
  );
}
