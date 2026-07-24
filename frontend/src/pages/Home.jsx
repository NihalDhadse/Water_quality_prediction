import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";
import Stats from "../components/Stats";
import WaterInfo from "../components/WaterInfo";
import FAQ from "../components/FAQ";
import Team from "../components/Team";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureCard />
      <Stats />
      <WaterInfo />
      <FAQ />
      <Team />
      <Footer />
    </>
  );
}

export default Home;