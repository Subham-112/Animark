import {
  ArrowRight,
  Globe,
  Package,
  ShieldCheck,
  Wallet,
} from "lucide-react";

export default function SellerIllustration() {
  const steps = [
    "Apply",
    "Review",
    "Approval",
    "Setup Store",
    "Start Selling",
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Quality Marketplace",
      description: "Every application is reviewed before approval, helping maintain a trusted marketplace.",
    },
    {
      icon: Package,
      title: "Your Own Store",
      description:
        "Build your creator profile and showcase your digital products.",
    },
    {
      icon: ShieldCheck,
      title: "Digital Product Sales",
      description: "Sell characters, animation assets, templates and premium courses.",
    },
    {
      icon: Wallet,
      title: "Automatic Payouts",
      description:
        "Receive your earnings directly to your registered bank account after successful sales.",
    },
  ];

  return (
    <section className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-violet-500/10 bg-gradient-to-br from-[#111A34] via-[#091224] to-[#04091B] p-6">
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10">
        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
          Become an Animark Seller
        </span>

        <h2 className="mt-3 text-2xl font-bold leading-tight text-white">
          Share Your Creativity With The World
        </h2>

        <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
          Apply to become an Animark seller and start selling characters,
          animation assets and premium courses. Our team reviews every
          application to ensure a high-quality marketplace.
        </p>
      </div>

      {/* Illustration */}

      {/* <div className="relative z-10 my-12 flex justify-center">
        <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-violet-500/20 bg-violet-500/10">
          <Store size={90} strokeWidth={1.5} className="text-violet-400" />

          <div className="absolute -left-15 top-5 rounded-xl border border-white/10 bg-[#111B31] px-4 py-3">
            <p className="text-[12px] text-slate-400">Digital Store</p>

            <p className="mt-1 font-semibold text-white text-sm">Ready to Launch</p>
          </div>

          <div className="absolute -right-10 bottom-5 rounded-xl border border-white/10 bg-[#111B31] px-4 py-3">
            <p className="text-[12px] text-slate-400">Seller Journey</p>

            <p className="mt-1 font-semibold text-green-400 text-sm">Start Today</p>
          </div>
        </div>
      </div> */}

      {/* Seller Journey */}

      <div className="mt-6 relative z-10">
        <h3 className="mb-3 text-lg font-semibold text-white">
          Seller Journey
        </h3>

        <div className="flex flex-wrap items-center gap-3">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              <div className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-white">
                {step}
              </div>

              {index !== steps.length - 1 && (
                <ArrowRight size={18} className="text-violet-400" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}

      <div className="relative z-10 mt-6 grid gap-4 md:grid-cols-2">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="rounded-lg border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
            >
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10">
                <Icon size={24} className="text-violet-400" />
              </div>

              <h4 className="text-lg font-semibold text-white">
                {benefit.title}
              </h4>

              <p className="mt-1 text-sm leading-6 text-slate-400">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
