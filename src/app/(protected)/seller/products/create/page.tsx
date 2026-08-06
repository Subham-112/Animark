"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Upload, Plus, Trash2, X, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useCreateProduct } from "@/api/products/hooks/useCreateProduct";
import { getUploadSignature, uploadToCloudinary, CreateProductPayload } from "@/api/products/api";
import { toast } from "@/components/common/toast/toast";
import { Fetch } from "@/utils/apiUtils";

interface CategoryOption {
  _id: string;
  name: string;
}

export default function CreateProductPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { addProduct, loading: isCreating } = useCreateProduct();

  // Form states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [description, setDescription] = useState("");

  // Category options fetched from API or passed via navigation query
  const [categories, setCategories] = useState<CategoryOption[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);

  // Dynamic Tags state
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  // Dynamic Metadata key-value pairs
  const [metadataList, setMetadataList] = useState<{ key: string; value: string }[]>([]);

  // Image upload & Cloudinary states
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Combined loading indicator
  const loading = isCreating || isUploadingImage;

  // Check query params for categories or fetch if accessed directly
  useEffect(() => {
    const passedCategories = searchParams.get("categories");
    if (passedCategories) {
      try {
        const parsed = JSON.parse(passedCategories);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setCategories(parsed);
          return;
        }
      } catch (err) {
        console.error("Error parsing passed categories:", err);
      }
    }

    const loadCategories = async () => {
      try {
        setLoadingCategories(true);
        const res: any = await Fetch("/api/categories");
        if (res?.data && Array.isArray(res.data)) {
          setCategories(res.data);
        } else if (res?.data?.categories && Array.isArray(res.data.categories)) {
          setCategories(res.data.categories);
        }
      } catch {
        // Fallback options if categories endpoint is not active yet
      } finally {
        setLoadingCategories(false);
      }
    };
    loadCategories();
  }, [searchParams]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      setUploadProgress(null);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    setUploadProgress(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAddTag = () => {
    const trimmed = tagInput.trim();
    if (trimmed && !tags.includes(trimmed)) {
      setTags([...tags, trimmed]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleAddMetadataRow = () => {
    setMetadataList([...metadataList, { key: "", value: "" }]);
  };

  const handleUpdateMetadataRow = (index: number, field: "key" | "value", val: string) => {
    const updated = [...metadataList];
    updated[index][field] = val;
    setMetadataList(updated);
  };

  const handleRemoveMetadataRow = (index: number) => {
    setMetadataList(metadataList.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Product name is required");
      return;
    }
    if (!category) {
      toast.error("Please select a category");
      return;
    }
    if (price === "" || Number(price) < 0) {
      toast.error("Valid price (≥ 0) is required");
      return;
    }

    let thumbnailData: { url: string; publicId: string } | undefined = undefined;

    // Direct Cloudinary Upload Flow if image file selected
    if (imageFile) {
      try {
        setIsUploadingImage(true);
        setUploadProgress(0);

        // Step 1: Fetch upload signature from backend
        const sigResponse = await getUploadSignature("products");
        if (!sigResponse?.data) {
          throw new Error("Failed to retrieve Cloudinary upload signature");
        }

        // Step 2: Direct signed upload to Cloudinary API
        const uploadRes = await uploadToCloudinary(imageFile, sigResponse.data, (progress) => {
          setUploadProgress(progress);
        });

        thumbnailData = {
          url: uploadRes.secure_url,
          publicId: uploadRes.public_id,
        };
      } catch (err: any) {
        toast.error(err?.message || "Image upload failed. Please try again.");
        setIsUploadingImage(false);
        setUploadProgress(null);
        return;
      } finally {
        setIsUploadingImage(false);
      }
    }

    // Process metadata key-value list into JSON object
    const validMetadataObj: Record<string, string> = {};
    metadataList.forEach((item) => {
      if (item.key.trim() && item.value.trim()) {
        validMetadataObj[item.key.trim()] = item.value.trim();
      }
    });

    // Step 3: Construct JSON payload and call POST /api/products
    const payload: CreateProductPayload = {
      name: name.trim(),
      category,
      price: Number(price),
      ...(description.trim() ? { description: description.trim() } : {}),
      ...(tags.length > 0 ? { tags } : {}),
      ...(Object.keys(validMetadataObj).length > 0 ? { metadata: validMetadataObj } : {}),
      ...(thumbnailData ? { thumbnail: thumbnailData } : {}),
    };

    try {
      const res = await addProduct(payload);
      toast.success(res?.message || "Product created successfully!");
      router.push("/seller/products");
    } catch (err: any) {
      toast.error(err?.message || "Failed to create product");
    }
  };

  return (
    <div className="min-h-full p-8 text-white">
      {/* Top Navigation / Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href="/seller/products"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#081223] transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Add New Product</h1>
            <p className="mt-1 text-sm text-slate-400">
              Create a new digital asset listing for your store.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Column - Main Details */}
        <div className="space-y-6 lg:col-span-2">
          {/* Required Details Card */}
          <div className="rounded-2xl border border-white/10 bg-[#081223] p-6 space-y-5">
            <h2 className="text-xl font-semibold border-b border-white/10 pb-3">
              Basic Details <span className="text-xs font-normal text-slate-400">(Required)</span>
            </h2>

            {/* Name */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Product Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 2D Anime Character Pack"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 transition"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {/* Category */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Category <span className="text-red-400">*</span>
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                  className="w-full h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-sm text-white outline-none focus:border-violet-500 transition"
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                  {/* Fallback category options if MongoDB ObjectIds aren't fetched */}
                  {categories.length === 0 && (
                    <>
                      <option value="660a00000000000000000001">Characters</option>
                      <option value="660a00000000000000000002">Backgrounds</option>
                      <option value="660a00000000000000000003">Animations</option>
                      <option value="660a00000000000000000004">UI Kits</option>
                    </>
                  )}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block mb-2 text-sm font-medium text-slate-300">
                  Base Price (₹) <span className="text-red-400">*</span>
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                  required
                  className="w-full h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 transition"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Description <span className="text-xs text-slate-400">(Optional)</span>
              </label>
              <textarea
                rows={4}
                placeholder="Detailed text description of the product..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-[#04091B] p-4 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 transition resize-none"
              />
            </div>
          </div>

          {/* Optional Details Card (Tags & Metadata) */}
          <div className="rounded-2xl border border-white/10 bg-[#081223] p-6 space-y-6">
            <h2 className="text-xl font-semibold border-b border-white/10 pb-3">
              Additional Info <span className="text-xs font-normal text-slate-400">(Optional)</span>
            </h2>

            {/* Tags */}
            <div>
              <label className="block mb-2 text-sm font-medium text-slate-300">
                Search Tags
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  type="text"
                  placeholder="e.g. 3d, character, anime"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddTag();
                    }
                  }}
                  className="flex-1 h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 transition"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 h-11 rounded-xl bg-violet-600 font-medium hover:bg-violet-700 transition"
                >
                  Add Tag
                </button>
              </div>

              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="flex items-center gap-1.5 rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-300"
                    >
                      #{t}
                      <button
                        type="button"
                        onClick={() => handleRemoveTag(t)}
                        className="hover:text-red-400 transition"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Metadata Key-Value pairs */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-300">
                  Custom Metadata <span className="text-xs text-slate-400">(e.g. fileSize: 50MB)</span>
                </label>
                <button
                  type="button"
                  onClick={handleAddMetadataRow}
                  className="flex items-center gap-1.5 text-xs text-violet-400 hover:text-violet-300 font-medium transition"
                >
                  <Plus size={14} /> Add Row
                </button>
              </div>

              {metadataList.length > 0 ? (
                <div className="space-y-3">
                  {metadataList.map((row, index) => (
                    <div key={index} className="flex gap-3 items-center">
                      <input
                        type="text"
                        placeholder="Key (e.g. fileSize)"
                        value={row.key}
                        onChange={(e) => handleUpdateMetadataRow(index, "key", e.target.value)}
                        className="flex-1 h-10 rounded-xl border border-white/10 bg-[#04091B] px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 transition"
                      />
                      <input
                        type="text"
                        placeholder="Value (e.g. 50MB)"
                        value={row.value}
                        onChange={(e) => handleUpdateMetadataRow(index, "value", e.target.value)}
                        className="flex-1 h-10 rounded-xl border border-white/10 bg-[#04091B] px-3 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500 transition"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveMetadataRow(index)}
                        className="p-2 text-slate-400 hover:text-red-400 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-slate-500 italic">No custom metadata added yet.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Media & Submit Action */}
        <div className="space-y-6">
          {/* Image Upload Card */}
          <div className="rounded-2xl border border-white/10 bg-[#081223] p-6 space-y-4">
            <h2 className="text-xl font-semibold border-b border-white/10 pb-3">
              Product Thumbnail <span className="text-xs font-normal text-slate-400">(Optional)</span>
            </h2>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {imagePreview ? (
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 group">
                <img
                  src={imagePreview}
                  alt="Product Thumbnail Preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="flex items-center gap-2 rounded-xl bg-red-500/80 px-4 py-2 text-xs font-medium text-white hover:bg-red-600 transition"
                  >
                    <Trash2 size={14} /> Remove Image
                  </button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/20 bg-[#04091B] p-8 text-center cursor-pointer hover:border-violet-500 hover:bg-violet-500/5 transition"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/10 text-violet-400">
                  <Upload size={24} />
                </div>
                <div>
                  <p className="text-sm font-medium text-white">Click to upload thumbnail</p>
                  <p className="mt-1 text-xs text-slate-500">PNG, JPG, WEBP up to 10MB</p>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="rounded-2xl border border-white/10 bg-[#081223] p-6 space-y-3">
            {uploadProgress !== null && (
              <div className="space-y-1.5 mb-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Uploading Image to Cloudinary...</span>
                  <span className="font-semibold text-violet-400">{uploadProgress}%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-indigo-400 transition-all duration-200"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3.5 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isUploadingImage ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Uploading Image ({uploadProgress ?? 0}%)...
                </>
              ) : isCreating ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Creating Product...
                </>
              ) : (
                "Publish Product"
              )}
            </button>

            <Link
              href="/seller/products"
              className="w-full block text-center rounded-xl border border-white/10 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 transition"
            >
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
