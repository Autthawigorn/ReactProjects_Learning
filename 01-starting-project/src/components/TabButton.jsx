// ** 'Chidren Props' approach
export default function TabButton({ children, onSelect }) {
  return (
    <li>
      <button onClick={onSelect}> {children} </button>
    </li>
  );
}

// ** 'Attributes Props' approach
// export default function TabButton(props) {
//     return <li><button>{props.label}</button></li>
// }
