import { useState, useMemo } from "react";
import { TaskCard } from "./TaskCard.jsx";

export const TaskList = ({
  tasks,
  loading,
  onEdit,
  onDelete,
  onUpdateStatus,
}) => {
  const [statusFilter, setStatusFilter] = useState("ALL"); // ALL, OPEN, IN_PROGRESS, DONE
  const [priorityFilter, setPriorityFilter] = useState("ALL"); // ALL, 1, 2, 3

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      const statusMatch =
        statusFilter === "ALL" ? true : t.status === statusFilter;
      const priorityMatch =
        priorityFilter === "ALL" ? true : t.priority === Number(priorityFilter);
      return statusMatch && priorityMatch;
    });
  }, [tasks, statusFilter, priorityFilter]);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  if (tasks.length === 0) {
    return <p>No tasks found.</p>;
  }

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-4 mb-4 items-center">
        <div>
          <label className="mr-2 font-semibold">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="ALL">All</option>
            <option value="OPEN">Open</option>
            <option value="IN_PROGRESS">In Progress</option>
            <option value="DONE">Completed</option>
          </select>
        </div>

        <div>
          <label className="mr-2 font-semibold">Priority:</label>
          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="p-2 border rounded-lg"
          >
            <option value="ALL">All</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      </div>

      {/* Task Cards */}
      {filteredTasks.length === 0 ? (
        <p>No tasks match the selected filters.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTasks.map((t) => (
            <TaskCard
              key={t._id}
              task={t}
              onEdit={() => onEdit(t)}
              onDelete={() => onDelete(t._id)}
              onUpdateStatus={(status) => onUpdateStatus(t._id, status)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
