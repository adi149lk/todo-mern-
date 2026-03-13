import { useContext, useRef, useState } from "react";
import style from "./Add.module.css";
import { provid } from "../store/context";
let Add = () => {
  let { handler1 } = useContext(provid);
  let Todon = useRef("");
  let Todod = useRef("");
  let Inhandle = (e) => {
    let todoName = Todon.current.value;
    let todoDate = Todod.current.value;

    handler1(todoName, todoDate);
    Todon.current.value = "";
    Todod.current.value = "";
  };
  return (
    <>
      <div className="container ">
        <div className="row kg-row">
          <div className="col-6">
            <input
              className={style.in}
              type="text"
              placeholder="enter todo"
              ref={Todon}
            ></input>
          </div>
          <div className="col-4">
            <input className={style.in} type="date" ref={Todod}></input>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success kg-button"
              onClick={(e) => {
                Inhandle(e);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add;
