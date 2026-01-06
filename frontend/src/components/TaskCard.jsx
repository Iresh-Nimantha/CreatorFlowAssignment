import { Circle, Clock, CheckCircle2 } from "lucide-react";

export const TaskCard = ({ task, onEdit, onDelete, onUpdateStatus }) => {
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
  const classes = statusClasses[task.status];

  return (
    <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md border border-white/30 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="text-blue-600 hover:text-blue-800"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="text-red-600 hover:text-red-800"
          >
            Delete
          </button>
        </div>
      </div>
      {task.description && (
        <p className="text-gray-600 mb-2">{task.description}</p>
      )}

      <div className="flex items-center justify-between mt-4">
        <div className={`flex items-center gap-2 ${classes} p-1 rounded-full`}>
          <Icon className="w-4 h-4" />
          <span className="text-xs font-semibold">
            {task.status.replace("_", " ")}
          </span>
        </div>
        <select
          value={task.status}
          onChange={(e) => onUpdateStatus(e.target.value)}
          className="p-1 border rounded-lg text-sm"
        >
          <option value="OPEN">Open</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Completed</option>
        </select>
      </div>

      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>Priority: {task.priority}</span>
        <span>Assigned: {task.assignedTo}</span>
        <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};
