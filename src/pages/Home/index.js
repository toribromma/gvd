import React from "react";
import { Carousel, Information, Hero } from "../../components";
const Home = () => {
  return (
    <div>
      <Information />
      <Carousel />
      <Hero
      name={"GVD Commercial Properties"}
      description={"GVD has been developing and redeveloping retail projects since 1974."}
      p={"GVD specializes in all phases of retail and commercial development with particular emphasis on expert master planning and well-crafted and creative developments. GVD also provides consulting and development services for developers seeking expertise and/or financial support."}
      button={"Call Us for Help"}
      />
    </div>
  );
};

export default Home;
