import React from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoTask } from "../../models/todoTask";
import Card from "../utils/card/Card";
import styles from "./Newtask.module.scss";

interface props {
  appendTask: (task: TodoTask) => boolean;
}

export default function NewTask({ appendTask }: props) {
  const [value, setValue] = React.useState<string>("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const task: TodoTask = {
      checked: false,
      content: value,
      id: uuidv4(),
    };

    const added = appendTask(task);
    if (added) setValue("");
  }

  return (
    <Card>
      <form className={styles.form} onSubmit={(event) => onSubmit(event)}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="text"
            value={value}
            placeholder="What do you want to do?"
            onChange={({ target: { value } }) => setValue(value)}
            required={true}
          />
        </label>
      </form>
    </Card>
  );
}
