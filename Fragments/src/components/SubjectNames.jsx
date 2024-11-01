import { useState } from "react";
import Item from "./Item";

const SubjectNames = ({ items }) => {
  let [selectedItems, setSelectedItems] = useState([]);

  let onSelected = (event) => {
    let newItems = [...selectedItems, event];
    setSelectedItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          SubjectNames={item}
          studying={selectedItems.includes(item)}
          handleStudyButton={() => onSelected(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

export default SubjectNames;
