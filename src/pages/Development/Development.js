import React from "react";
import { Hero } from "../../components";
import {data} from "../../data"

const Development = () => {
  const paragraph1 = data.development.slice(1,4);
  return (
    <div>
      <Hero>
        <h1>{data.development[0]}</h1>
        {paragraph1.map((data) => {
          return <p>{data}</p>
        })}
      </Hero>
    </div>
  );
};

export default Development;
