import React from "react";
import { TodoTask } from "../../models/todoTask";
import Task from "../task/Task";
import styles from "./Tasks.module.scss";

interface props {
  tasks: TodoTask[];
  changeTask: (task: TodoTask) => boolean;
  deleteTask: (id: string) => boolean;
}

export default function Tasks({ tasks, changeTask, deleteTask }: props) {
  return (
    <ul className={styles.ul}>
      {tasks.map((task) => {
        return (
          <li className={styles.li} key={task.id}>
            <Task changeTask={changeTask} deleteTask={deleteTask} task={task} />
          </li>
        );
      })}
    </ul>
  );
}
