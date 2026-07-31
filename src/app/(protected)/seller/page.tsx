export default function SellerDashboardPage() {
  return (
    <div className="p-8 space-y-8 text-white">
      {/* Welcome */}
      <div>
        <h1 className="text-3xl font-bold">Welcome back 👋</h1>

        <p className="mt-2 text-slate-400">
          Here's what's happening with your store today.
        </p>
      </div>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        <DashboardCard
          title="Today's Sales"
          value="₹3,520"
          subtitle="+18% from yesterday"
        />

        <DashboardCard
          title="Total Earnings"
          value="₹1,28,420"
          subtitle="Lifetime earnings"
        />

        <DashboardCard
          title="Pending Payout"
          value="₹17,800"
          subtitle="Releases in 2 days"
        />

        <DashboardCard title="Products" value="48" subtitle="Published" />

        <DashboardCard title="Downloads" value="9,321" subtitle="All time" />

        <DashboardCard title="Rating" value="4.8 ★" subtitle="Average rating" />
      </section>

      {/* Bottom Section */}

      <section className="grid gap-6 xl:grid-cols-2">
        {/* Recent Orders */}

        <DashboardSection title="Recent Orders">
          <div className="space-y-4">
            {[
              {
                customer: "Rahul",
                product: "Anime Girl Pack",
                amount: "₹599",
              },
              {
                customer: "John",
                product: "Samurai Pack",
                amount: "₹799",
              },
              {
                customer: "Alex",
                product: "Monster Bundle",
                amount: "₹999",
              },
            ].map((order, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#081223] p-4"
              >
                <div>
                  <h3 className="font-medium">{order.customer}</h3>

                  <p className="text-sm text-slate-400">{order.product}</p>
                </div>

                <span className="font-semibold">{order.amount}</span>
              </div>
            ))}
          </div>
        </DashboardSection>

        {/* Top Products */}

        <DashboardSection title="Top Selling Products">
          <div className="space-y-4">
            {[
              "Anime Girl Pack",
              "Samurai Collection",
              "Fantasy Warrior",
              "Cute Character Bundle",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-[#081223] p-4"
              >
                <span>{item}</span>

                <span className="text-violet-400">
                  {850 - index * 130} Sales
                </span>
              </div>
            ))}
          </div>
        </DashboardSection>
      </section>

      {/* Pending Actions */}

      <DashboardSection title="Action Required">
        <div className="grid gap-4 lg:grid-cols-3">
          <ActionCard
            title="Product Rejected"
            description="Fix thumbnail and upload again."
          />

          <ActionCard
            title="Course Pending"
            description="Waiting for admin approval."
          />

          <ActionCard
            title="Bank Verification"
            description="Complete payout verification."
          />
        </div>
      </DashboardSection>
    </div>
  );
}

function DashboardCard({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: string;
  subtitle: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#081223] p-6">
      <p className="text-sm text-slate-400">{title}</p>

      <h2 className="mt-3 text-3xl font-bold">{value}</h2>

      <p className="mt-2 text-sm text-green-400">{subtitle}</p>
    </div>
  );
}

function DashboardSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#071021] p-6">
      <h2 className="mb-6 text-xl font-semibold">{title}</h2>

      {children}
    </div>
  );
}

function ActionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-5">
      <h3 className="font-semibold text-amber-300">{title}</h3>

      <p className="mt-2 text-sm text-slate-300">{description}</p>
    </div>
  );
}
