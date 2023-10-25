import styles from "./Header.module.css";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header>
      <h1>
        Reddit<span>mini</span>
      </h1>
      <SearchBar />
    </header>
  );
}

export default Header;
