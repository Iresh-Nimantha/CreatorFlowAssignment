import { useState } from "react";
import { Circle, Clock, CheckCircle2, Loader2 } from "lucide-react";

export const StatusBadge = ({ task, onUpdate }) => {
  const [updating, setUpdating] = useState(false);

  const statusClasses = {
    OPEN: "bg-blue-50 text-blue-700",
    IN_PROGRESS: "bg-amber-50 text-amber-700",
    DONE: "bg-green-50 text-green-700",
  };

  const statusIcons = {
    OPEN: Circle,
    IN_PROGRESS: Clock,
    DONE: CheckCircle2,
  };

  const Icon = statusIcons[task.status];

  const handleChange = async (newStatus) => {
    if (newStatus === task.status) return; // prevent unnecessary API calls

    try {
      setUpdating(true);
      await onUpdate(newStatus);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <div
        className={`p-2 rounded-full ${
          statusClasses[task.status]
        } transition-all`}
      >
        {updating ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Icon className="w-5 h-5" />
        )}
      </div>

      {/* Badge */}
      <span
        className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide ${
          statusClasses[task.status]
        }`}
      >
        {task.status.replace("_", " ")}
      </span>

      {/* Dropdown */}
      <select
        value={task.status}
        disabled={updating}
        onChange={(e) => handleChange(e.target.value)}
        className="px-3 py-1 border border-gray-300 rounded-lg text-xs bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
      >
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Completed</option>
      </select>
    </div>
  );
};
