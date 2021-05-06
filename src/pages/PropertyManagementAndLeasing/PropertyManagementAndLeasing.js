import React from "react";
import { Hero } from "../../components";
import { data } from "../../data";

const PropertyManagementAndLeasing = () => {
  return (
    <div>
      <Hero>
        <h1>{data.propertyManagementandLeasing.firstHeading}</h1>
        {data.propertyManagementandLeasing.p1.map((data, index) => {
          return <p key={index}>{data}</p>
        })}
      </Hero>
    </div>
  );
};

export default PropertyManagementAndLeasing;
