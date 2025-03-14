import { CardWrapper } from "@/components/auth/card-wrapper";
import { RegisterForm } from "@/components/auth/register-form";

export default function LoginPage() {
  return (
    <section>
      <CardWrapper
        title="Create an account"
        description="Enter details to create an account"
        footerLabel="Already have an account?"
        linkLabel="Sign in"
        linkHref="/login"
        showSocial
      >
        <RegisterForm />
      </CardWrapper>
    </section>
  );
}
