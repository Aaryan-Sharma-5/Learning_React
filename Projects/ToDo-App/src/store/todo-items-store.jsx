import { useReducer } from "react";
import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  setTodoItems: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currValue, action) => {
  let newTodoItems = currValue;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currValue,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currValue.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const onNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: { itemName, itemDueDate },
    };
    dispatchTodoItems(newItemAction);
  };

  const onDeleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        onNewItem,
        onDeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
