import { PieChart, Pie, Tooltip } from "recharts";

interface SpendingData {
  name: string;
  value: number;
}

export default function SpendingChart({ data }: { data: SpendingData[] }) {
  return (
    <PieChart width={400} height={400}>
      <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" />
      <Tooltip />
    </PieChart>
  );
}
