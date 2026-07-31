import Link from "next/link";

export default function SellerAuthFooter() {
  return (
    <div className="mt-5 border-t border-white/10 pt-4">
      <p className="text-center text-sm leading-5 text-slate-400">
        By submitting your application, you agree to our{" "}
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

