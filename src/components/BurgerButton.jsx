import "../Styles/BurgerButton.css";

export function BurgerButton(props) {
  console.log(props);
  return (
    <div onClick={props.handleClick} className="menuFive">
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
