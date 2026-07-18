import { products } from "@/data/seller/products";
import { Plus } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="space-y-8 p-8 text-white">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="mt-1 text-slate-400">Manage your digital products.</p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-700">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Filters */}

      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search product..."
          className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none"
        />

        <select className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none">
          <option>All Categories</option>
          <option>Character</option>
          <option>Course</option>
        </select>

        <select className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none">
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Products */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl border border-white/10 bg-[#081223] p-5"
          >
            <div className="aspect-video rounded-xl bg-slate-700" />

            <h2 className="mt-5 text-xl font-semibold">{product.title}</h2>
            <p className="mt-1 text-sm text-slate-400">{product.category}</p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <InfoCard title="Price" value={`₹${product.price}`} />
              <InfoCard title="Sales" value={`${product.sales}`} />
              <InfoCard title="Rating" value={`${product.rating} ⭐`} />
              <InfoCard title="Status" value={product.status} />
            </div>

            <div className="mt-6 flex gap-3">
              <button className="flex-1 rounded-lg bg-violet-600 py-2 hover:bg-violet-700">
                Edit
              </button>

              <button className="flex-1 rounded-lg border border-white/10 py-2 hover:bg-white/5">
                Analytics
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-lg bg-[#04091B] p-3">
      <p className="text-xs text-slate-400">{title}</p>
      <h3 className="mt-1 font-semibold">{value}</h3>
    </div>
  );
}
