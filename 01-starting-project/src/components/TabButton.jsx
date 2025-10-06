// ** 'Chidren Props' approach
export default function TabButton({ children, isSelected, ...props }) { //...props for forwording prop.onclick
    console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}> {children} </button>
    </li>
  );
}

// ** 'Attributes Props' approach
// export default function TabButton(props) {
//     return <li><button>{props.label}</button></li>
// }
