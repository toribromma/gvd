import React from "react";
import { Hero } from "../../components";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div>
      <Hero>
        <h1>News</h1>
        <hr></hr>
        <div style={{ textAlign: "left" }}>
          <h2>Ponderay, Idaho</h2>
          <span>📅</span>
          <span> April 29, 2009</span>
          <p>
            In Ponderay, Idaho, we are developing the northeast corner of
            Highway 95 and Kootenai Cutoff Road, and the northwest corner of
            Highway 95 and Schweitzer Cutoff Road, which are directly across the
            street from one another. A Wal-Mart shopping center is located on
            the southeast corner of this intersection, and Home Depot is located
            to the east of our project on the northeast corner. This is the
            “main and main” location for retail, commercial and mixed use
            development in the Sandpoint/Ponderay trade area. {""}
            <Link to="/ponderay" alt="ponderay page">
              More...
            </Link>
          </p>
          <hr></hr>
        </div>
        <div style={{ textAlign: "left" }}>
          <h2>Dunia Plaza, Victorville, California</h2>
          <span>📅</span>
          <date> April 29, 2009</date>
          <p>
            Our Dunia Plaza project in Victorville, California, is an expertly
            master-planned mixed retail development emphasizing restaurants,
            hospitality and power retailers such as Kohl’s, Lowe’s, Sam’s Club
            and Wal-Mart. The master-plan enabled the project to be developed in
            phases with each phase operating independently as well as enhancing
            subsequent phases as developed. The project is a joint venture with
            the Dunia Family and was developed over a period of approximately 7
            years.
          </p>
          <p>
            We expect the project to be completed in 2011, and to generate in
            excess of 400 million dollars in annual sales.{" "}
            <Link to="/dunia" alt="dunia plaza page">
              More...
            </Link>
          </p>
        </div>
      </Hero>
    </div>
  );
};

export default News;
