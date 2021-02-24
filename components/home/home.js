import styles from "./home.module.css"
import Navigation from "../navbar/navbar";
import ImageGrid from "../imageGrid/imageGrid";
import Layout from "../layout/layout";
import Link from 'next/link';


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
                        <Navigation/>
                        <ImageGrid/>

                        <section className={styles.summary} style={this.getCellStyle('./home/divider.png')}>
                            <h2>What is Bluprint?</h2>
                            <div className={styles.summaryP}>
                            <p>Bluprint is a personal design firm that operates on the idea of human
                                connection made between clients and artists. Our unique approach to
                                consulting allows the client to be a part of the creation process for their
                                commission, while giving our artists direction, motivation, and resources.
                            </p>
                            </div>
                        </section>

                        {/*<div className={styles.divider} style={this.getCellStyle('home/divider.png')}></div>*/}

                        <section className={styles.infoCard}>
                            <div className={styles.topCard}>
                                <div className={`${styles.cardSection} ${styles.customerCard}`}>
                                    <h2>Need a Piece Done?</h2>
                                    <div className={styles.cardContent}>
                                        <p>We change your visual art needs from an <span
                                            className="highlight">idea</span> to
                                            <span className="highlight"> reality</span>,
                                            then connect with our extensive network of artists to fulfill your needs.
                                        </p>
                                        <Link href="/commission">
                                            <button>Lets get building!</button>
                                        </Link>
                                    </div>
                                </div>
                                <img src="./home/visual-art.png" className={styles.artistImg}/>

                            </div>
                            <div className={styles.topCard}>
                                <img src="./home/artist-art.png" className={styles.artistImg}/>
                                <div className={`${styles.cardSection} ${styles.artistCard}`}>
                                    <h2>Are You an Artist?</h2>
                                    <div className={styles.cardContent}>
                                        <p>Finding work as a young artist is challenging, we're here to help. Our unique
                                            method of creating removes the stress of <span
                                                className="highlight">finding</span> and <span
                                                className="highlight">maintaining </span>
                                            clients and their commissions.</p>
                                        <Link href="/artist-signup">
                                            <button>Lets get started!</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className={styles.teamCard}>
                            <h2>Meet the team</h2>
                            <div className={`${styles.row}`}>
                                <h3>Benjamin Baugham <span className="highlight">CEO</span></h3>
                                <div className={styles.teamRow}>
                                    <p>Ben Baugham, or Boy Blue, is the Chief Executive Officer and head Architect for
                                        Bluprint. Ben's art journey began at childhood, and has
                                        taken him to great heights since. Ben's passion for bringing people together
                                        through art takes many forms. You might find him
                                        at the Oregon District chalking and chatting it up, or performing live in front
                                        of a corporate audience. Bluprint is his
                                        ultimate expression of filling the gaps between people with art.</p>
                                    <img src="./home/portrait/ben.PNG" className={styles.portrait}/>
                                </div>
                            </div>
                            <div className={`${styles.row}`}>
                                <h3>Nathan Roberts <span className="highlight">CMO</span></h3>
                                <div className={styles.teamRow}>
                                    <p>Nathan Roberts, or SuperZero, is the Chief Marketing Officer and artist liaison
                                        for Bluprint. Nathan's extensive portfolio
                                        is evidence enough of his commitment to the arts and his passion for creating.
                                        His passion manifests itself through his role in Bluprint,
                                        helping up and coming local artists further their career.</p>
                                    <img src="./home/portrait/nathan.PNG" className={styles.portrait}/>
                                </div>
                            </div>
                            <div className={`${styles.row}`}>
                                <h3>Ali Abiba <span className="highlight">CTO</span></h3>
                                <div className={styles.teamRow}>
                                    <p>Ali Abiba is the Chief Techincal Officer and runs the business/tech side of things.
                                        While not an artist, Ali deeply appreciates
                                        and understands the value that visual arts has on society and culture. Ali's
                                        expertise lies in helping artists get the business they need, and
                                        clients the art they need.</p>
                                    <img src="./home/portrait/ali.PNG" className={styles.portrait}/>
                                </div>
                            </div>
                        </section>

                        <section className={styles.socials}>
                            <h2>Follow Us!</h2>
                            <div className={styles.socialRow}>
                                <a target="_blank" href="https://www.instagram.com/bluprint.art/"><img src="./home/instagram.png" className={styles.instagram}></img></a>
                                <a target="_blank" href="https://www.facebook.com/bluprint.art"><img src="./home/facebooks.png" className={styles.facebook}></img></a>
                            </div>
                            <div className={styles.emailSignup}>

                            </div>
                        </section>

                    </div>
                </Layout>
            </div>
        )
    }
}
