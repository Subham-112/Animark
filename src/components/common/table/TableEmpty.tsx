interface TableEmptyProps {
  colSpan: number;
  title?: string;
  description?: string;
}

export default function TableEmpty({
  colSpan,
  title = "No records found",
  description = "There is no data available at the moment.",
}: TableEmptyProps) {
  return (
    <tbody>
      <tr>
        <td colSpan={colSpan} className="px-6 py-20 text-center">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>

            <p className="text-sm text-slate-400">{description}</p>
          </div>
        </td>
      </tr>
    </tbody>
  );
}
