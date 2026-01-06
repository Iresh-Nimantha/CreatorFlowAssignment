import { useState } from "react";
import { useTasks } from "../hooks/useTasks.js";

export const TaskForm = () => {
  const { createTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    createTask(title, description || undefined);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-8 border border-white/50"
    >
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title *"
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-white/50"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description (optional)"
          className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 transition-all bg-white/50 resize-vertical"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="btn-primary w-full mt-6 text-lg font-bold py-4"
      >
        ➕ Create New Task
      </button>
    </form>
  );
};
