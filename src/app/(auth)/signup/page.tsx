import { GradientText } from "@/components/common/GradientText";
import { AuthLayout } from "@/components/auth/signup-login/AuthLayout";
import { SignupForm } from "@/components/auth/signup-login/SignupForm";
import { Footer } from "@/components/common/footer/Footer";

export default function SignupPage() {
  return (
    <>
      <AuthLayout
        title={
          <>
            Join <GradientText>Animark</GradientText>
          </>
        }
        subtitle="Create your account to purchase premium 2D characters, learn animation or start selling your own digital creations."
      >
        <SignupForm />
      </AuthLayout>
      <Footer />
    </>
  );
}
