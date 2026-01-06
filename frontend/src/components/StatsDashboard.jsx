import { FiFileText, FiCircle, FiClock, FiCheckCircle } from "react-icons/fi";

const StatCard = ({ icon: Icon, title, value, color, bgColor }) => (
  <div className="bg-white/30 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 group hover:shadow-2xl transition-all duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-xl ${bgColor} shadow-md`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
    <h3 className="text-gray-600 font-medium text-sm">{title}</h3>
  </div>
);

export const StatsDashboard = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard
      icon={FiFileText}
      title="Total Tasks"
      value={stats.total}
      color="text-blue-600"
      bgColor="bg-blue-100/80"
    />
    <StatCard
      icon={FiCircle}
      title="Open"
      value={stats.open}
      color="text-emerald-600"
      bgColor="bg-emerald-100/80"
    />
    <StatCard
      icon={FiClock}
      title="In Progress"
      value={stats.progress}
      color="text-amber-600"
      bgColor="bg-amber-100/80"
    />
    <StatCard
      icon={FiCheckCircle}
      title="Completed"
      value={stats.done}
      color="text-gray-600"
      bgColor="bg-gray-100/80"
    />
  </div>
);
