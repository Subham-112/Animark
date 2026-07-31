export default function FullScreenLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#04091B]">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-violet-500 border-r-violet-500" />
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-xl font-semibold text-white">Loading Animark</h2>
          <p className="text-sm text-slate-400">Preparing your experience...</p>
        </div>
      </div>
    </div>
  );
}
