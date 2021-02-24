import styles from './ImageGrid.module.css';

export default function ImageGrid() {
    function getCellStyle(imageName) {
        return {
            backgroundImage: `url('${imageName}')`,
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <div className={`${styles.cell} ${styles.topLeft}`}>
                    <div className={`${styles.cellImg} ${styles.topLeftImg}`}
                         style={getCellStyle("imageGrid/top-left.png")}></div>
                </div>
                <div className={`${styles.cell} ${styles.mid}`}>
                    <div style={getCellStyle("imageGrid/mid.png")}
                         className={`${styles.cellImg} ${styles.midImg}`}></div>
                </div>
                <div className={`${styles.cell} ${styles.bottomLeft}`}>
                    <div style={getCellStyle("imageGrid/bottom-left.png")}
                         className={`${styles.cellImg} ${styles.bottomLeftImg}`}></div>
                </div>
                <div className={`${styles.cell} ${styles.bottomMid}`}>
                    <div style={getCellStyle("imageGrid/bottom-mid.png")}
                         className={`${styles.cellImg} ${styles.bottomMidImg}`}></div>
                </div>
                <div className={`${styles.topMid} ${styles.cell}`}>
                    <div style={getCellStyle("imageGrid/top-mid.png")}
                         className={`${styles.cellImg} ${styles.topMidImg}`}></div>
                </div>
                <div className={`${styles.topRight} ${styles.cell}`}>
                    <div style={getCellStyle("imageGrid/top-right.png")}
                         className={`${styles.cellImg} ${styles.bottomLeftImg}`}></div>
                </div>
                <div className={`${styles.bottomRight} ${styles.cell}`}>
                    <div style={getCellStyle("imageGrid/bottom-right.png")}
                         className={`${styles.cellImg} ${styles.bottomLeftImg}`}></div>
                </div>
            </div>
            <div className={`${styles.center}`}>
                <img src="/logo.png" className={styles.logo}/>
            </div>
            < /div>
    )
}


