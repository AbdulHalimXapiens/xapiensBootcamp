import React from "react";
import { useTasks } from "./TaskProvider";

export default function Task({ id, task, complete }) {
  const { removeTask, findItem, setStatusTask } = useTasks();

  const checkTask = (e) => setStatusTask(id, e.target.checked);

  return (
    <tr>
      <td>
        <input type="checkbox" onChange={checkTask} />
      </td>
      <td>
        <span className={complete ? "task-done" : ""}>{task}</span>
      </td>
      <td>
        <button onClick={() => removeTask(id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => findItem(id)}>Edit</button>
      </td>
    </tr>
  );
}
