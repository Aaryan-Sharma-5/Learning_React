import Item from "./Item";

const SubjectNames = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} SubjectNames={item}></Item>
      ))}
    </ul>
  );
};

export default SubjectNames;