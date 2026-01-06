import { useTasks } from "../hooks/useTasks.js";

export const StatusBadge = ({ task, onUpdate }) => {
  const getStatusClass = (status) => {
    return status === "OPEN"
      ? "status-open"
      : status === "IN_PROGRESS"
      ? "status-progress"
      : "status-done";
  };

  return (
    <div className="flex items-center space-x-3">
      <span
        className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusClass(
          task.status
        )}`}
      >
        {task.status.replace("_", " ")}
      </span>
      <select
        value={task.status}
        onChange={(e) => onUpdate(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/20 bg-white shadow-sm"
      >
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="DONE">Done</option>
      </select>
    </div>
  );
};
