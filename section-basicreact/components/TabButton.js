export const TabButton = ({ children, onSelect, isSelected }) => {
  // function afterClick() {
  //   console.log("Hello World!!");
  // }

  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};
