export const TabButton = ({ children, onSelect }) => {
  // function afterClick() {
  //   console.log("Hello World!!");
  // }

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};
