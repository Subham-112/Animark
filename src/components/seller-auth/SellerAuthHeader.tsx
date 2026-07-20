interface SellerAuthHeaderProps {
  isLogin: boolean;
}

export default function SellerAuthHeader({
  isLogin,
}: SellerAuthHeaderProps) {
  return (
    <div>
      <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
        Seller Portal
      </span>

      <h1 className="mt-4 text-2xl font-bold text-white">
        {isLogin ? "Welcome Back" : "Create Seller Account"}
      </h1>

      <p className="mt-1 leading-6 text-slate-400 text-sm">
        {isLogin
          ? "Sign in to manage your store, products and orders."
          : "Create your seller account and start selling digital products on Animark."}
      </p>
    </div>
  );
}
