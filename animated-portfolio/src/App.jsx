import "./App.scss";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Parallax } from "./components/parallax/parallax";
import { Portfolio } from "./components/portfolio/portfolio";
import { Services } from "./components/services/services";

const App = () => {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">``
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <section>
        <Portfolio />
      </section>
      <section id="Contact">Contact</section>
    </div>
  );
};

export default App;
