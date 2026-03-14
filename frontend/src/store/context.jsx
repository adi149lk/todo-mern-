import { createContext, useEffect, useReducer } from "react";
export const provid = createContext({
  items: {},
  handler1: () => {},
  handler2: () => {},
  handler3: () => {},
});
let Reducer = (state, action) => {
  let newItems = state;
  if (action.type == "NEW_ITEM") {
    newItems = [...newItems, action.payload];
  } else if (action.type == "NEW_ITEMS") {
    newItems = action.payload;
  } else if (action.type == "DELETE_ITEM") {
    newItems = newItems.filter((i) => {
      return (
        i.name !== action.payload.todoName && i.date !== action.payload.todoDate
      );
    });
  }
  return newItems;
};
let ContextProvider = ({ children }) => {
  const [items, Dispatcher] = useReducer(Reducer, []);
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:3001/api/item");
      const data = await response.json();
      // console.log(data);

      const items = data.map((item) => {
        return {
          name: item.task,
          date: item.date,
          complete: item.complete,
          _id: item._id,
        };
      });
      Dispatcher({
        type: "NEW_ITEMS",
        payload: items,
      });
    };
    fetchItems();
  }, []);

  let handler1 = async (todoName, todoDate) => {
    if (todoName !== "" && todoDate !== "") {
      const response = await fetch("http://localhost:3001/api/item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          task: todoName,
          date: todoDate,
        }),
      });

      const data = await response.json();

      Dispatcher({
        type: "NEW_ITEM",
        payload: {
          name: data.task,
          date: data.date,
          complete: data.complete,
          _id: data._id,
        },
      });
    }
  };
  let handler2 = async (el) => {
    const action = {
      type: "DELETE_ITEM",
      payload: {
        todoName: el.name,
        todoDate: el.date,
      },
    };
    console.log(el);
    const response = await fetch(`http://localhost:3001/api/delete/${el._id}`, {
      method: "DELETE",
    });
    // console.log(response);
    const deletedId = await response.json();
    console.log("deleted todo id is", deletedId);
    Dispatcher(action);
  };
  const handler3 = async (el, e) => {
    const response = await fetch(`http://localhost:3001/api/${el._id}`, {
      method: "PUT",
    });
    const data = await response.json();

    console.log("completed", data.task);
  };

  return (
    <provid.Provider value={{ items, handler1, handler2, handler3 }}>
      {children}
    </provid.Provider>
  );
};

export default ContextProvider;
