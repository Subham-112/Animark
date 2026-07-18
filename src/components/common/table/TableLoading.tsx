interface TableLoadingProps {
  rows?: number;
  columns?: number;
}

export default function TableLoading({
  rows = 8,
  columns = 6,
}: TableLoadingProps) {
  return (
    <tbody>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <tr key={rowIndex} className="border-b border-white/10">
          {Array.from({ length: columns }).map((_, columnIndex) => (
            <td key={columnIndex} className="px-6 py-4">
              <div className="h-5 animate-pulse rounded bg-white/10" />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}
