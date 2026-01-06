import { useState, useEffect } from "react";

export const TaskFormModal = ({ task, onClose, onSubmit }) => {
  const [title, setTitle] = useState(task?.title || "");
  const [description, setDescription] = useState(task?.description || "");
  const [priority, setPriority] = useState(task?.priority || 1);
  const [assignedTo, setAssignedTo] = useState(task?.assignedTo || "");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setPriority(task.priority || 1);
      setAssignedTo(task.assignedTo || "");
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, priority, assignedTo });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-2xl w-full max-w-xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {task ? "Update Task" : "Create New Task"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-3 border rounded-lg"
            rows={3}
          />
          <div className="flex gap-4">
            <select
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              className="p-3 border rounded-lg flex-1"
            >
              <option value={1}>Priority 1</option>
              <option value={2}>Priority 2</option>
              <option value={3}>Priority 3</option>
            </select>
            <input
              type="text"
              placeholder="Assign To"
              value={assignedTo}
              onChange={(e) => setAssignedTo(e.target.value)}
              className="flex-1 p-3 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
          >
            {task ? "Update Task" : "Create Task"}
          </button>
        </form>
      </div>
    </div>
  );
};
