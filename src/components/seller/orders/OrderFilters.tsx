export default function OrderFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <input
        type="text"
        placeholder="Search Order..."
        className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none"
      />

      <select className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none">
        <option>All Status</option>
        <option>Completed</option>
        <option>Pending</option>
        <option>Refunded</option>
      </select>

      <select className="h-11 rounded-xl border border-white/10 bg-[#081223] px-4 outline-none">
        <option>Newest</option>
        <option>Oldest</option>
      </select>
    </div>
  );
}
