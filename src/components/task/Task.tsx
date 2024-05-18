import React from "react";
import { TodoTask } from "../../models/todoTask";
import Card from "../utils/card/Card";
import styles from "./Task.module.scss";

interface props {
  task: TodoTask;
  changeTask: (task: TodoTask) => boolean;
  deleteTask: (id: string) => boolean;
}

export default function Task({ task, changeTask, deleteTask }: props) {
  const [value, setValue] = React.useState<string>(task.content);
  const [checked, setChecked] = React.useState<boolean>(task.checked);

  function onSubmit(event?: React.FormEvent) {
    if (event) event.preventDefault();

    const newTask: TodoTask = {
      content: value,
      checked: checked,
      id: task.id,
    };

    changeTask(newTask);
  }

  React.useEffect(() => {
    onSubmit();
  }, [value, checked]);

  return (
    <Card>
      <div className={styles.card}>
        <form className={styles.form} onSubmit={(event) => onSubmit(event)}>
          <label className={styles.inputLabel}>
            <input
              onChange={({ target: { value } }) => setValue(value)}
              className={`${styles.input} ${
                task.checked && styles.inputChecked
              }`}
              value={value}
              required
            />
          </label>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              onChange={({ target: { checked } }) => setChecked(checked)}
              className={styles.checkbox}
              checked={checked}
            />
          </label>
        </form>
        <button onClick={() => deleteTask(task.id)} className={styles.delete}>
          delete
        </button>
      </div>
    </Card>
  );
}
