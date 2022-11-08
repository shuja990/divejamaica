import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Plans from "./pages/Plans";
import About from "./pages/About";
import Services from "./pages/Services";
import OurTeam from "./pages/OurTeam";
import ImageGallery from "./pages/Gallery";

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
