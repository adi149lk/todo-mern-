import { useContext } from "react";
import It from "./it";
import { provid } from "../store/context";
let Itemss = () => {
  let { items } = useContext(provid);
  return (
    <div className=".container">
      {/* // <ul className="list-group"> */}
      {items.map((itr) => (
        // <li  className="ad" key={itr}><It it={itr}></It></li>

        <It key={itr.name} it={itr}></It>
      ))}
      {/* // </ul> */}
    </div>
  );
};
export default Itemss;
