import { useContext, useState } from "react";
import { provid } from "../store/context";
import styles from "./it.module.css";

let It = ({ it }) => {
  let { handler2, handler3 } = useContext(provid);
  const [com, setCom] = useState(false);
  return (
    <div className={styles["it-row"]}>
      <div className={styles["it-name"]}>{it.name}</div>
      <div className={styles["it-date"]}>{it.date}</div>
      <div className={styles["it-actions"]}>
        <button
          type="button"
          className={`${styles["it-btn"]} ${styles.delete}`}
          onClick={(e) => {
            handler2(it, e);
          }}
        >
          Delete
        </button>
        {it.complete || com ? (
          <span className={styles["it-completed"]}>Completed</span>
        ) : (
          <button
            type="button"
            className={`${styles["it-btn"]} ${styles.complete}`}
            onClick={(e) => {
              handler3(it, e);
              setCom(true);
            }}
          >
            Complete
          </button>
        )}
      </div>
    </div>
  );
};
export default It;
