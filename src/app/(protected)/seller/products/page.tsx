"use client";

import { IProduct } from "@/types/product";
// import { products } from "@/data/seller/products";
import { Fetch } from "@/utils/apiUtils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CategoryOption {
  _id: string;
  name: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");

  const fetchData = async () => {
    try {
      const [prodRes, catRes]: [any, any] = await Promise.all([
        Fetch("/api/products"),
        Fetch("/api/categories"),
      ]);

      if (prodRes?.success) {
        setProducts(prodRes.data.products);
      }

      if (catRes?.data) {
        if (Array.isArray(catRes.data)) {
          setCategories(catRes.data);
        } else if (Array.isArray(catRes.data.categories)) {
          setCategories(catRes.data.categories);
        }
      }
    } catch (err) {
      console.error("Error fetching page data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-full space-y-6 p-8 text-white">
      {/* Header */}
      <div className="h-[10%] flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="mt-1 text-slate-400">Manage your digital products.</p>
        </div>

        <Link
          href={{
            pathname: "/seller/products/create",
            query: { categories: JSON.stringify(categories) },
          }}
          className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-medium transition hover:bg-violet-700"
        >
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Filters */}
      <div className="h-[7%] flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search product..."
          className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none"
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none"
        >
          <option>All Categories</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none">
          <option>All Status</option>
          <option>Published</option>
          <option>Draft</option>
        </select>
      </div>

      {/* Products */}
      {products.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="rounded-2xl border border-white/10 bg-[#081223] p-5"
            >
              <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-700">
                {product.thumbnail?.url ? (
                  <Image
                    src={product.thumbnail.url}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                    No Image
                  </div>
                )}
              </div>

              <h2 className="mt-5 text-xl font-semibold">{product.name}</h2>
              {product.category && (
                <p className="mt-1 text-sm text-slate-400">
                  {product.category.name}
                </p>
              )}

              <div className="mt-5 grid grid-cols-2 gap-3">
                <InfoCard title="Price" value={`₹${product.price}`} />
                {product.sales && (
                  <InfoCard title="Sales" value={`${product.sales}`} />
                )}
                {product.rating && (
                  <InfoCard title="Rating" value={`${product.rating} ⭐`} />
                )}
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
      ) : (
        <div className="h-[77%] flex justify-center items-center">
          <h1
            className="text-7xl font-bold"
            style={{ letterSpacing: 6, opacity: 0.2 }}
          >
            NOT FOUND
          </h1>
        </div>
      )}
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
