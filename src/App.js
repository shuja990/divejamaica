import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import ImageGallery from "./pages/Gallery";
import Scuba from "./components/Services/Scuba";
import Snorkel from "./components/Services/Snorkeling";
import Para from "./components/Services/Para";
import DeepSea from "./components/Services/DeepSea";
import WaterSki from "./components/Services/WaterSki";
import SpeedBoat from "./components/Services/SpeedBoat";
import GlassBottom from "./components/Services/GlassBottom";
import WillyBoat from "./components/Services/WillyBoat";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<About />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/our-team" exact element={<OurTeam />} />
        <Route path="/gallery" exact element={<ImageGallery />} />
        <Route path="/plans" exact element={<Plans />} />
        <Route path="/scuba-diving" exact element={<Scuba />} />
        <Route path="/para-sailing" exact element={<Para />} />
        <Route path="/deep-sea-fishing" exact element={<DeepSea />} />
        <Route path="/water-ski" exact element={<WaterSki />} />
        <Route path="/speed-boat" exact element={<SpeedBoat />} />
        <Route path="/glass-bottom-boat" exact element={<GlassBottom />} />
        <Route path="/willy-boat-rides" exact element={<WillyBoat />} />
        <Route path="/snorkeling" exact element={<Snorkel />} />
        <Route path="/contact-us" exact element={<Contact />} />
      </Routes>
      <Footer />
      <ul className="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
