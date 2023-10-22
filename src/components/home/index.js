// Components
import Feature from "../feature";
import Booking from "../booking";
import Testimonials from "../testimonials";
import Gallery from "../gallery";
import Extras from "../extras";
import Hero from "../hero";

// Data
import features from "./features";

const Home = () => {
  return (
    <div>
      <Hero />
      <Extras />
      <div id="features">
        {features.map((feature, i) => (
          <Feature
            key={i}
            title={feature.title}
            subtitle={feature.subtitle}
            image={feature.image}
            flip={i % 2 === 1}
          />
        ))}
      </div>
      <Testimonials />
      <Gallery />
      <Booking />
    </div>
  );
};

export default Home;
