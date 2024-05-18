import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>To-do List!</h1>
    </header>
  );
}
