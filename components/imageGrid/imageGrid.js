import styles from './ImageGrid.module.css';

export default function ImageGrid(props) {
    function getCellStyle(imageName) {
        return {
            backgroundImage: `url('${imageName}')`,
        }
    }

    return (
        <div className={styles.grid}>
            <div className={`${styles.topLeft} ${styles.cell}`} style={getCellStyle("imageGrid/top-left.png")}>
            </div>
            <div className={`${styles.mid} ${styles.cell}`} style={getCellStyle("imageGrid/mid.png")}>
            </div>
            <div className={`${styles.bottomLeft} ${styles.cell}`} style={getCellStyle("imageGrid/bottom-left.png")}>
            </div>
            <div className={`${styles.bottomMid} ${styles.cell}`} style={getCellStyle("imageGrid/bottom-mid.png")}>
            </div>
            <div className={`${styles.topMid} ${styles.cell}`} style={getCellStyle("imageGrid/top-mid.png")}>
            </div>
            <div className={`${styles.topRight} ${styles.cell}`} style={getCellStyle("imageGrid/top-right.png")}>
            </div>
            <div className={`${styles.bottomRight} ${styles.cell}`} style={getCellStyle("imageGrid/bottom-right.png")}>
            </div>
            <div className={`${styles.center}`}>
                <div className={styles.centerContent}>
                <img src="/logo.png" className={styles.logo}/>
            </div>
                <h2 className={styles.text}>Coming Soon</h2>
            </div>
        < /div>
    )
}


