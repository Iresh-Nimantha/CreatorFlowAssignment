import { useTasks } from "./hooks/useTasks.js";
import { TaskForm } from "./components/TaskForm.jsx";
import { TaskList } from "./components/TaskList.jsx";

function App() {
  const { tasks, loading, updateStatus, deleteTask } = useTasks();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            CreatorFlow
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mx-auto">
            Manage your creative tasks with beautiful design & real-time updates
          </p>
        </div>

        <TaskForm />

        <section className="mt-12">
          <TaskList
            tasks={tasks}
            loading={loading}
            onUpdate={updateStatus}
            onDelete={deleteTask}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
