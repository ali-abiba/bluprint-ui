import styles from "./home.module.css"
import Navbar from "../navbar/navbar";
import ImageGrid from "../imageGrid/imageGrid";
import Layout from "../layout/layout";

export default class Home extends React.Component {

    constructor() {
        super();
    }

    getCellStyle(imageName) {
        return {
            backgroundImage: `url('${imageName}')`
        }
    }

    render() {
        return (
            <div>
                <Layout>
                    <div className="main">
                        <Navbar/>
                        <ImageGrid/>
                        <section className={styles.infoCard}>
                            <div className={`${styles.cardSection} ${styles.customerCard}`}>
                                <h2>Need a Piece Done?</h2>
                                <p>We change your visual art needs from an <span className="highlight">idea</span> to
                                    <span className="highlight"> reality</span>,
                                    then connect with our extensive network of artists to fulfill your needs.</p>
                            </div>
                            <div className={`${styles.cardSection} ${styles.artistCard}`}>
                                <h2>Are You an Artist?</h2>
                                <p>Finding work as a young artist is challenging, we're here to help. Our unique method of
                                    creating
                                    removes the stress of <span className="highlight">finding</span> and <span className="highlight">maintaining </span>
                                    clients and their commissions.</p>
                            </div>
                        </section>

                        <section className={styles.teamCard}>
                            <h2>Meet the team</h2>
                            <div className={`${styles.row}`}>
                                <h3>Benjamin Baugham</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque eleifend sapien, a auctor sem porta ac. Morbi at metus ac dolor congue ultrices a vel dui. Mauris iaculis rutrum enim eu sodales. Proin rhoncus rhoncus nulla, vel viverra diam. Morbi tincidunt arcu elit, gravida venenatis magna eleifend vitae. Donec porta elit vel pulvinar ultricies. Phasellus vitae orci a nisl faucibus consequat. Mauris ornare interdum ante vel finibus.</p>
                            </div>
                            <div onMouseOver={() => this.teamHover} className={`${styles.row}`}>
                                <h3>Nathan Roberts</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque eleifend sapien, a auctor sem porta ac. Morbi at metus ac dolor congue ultrices a vel dui. Mauris iaculis rutrum enim eu sodales. Proin rhoncus rhoncus nulla, vel viverra diam. Morbi tincidunt arcu elit, gravida venenatis magna eleifend vitae. Donec porta elit vel pulvinar ultricies. Phasellus vitae orci a nisl faucibus consequat. Mauris ornare interdum ante vel finibus.</p>
                            </div>
                            <div onMouseOver={() => this.teamHover} className={`${styles.row}`}>
                                <h3>Ali Abiba</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur scelerisque eleifend sapien, a auctor sem porta ac. Morbi at metus ac dolor congue ultrices a vel dui. Mauris iaculis rutrum enim eu sodales. Proin rhoncus rhoncus nulla, vel viverra diam. Morbi tincidunt arcu elit, gravida venenatis magna eleifend vitae. Donec porta elit vel pulvinar ultricies. Phasellus vitae orci a nisl faucibus consequat. Mauris ornare interdum ante vel finibus.</p>
                            </div>
                        </section>


                    </div>
                </Layout>
            </div>
        )
    }
}
