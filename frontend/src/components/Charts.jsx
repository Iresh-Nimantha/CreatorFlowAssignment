import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Charts = ({ tasks }) => {
  const statusCount = { OPEN: 0, IN_PROGRESS: 0, DONE: 0 };
  tasks.forEach((t) => (statusCount[t.status] += 1));

  const data = [
    { status: "Open", count: statusCount.OPEN },
    { status: "In Progress", count: statusCount.IN_PROGRESS },
    { status: "Completed", count: statusCount.DONE },
  ];

  return (
    <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg mb-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Task Status Overview
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data}>
          <XAxis dataKey="status" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
