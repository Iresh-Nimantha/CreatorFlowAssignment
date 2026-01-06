import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const AnalyticsPanel = ({ tasks }) => {
  const statusCount = { OPEN: 0, IN_PROGRESS: 0, DONE: 0 };
  tasks.forEach((t) => (statusCount[t.status] += 1));

  const data = [
    { name: "Open", count: statusCount.OPEN },
    { name: "In Progress", count: statusCount.IN_PROGRESS },
    { name: "Completed", count: statusCount.DONE },
  ];

  return (
    <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Task Status Analytics
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
