import { GradientText } from "@/components/common/GradientText";
import { AuthLayout } from "@/components/auth/signup-login/AuthLayout";
import { LoginForm } from "@/components/auth/signup-login/LoginForm";
import { Footer } from "@/components/common/footer/Footer";

export default function LoginPage() {
  return (
    <>
      <AuthLayout
        title={
          <>
            Welcome Back to <GradientText>Animark</GradientText>
          </>
        }
        subtitle="Sign in to continue exploring premium 2D characters, animation courses and manage your marketplace account."
        isLogin={true}
      >
        <LoginForm />
      </AuthLayout>
      <Footer />
    </>
  );
}
