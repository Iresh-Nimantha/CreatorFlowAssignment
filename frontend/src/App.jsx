import { useState, useMemo } from "react";
import { Sidebar } from "./components/Sidebar.jsx";
import { StatsDashboard } from "./components/StatsDashboard.jsx";
import { TaskList } from "./components/TaskList.jsx";
import { TaskFormModal } from "./components/TaskFormModal.jsx";
import { Charts } from "./components/Charts.jsx";
import { useTasks } from "./hooks/useTasks.js";
import { TaskCard } from "./components/TaskCard.jsx";

export default function App() {
  const { tasks, loading, createTask, updateTask, updateStatus, deleteTask } =
    useTasks();

  const [activeTab, setActiveTab] = useState("Dashboard");
  const [modalTask, setModalTask] = useState(null); // null = create, object = edit
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Compute stats
  const stats = {
    total: tasks.length,
    open: tasks.filter((t) => t.status === "OPEN").length,
    progress: tasks.filter((t) => t.status === "IN_PROGRESS").length,
    done: tasks.filter((t) => t.status === "DONE").length,
    overdue: tasks.filter(
      (t) =>
        t.dueDate && new Date(t.dueDate) < new Date() && t.status !== "DONE"
    ).length,
  };

  // Latest/high priority tasks for dashboard cards
  const dashboardTasks = useMemo(() => {
    return tasks
      .slice()
      .sort((a, b) => b.priority - a.priority)
      .slice(0, 6);
  }, [tasks]);

  // Open modal for create
  const handleOpenCreateModal = () => {
    setModalTask(null);
    setIsModalOpen(true);
  };

  // Open modal for edit
  const handleOpenEditModal = (task) => {
    setModalTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 p-8 space-y-6">
        {activeTab === "Dashboard" && (
          <>
            <StatsDashboard stats={stats} />
            <Charts tasks={tasks} />

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Latest / High Priority Tasks
              </h2>
              <button
                onClick={handleOpenCreateModal}
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                + Create New Task
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dashboardTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  onEdit={() => handleOpenEditModal(task)}
                  onDelete={() => deleteTask(task._id)}
                  onUpdateStatus={(status) => updateStatus(task._id, status)}
                />
              ))}
            </div>
          </>
        )}

        {activeTab === "Tasks" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">All Tasks</h2>
              <button
                onClick={handleOpenCreateModal}
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                + Create New Task
              </button>
            </div>

            <TaskList
              tasks={tasks}
              loading={loading}
              onEdit={handleOpenEditModal}
              onDelete={deleteTask}
              onUpdate={updateTask}
            />
          </>
        )}

        {isModalOpen && (
          <TaskFormModal
            task={modalTask}
            onClose={() => setIsModalOpen(false)}
            onSubmit={(data) => {
              if (modalTask) updateTask(modalTask._id, data);
              else createTask(data);
              setIsModalOpen(false);
            }}
          />
        )}
      </main>
    </div>
  );
}
