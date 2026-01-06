import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = useCallback(async () => {
    try {
      const { data } = await axios.get("/api/tasks");
      setTasks(data);
    } catch (error) {
      toast.error("Failed to load tasks");
    } finally {
      setLoading(false);
    }
  }, []);

  const createTask = async (title, description) => {
    try {
      await axios.post("/api/tasks", { title, description });
      toast.success("Task created!");
      fetchTasks();
    } catch (error) {
      toast.error("Failed to create task");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`/api/tasks/${id}/status`, { status });
      toast.success("Status updated!");
      fetchTasks();
    } catch (error) {
      toast.error("Status update failed");
    }
  };

  const deleteTask = async (id) => {
    if (!confirm("Delete this task?")) return;
    try {
      await axios.delete(`/api/tasks/${id}`);
      toast.success("Task deleted!");
      fetchTasks();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return { tasks, loading, createTask, updateStatus, deleteTask };
};
