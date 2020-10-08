import Layout from '../components/layout/layout';
import ImageGrid from "../components/imageGrid/imageGrid";
import Navbar from "../components/navbar/navbar";
import InfoCard from "../components/infoCard/infoCard";

export default function Home() {
  return (
    <div>
      <Layout>
          <Navbar/>
          <ImageGrid/>
          <InfoCard/>
      </Layout>
    </div>
  )
}
