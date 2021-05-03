import React from "react";
import { Hero } from "../../components";
import { data } from "../../data";

const About = () => {
  const paragraph1 = data.about.slice(1, 9);
  const paragraph2 = data.about.slice(12, 15);

  return (
    <div>
      <Hero>
        <h1>{data.about[0]}</h1>
        {paragraph1.map((data) => {
          return <p>{data}</p>;
        })}
        <h2>{data.about[9]}</h2>
        <p>{data.about[10]}</p>
        <h2>{data.about[11]}</h2>
        {paragraph2.map((data) => {
          return <p>{data}</p>;
        })}
      </Hero>
    </div>
  );
};

export default About;
