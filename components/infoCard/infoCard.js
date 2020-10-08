import styles from "./infoCard.module.css";

export default function InfoCard(props) {
    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h2>You Create, We Build</h2>
            </div>
        </div>
    )
}
