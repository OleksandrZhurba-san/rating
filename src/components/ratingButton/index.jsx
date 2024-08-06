import styles from "./styles.module.css";

function RatingButton({ rating, onClick }) {
  return (
    <button className={styles.set_button} onClick={onClick}>
      Set rating: {rating}
    </button>
  );
}
export default RatingButton;
