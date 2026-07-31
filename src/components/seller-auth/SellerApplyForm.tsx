"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Globe, FileText } from "lucide-react";
import { AuthInput } from "../auth/signup-login/AuthInput";
import { Post } from "@/utils/apiUtils";
import { toast } from "@/components/common/toast/toast";
import { useRouter } from "next/navigation";

const YoutubeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.2 12 3.2 12 3.2s-7 0-9.1.6C1.7 4.1.8 5 .5 6.2 0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.6 9.1.6 9.1.6s7 0 9.1-.6c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8ZM9.7 15.7V8.3L16 12l-6.3 3.7Z" />
  </svg>
);

const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm5-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
  </svg>
);

const TwitterIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export interface SellerApplyPayload {
  displayName: string;
  bio?: string;
  socialLinks: {
    website?: string;
    youtube?: string;
    instagram?: string;
    twitter?: string;
    facebook?: string;
  };
}

const sellerApplySchema = z.object({
  displayName: z.string().trim().min(2, "Display name must be at least 2 characters"),
  bio: z.string().trim().optional(),
  socialLinks: z.object({
    website: z.string().trim().optional(),
    youtube: z.string().trim().optional(),
    instagram: z.string().trim().optional(),
    twitter: z.string().trim().optional(),
    facebook: z.string().trim().optional(),
  }),
});

type SellerApplyFormData = z.infer<typeof sellerApplySchema>;

export default function SellerApplyForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SellerApplyFormData>({
    resolver: zodResolver(sellerApplySchema),
    defaultValues: {
      displayName: "",
      bio: "",
      socialLinks: {
        website: "",
        youtube: "",
        instagram: "",
        twitter: "",
        facebook: "",
      },
    },
  });

  const onSubmit = async (data: SellerApplyFormData) => {
    try {
      setSubmitting(true);
      
      const payload: SellerApplyPayload = {
        displayName: data.displayName,
        ...(data.bio ? { bio: data.bio } : {}),
        socialLinks: {
          ...(data.socialLinks.website ? { website: data.socialLinks.website } : {}),
          ...(data.socialLinks.youtube ? { youtube: data.socialLinks.youtube } : {}),
          ...(data.socialLinks.instagram ? { instagram: data.socialLinks.instagram } : {}),
          ...(data.socialLinks.twitter ? { twitter: data.socialLinks.twitter } : {}),
          ...(data.socialLinks.facebook ? { facebook: data.socialLinks.facebook } : {}),
        },
      };

      const response = await Post<{ status: boolean; message: string }, SellerApplyPayload>(
        "/api/sellers/apply",
        payload
      );

      toast.success(response.message || "Application submitted successfully!");
      router.push("/seller");
    } catch (error) {
      toast.error((error as Error).message || "Failed to submit application");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="mt-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <AuthInput
        label="Display Name *"
        icon={<User size={20} />}
        placeholder="Enter your store or display name"
        error={errors.displayName}
        {...register("displayName")}
      />

      <div className="w-full">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Bio / Description
        </label>
        <div className="group flex border border-white/10 bg-white/[0.03] p-3 transition-all duration-300 focus-within:border-violet-400/40 focus-within:bg-violet-500/[0.03] hover:border-white/20 rounded-sm">
          <div className="mr-3 pt-1 text-slate-500 transition-colors duration-300 group-focus-within:text-violet-300">
            <FileText size={20} />
          </div>
          <textarea
            rows={3}
            placeholder="Tell us about yourself and what you create..."
            className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none resize-none text-sm"
            {...register("bio")}
          />
        </div>
        {errors.bio && (
          <p className="mt-1 text-sm text-red-400">{errors.bio.message}</p>
        )}
      </div>

      <div className="space-y-3 pt-2">
        <h4 className="text-sm font-semibold text-slate-200">Social Links</h4>
        
        <AuthInput
          label="Website"
          icon={<Globe size={18} />}
          placeholder="https://yourwebsite.com"
          error={errors.socialLinks?.website}
          {...register("socialLinks.website")}  
        />

        <AuthInput
          label="YouTube"
          icon={<YoutubeIcon className="w-4 h-4" />}
          placeholder="YouTube channel URL or handle"
          error={errors.socialLinks?.youtube}
          {...register("socialLinks.youtube")}
        />

        <AuthInput
          label="Instagram"
          icon={<InstagramIcon className="w-4 h-4" />}
          placeholder="Instagram profile link or handle"
          error={errors.socialLinks?.instagram}
          {...register("socialLinks.instagram")}
        />

        <AuthInput
          label="Twitter / X"
          icon={<TwitterIcon className="w-4 h-4" />}
          placeholder="Twitter profile link or handle"
          error={errors.socialLinks?.twitter}
          {...register("socialLinks.twitter")}
        />

        <AuthInput
          label="Facebook"
          icon={<FacebookIcon className="w-4 h-4" />}
          placeholder="Facebook profile or page link"
          error={errors.socialLinks?.facebook}
          {...register("socialLinks.facebook")}
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 h-12 w-full rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? "Submitting Application..." : "Submit Seller Application"}
      </button>
    </form>
  );
}

