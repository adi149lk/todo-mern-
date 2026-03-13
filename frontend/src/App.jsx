import Add from "./componentes/Add";
import Appname from "./componentes/Appname";
import Items from "./componentes/items";
import Er from "./componentes/er";
import Con from "./componentes/container";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState } from "react";
import ContextProvider from "./store/context";

function App() {
  // let [items, setItems] = useState([]);

  // let date=["12/03/2025","23/09/2025","04/11/2025"];

  // let handler1 = (todoName, todoDate) => {
  //   if (todoName !== "" && todoDate !== "") {
  //     setItems((currValue) => {
  //       return [...currValue, { name: todoName, date: todoDate }];
  //     });
  //   }
  // };
  // let handler4 = (f, e) => {
  //   let j = items.filter((i) => {
  //     return i.name !== f.name && i.date !== f.date;
  //   });
  // console.log(f, f.name, f.date);
  // console.log(j);
  //   setItems(j);
  // };

  return (
    <ContextProvider>
      <Con>
        <center className="main">
          <Appname></Appname>
          <Add></Add>
          <Er></Er>
          <Items></Items>
        </center>
      </Con>
    </ContextProvider>
  );
}

export default App;
