import React from "react";
import { TodoTask } from "../../models/todoTask";
import Tasks from "../tasks/Tasks";
import styles from "./Todo.module.scss";
import NewTask from "../newTask/NewTask";
import TasksControl from "../tasksControl/TasksControl";

export default function Todo() {
  const [tasks, setTasks] = React.useState<TodoTask[]>(() => {
    const tasks: TodoTask[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    return tasks;
  });

  function appendTask(task: TodoTask): boolean {
    setTasks((lastTasks) => [...lastTasks, task]);
    return true;
  }

  function deleteTask(id: string): boolean {
    setTasks((tasks) => {
      return tasks.filter((task) => task.id !== id);
    });
    return true;
  }

  function clearAll(): boolean {
    setTasks([]);
    return true;
  }

  function clearCompleted(): boolean {
    setTasks((tasks) => tasks.filter((tasks) => !tasks.checked));
    return true;
  }

  function changeTask(modifiedTask: TodoTask): boolean {
    setTasks((tasks) => {
      return tasks.map((task) => {
        if (task.id !== modifiedTask.id) return task;
        return modifiedTask;
      });
    });
    return true;
  }

  React.useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className={styles.container}>
      <NewTask appendTask={appendTask}></NewTask>
      <Tasks
        changeTask={changeTask}
        deleteTask={deleteTask}
        tasks={tasks}
      ></Tasks>
      <TasksControl
        completeTaskLength={tasks.filter((task) => task.checked).length}
        clearAll={clearAll}
        clearCompleted={clearCompleted}
      ></TasksControl>
    </main>
  );
}
