import React from "react";
import { Carousel, Hero } from "../../components";
const Home = () => {
  return (
    <div>
      <Carousel />
      <Hero>
        <h1>GVD Commercial Properties</h1>
        <p>
          GVD has been developing and redeveloping retail projects since 1974.
        </p>
        <p>
          GVD specializes in all phases of retail and commercial development
          with particular emphasis on expert master planning and well-crafted
          and creative developments. GVD also provides consulting and
          development services for developers seeking expertise and/or financial
          support.
        </p>
        <button>Also See...</button>
      </Hero>
    </div>
  );
};

export default Home;
