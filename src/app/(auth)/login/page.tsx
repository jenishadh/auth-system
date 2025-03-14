import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <section>
      <CardWrapper
        title="Welcome back"
        description="Enter credentials to sign in to your account"
        footerLabel="Don't have an account?"
        linkLabel="Sign up"
        linkHref="/register"
        showSocial
      >
        <LoginForm />
      </CardWrapper>
    </section>
  );
}
