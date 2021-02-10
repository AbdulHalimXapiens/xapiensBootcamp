import React, { useState, useEffect } from "react";
import { useTasks } from "./TaskProvider";

export default function NewTaskForm() {
  const [task, setTask] = useState("");
  const { addTask, editItem, editTask } = useTasks();

  const submit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(task);
      setTask("");
    } else {
      editTask(task, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTask(editItem.task);
      console.log(editItem);
    } else {
      setTask("");
    }
  }, [editItem]);

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={task}
        placeholder="Ketikan disini..."
        onChange={(e) => setTask(e.target.value)}
        required
      />
      <button type="submit">{editItem ? "Edit" : "Add"}</button>
    </form>
  );
}
