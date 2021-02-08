import React, { createContext, useState, useContext, useEffect } from "react";
import { v4 } from "uuid";

const TaskContext = createContext();
export const useTasks = () => useContext(TaskContext);

export default function TaskProvider({ children }) {
  const initialState = JSON.parse(localStorage.getItem("tasks")) || [];

  const [tasks, setTasks] = useState(initialState);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) =>
    setTasks([
      ...tasks,
      {
        id: v4(),
        task,
        complete: false,
      },
    ]);

  const setStatusTask = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, complete: status } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const findItem = (id) => {
    const item = tasks.find((task) => task.id === id);

    setEditItem(item);
  };

  const editTask = (task1, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { task1, id } : task
    );

    console.log(newTasks);

    setTasks(newTasks);
    setEditItem(null);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        setStatusTask,
        removeTask,
        findItem,
        editItem,
        editTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
