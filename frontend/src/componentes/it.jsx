import { useContext } from "react";
import { provid } from "../store/context";

let It = ({ it }) => {
  let { handler2 } = useContext(provid);
  return (
    <div className="row kg-row h">
      <div className="col-6 item-container">{it.name}</div>
      <div className="col-4 item-container">{it.date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger kg-button"
          onClick={(e) => {
            handler2(it, e);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default It;
