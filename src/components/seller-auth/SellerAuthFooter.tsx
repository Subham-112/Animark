import Link from "next/link";

interface FooterProps {
  isLogin: boolean,
  onToggle: () => void;
}

export default function SellerAuthFooter({
  isLogin,
  onToggle
}: FooterProps) {
  return (
    <div className="mt-5 border-t border-white/10 pt-4">
      <div className="flex justify-center items-center gap-2 text-sm">
        <span className="text-slate-400">
          {isLogin
            ? "Don't have a seller account?"
            : "Already have a seller account?"}
        </span>

        <button
          onClick={onToggle}
          className="font-semibold text-violet-400 transition hover:text-violet-300"
        >
          {isLogin ? "Create Account" : "Sign In"}
        </button>
      </div>

      <p className="mt-2 text-center text-sm leading-5 text-slate-400">
        By continuing, you agree to our{" "}
        <Link
          href="/terms-and-conditions"
          className="font-medium text-violet-400 transition hover:text-violet-300"
        >
          Terms & Conditions
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy-policy"
          className="font-medium text-violet-400 transition hover:text-violet-300"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
