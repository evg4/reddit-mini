import styles from "./Header.module.css";

function Header(props) {
  return (
    <h1 onClick={props.onClick}>
      Reddit<span>mini</span>
    </h1>
  );
}

export default Header;
