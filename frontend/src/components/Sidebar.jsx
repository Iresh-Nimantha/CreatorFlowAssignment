import {
  BarChart3,
  Zap,
  PlusCircle,
  User,
  Settings,
  Layers,
} from "lucide-react";
import logo from "../assets/logo.png"; // ✅ import your logo

export const Sidebar = ({ activeTab, setActiveTab, onCreateTask }) => {
  const tabs = [
    { name: "Dashboard", icon: BarChart3 },
    {
      name: "Tasks",
      icon: Zap,
    },
  ];

  const quickActions = [
    {
      name: "Create Task",
      icon: PlusCircle,
      onClick: onCreateTask,
      onClick: () => alert("Upload feature coming soon!"),
      onClick: () => console.error("Upload feature coming soon!"),
    },
    {
      name: "Upload Content",
      icon: Layers,
      onClick: () => alert("Upload feature coming soon!"),
      onClick: () => alert("Upload feature coming soon!"),
    },
  ];

  const userActions = [
    { name: "Profile", icon: User, onClick: () => alert("Profile clicked!") },
    {
      name: "Settings",
      icon: Settings,
      onClick: () => alert("Settings clicked!"),
    },
  ];

  return (
    <aside className="w-72 bg-white/30 backdrop-blur-md shadow-xl p-6 flex flex-col justify-between h-screen sticky top-0 ">
      <div>
        {/* Logo */}
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt="CreatorFlow Logo"
            className="w-12 h-12 mr-3 rounded-full"
          />
          <h1 className="text-3xl font-black text-blue-600">CreatorFlow</h1>
        </div>

        {/* Main Tabs */}
        <nav className="flex flex-col gap-4 mb-6 mt-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all font-semibold ${
                  isActive
                    ? "bg-blue-100/50 text-blue-600 shadow-lg"
                    : "text-gray-700 hover:bg-blue-100/40"
                }`}
              >
                <Icon className="w-6 h-6" />
                {tab.name}
              </button>
            );
          })}
        </nav>

        {/* Quick Actions */}
        <h3 className="text-gray-500 uppercase text-xs font-bold mb-2">
          Quick Actions
        </h3>
        <div className="flex flex-col gap-3 mb-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <button
                key={action.name}
                onClick={action.onClick}
                className="flex items-center gap-3 p-2 rounded-lg text-gray-700 hover:bg-blue-100/40 transition font-medium"
              >
                <Icon className="w-5 h-5" />
                {action.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* User / Profile Actions */}
      <div className="flex flex-col gap-3">
        {userActions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.name}
              onClick={action.onClick}
              className="flex items-center gap-3 p-2 rounded-lg text-gray-700 hover:bg-blue-100/40 transition font-medium"
            >
              <Icon className="w-5 h-5" />
              {action.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
};
