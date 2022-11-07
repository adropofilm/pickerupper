import styles from "./styles.module.css"

const FeaturedCard = ({src, alt, text}) => {
    return (
        <div className={styles["featured-card"]}>
            <img src={src} alt={alt} />
            <p>{text}</p>
        </div>
    )
}

export default FeaturedCard;