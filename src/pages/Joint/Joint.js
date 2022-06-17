import React from "react";
import { Hero } from "../../components";
import {data} from "../../data"

const Joint = () => {
  return (
    <div>
      <Hero>
        <h1>{data.joint.firstHeading}</h1>
        <h2>{data.joint.secondHeading}</h2>
        {data.joint.p1.map((data, index) => {
          return <p key={index}>{data}</p>
        })}
        <h2>{data.joint.thirdHeading}</h2>
        <p>{data.joint.p2}</p>
        <h2>{data.joint.fourthSmallerHeading}</h2>
        <p><b>Vacant Land</b>: Well-located corners or freeway off-ramps. (Generally 6 acres to 500 acres.)</p>
        <p><b>Existing Projects</b>: Well located 60,000 square feet or greater gross leasable area.</p>
        <h3>Upside potential created by:</h3>
        <ul>
        {data.joint.li.map((data, index) => {
          return <li key={index}>{data}</li>
        })}
        </ul>
        <h3>Upside potential created by:</h3>
        <ul>
        {data.joint.li2.map((data, index) => {
          return <li key={index}>{data}</li>
        })}
        </ul>
      </Hero>
    </div>
  );
};

export default Joint;
