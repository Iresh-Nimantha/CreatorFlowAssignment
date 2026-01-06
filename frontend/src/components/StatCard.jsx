import { FiTrendingUp } from "react-icons/fi";

const StatCard = ({ icon: Icon, title, value, color, bgColor, trend }) => (
  <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-gray-50 rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />

    <div className="relative">
      <div className="flex items-start justify-between mb-4">
        <div
          className={`p-3 rounded-lg ${bgColor} transition-transform group-hover:scale-110`}
        >
          <Icon className={`w-5 h-5 ${color}`} />
        </div>
        {trend && (
          <div className="flex items-center text-xs font-medium text-emerald-600">
            <FiTrendingUp className="w-3 h-3 mr-1" />
            <span>{trend}%</span>
          </div>
        )}
      </div>

      <div className="space-y-1">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div className="text-sm font-medium text-gray-500">{title}</div>
      </div>
    </div>
  </div>
);

export default StatCard;
