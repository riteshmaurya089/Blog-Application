export default function CategoryFilter({
  selected,
  onChange,
}: {
  selected: string;
  onChange: (val: string) => void;
}) {
  return (
    <select
      className="border p-2 rounded"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="ALL">All</option>
      <option value="TECH">Tech</option>
      <option value="FINANCE">Finance</option>
      <option value="GENERAL">General</option>
    </select>
  );
}
