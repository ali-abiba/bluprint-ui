import Layout from '../components/layout/layout';
import ImageGrid from "../components/imageGrid/imageGrid";
import Navbar from "../components/navbar/navbar";
import InfoCard from "../components/infoCard/infoCard";
import EmailForm from "../components/emailForm/emailForm";
import styles from "../components/imageGrid/ImageGrid.module.css";

export default function Home() {
    return (
        <div>
            <Layout>
                <div className="main">
                    <Navbar/>
                    <ImageGrid/>
                </div>
                {/*Remove when site goes live*/}
                <div className="overlay">
                    <div className="emailForm">
                        <img src="/logo.png" className="logo"/>
                        <h2>Coming Soon</h2>
                        <EmailForm/>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
