import { useContext } from "react";
import { provid } from "../store/context";

let Er = () => {
  let { items } = useContext(provid);
  return <>{items.length == 0 && <h1>empty</h1>}</>;
};
export default Er;
