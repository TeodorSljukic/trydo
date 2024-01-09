import "./App.css";
import About from "./components/About/About";
import Brand from "./components/Brand/Brand";
import Fun from "./components/FanFacts/Fun";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import News from "./components/News/News";
import Works from "./components/OurWorks/Works";
import Services from "./components/Servicess/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import BackToTop from "./components/Top/Top";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Works />
      <Fun />
      <Testimonial />
      <News />
      <Brand />
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
