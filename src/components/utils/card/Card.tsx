import React from "react";
import styles from "./Card.module.scss";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className={styles.card}>{children}</div>;
}
