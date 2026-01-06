import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    progress: 0,
    done: 0,
    overdue: 0,
  });

  const fetchTasks = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/tasks");
      setTasks(data);

      const total = data.length;
      const open = data.filter((t) => t.status === "OPEN").length;
      const progress = data.filter((t) => t.status === "IN_PROGRESS").length;
      const done = data.filter((t) => t.status === "DONE").length;
      const overdue = data.filter(
        (t) =>
          t.dueDate && new Date(t.dueDate) < new Date() && t.status !== "DONE"
      ).length;

      setStats({ total, open, progress, done, overdue });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to load tasks!",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  const createTask = useCallback(
    async (taskData) => {
      try {
        const { data } = await axios.post("/api/tasks", taskData);
        Swal.fire({
          icon: "success",
          title: "Task Created!",
          text: `Task "${data.title}" created successfully!`,
          timer: 1500,
          showConfirmButton: false,
        });
        fetchTasks();
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "Failed to create task",
        });
      }
    },
    [fetchTasks]
  );

  const updateTask = useCallback(
    async (id, updateData) => {
      try {
        const { data } = await axios.patch(`/api/tasks/${id}`, updateData);
        Swal.fire({
          icon: "success",
          title: "Task Updated!",
          text: `Task "${data.title}" updated successfully!`,
          timer: 1200,
          showConfirmButton: false,
        });
        fetchTasks();
      } catch (error) {
        console.error(error);
        Swal.fire("Error!", "Failed to update task", "error");
      }
    },
    [fetchTasks]
  );

  const updateStatus = useCallback(
    async (id, status) => {
      try {
        await axios.patch(`/api/tasks/${id}/status`, { status });
        Swal.fire({
          icon: "success",
          title: "Status Updated",
          text: `Task moved to ${status.replace("_", " ")}`,
          timer: 1200,
          showConfirmButton: false,
        });
        fetchTasks();
      } catch (error) {
        console.error(error.response?.data || error.message);
        Swal.fire("Error!", "Failed to update task status", "error");
      }
    },
    [fetchTasks]
  );

  const deleteTask = useCallback(
    async (id) => {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#ef4444",
        cancelButtonColor: "#6b7280",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        try {
          await axios.delete(`/api/tasks/${id}`);
          Swal.fire("Deleted!", "Task removed successfully.", "success");
          fetchTasks();
        } catch (error) {
          console.error(error);
          Swal.fire("Error!", "Delete failed", "error");
        }
      }
    },
    [fetchTasks]
  );

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return {
    tasks,
    loading,
    stats,
    createTask,
    updateTask,
    updateStatus,
    deleteTask,
    fetchTasks,
  };
};
