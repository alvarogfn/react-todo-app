import React from "react";
import styles from "./TasksControl.module.scss";

interface props {
  clearAll: () => void;
  clearCompleted: () => void;
  completeTaskLength: number;
}

export default function TasksControl({
  clearAll,
  clearCompleted,
  completeTaskLength,
}: props) {
  return (
    <section className={styles.container}>
      <button
        className={styles.clearCompleted}
        onClick={() => clearCompleted()}
        disabled={completeTaskLength === 0}
      >
        Clear Completed
      </button>
      <button className={styles.clearAll} onClick={() => clearAll()}>
        Clear All
      </button>
    </section>
  );
}
