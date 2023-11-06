import styles from "./TopButton.module.css";

function TopButton() {
  function toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <p onClick={toTop} className={styles.top}>
        Go to top
      </p>
    </>
  );
}

export default TopButton;
