import style from "./container.module.css";
function con({ children }) {
  return <div className={style.bo}>{children}</div>;
}
export default con;
