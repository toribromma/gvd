import React from "react";
import { Hero } from "../../components";
import {data} from "../../data"

const Joint = () => {
  return (
    <div>
      <Hero>
        <h1>{data.joint.firstHeading}</h1>
        <h2>{data.joint.secondHeading}</h2>
        {data.joint.p1.map((data) => {
          return <p>{data}</p>
        })}
        <h2>{data.joint.thirdHeading}</h2>
        <p>{data.joint.p2}</p>
        <h3>{data.joint.fourthSmallerHeading}</h3>
        <p><b>Vacant Land</b>: Well-located corners or freeway off-ramps. (Generally 6 acres to 500 acres.)</p>
        <p><b>Existing Projects</b>: Well located 60,000 square feet or greater gross leasable area.</p>
        <p>Upside potential created by:</p>
        <ul>
        {data.joint.li.map((data) => {
          return <p>{data}</p>
        })}
        </ul>
        <h3>Upside potential created by:</h3>
        <ul>
        {data.joint.li2.map((data) => {
          return <p>{data}</p>
        })}
        </ul>
      </Hero>
    </div>
  );
};

export default Joint;
