import styles from './ImageGrid.module.css';

export default function ImageGrid(props) {
    function getCellStyle(imageName) {
        return {
            backgroundImage: `url('${imageName}')`,
        }
    }

    return (
        <div className={styles.grid}>
            <div className={`${styles.topLeft} ${styles.cell}`} style={getCellStyle("top-left.png")}>
            </div>
            <div className={`${styles.mid} ${styles.cell}`} style={getCellStyle("mid.png")}>
            </div>
            <div className={`${styles.bottomLeft} ${styles.cell}`} style={getCellStyle("bottom-left.png")}>
            </div>
            <div className={`${styles.bottomMid} ${styles.cell}`} style={getCellStyle("bottom-mid.png")}>
            </div>
            <div className={`${styles.topMid} ${styles.cell}`} style={getCellStyle("top-mid.png")}>
            </div>
            <div className={`${styles.topRight} ${styles.cell}`} style={getCellStyle("top-right.png")}>
            </div>
            <div className={`${styles.bottomRight} ${styles.cell}`} style={getCellStyle("bottom-right.png")}>
            </div>
            <div className={`${styles.center}`}>
                <img src="/logo.png" className={styles.logo}/>
            </div>
        </div>
    )
}


