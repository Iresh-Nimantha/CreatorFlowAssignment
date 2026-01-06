import { StatusBadge } from "./StatusBadge.jsx";

export const TaskList = ({ tasks, loading, onUpdate, onDelete }) => (
  <div className="grid gap-6">
    {loading ? (
      <div className="col-span-full text-center py-20 text-gray-500 text-xl animate-pulse">
        Loading your tasks...
      </div>
    ) : tasks.length === 0 ? (
      <div className="col-span-full text-center py-20 text-gray-400">
        <div className="text-6xl mb-4">📝</div>
        <p className="text-2xl font-light">
          No tasks yet. Create your first one above!
        </p>
      </div>
    ) : (
      tasks.map((task) => (
        <div
          key={task._id}
          className="group bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-white/50 hover:-translate-y-1"
        >
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition">
                {task.title}
              </h3>
              {task.description && (
                <p className="text-gray-600 leading-relaxed">
                  {task.description}
                </p>
              )}
            </div>
            <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 flex-shrink-0">
              <StatusBadge
                task={task}
                onUpdate={(status) => onUpdate(task._id, status)}
              />
              <button
                onClick={() => onDelete(task._id)}
                className="p-3 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all group-hover:scale-110"
                title="Delete task"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m7-3H4"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>
);
