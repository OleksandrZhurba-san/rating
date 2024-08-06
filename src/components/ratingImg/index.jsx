import styles from "./styles.module.css";

function RatingImage({ url }) {
  return <img className={styles.rating_img} src={url} alt="" />;
}
export default RatingImage;
