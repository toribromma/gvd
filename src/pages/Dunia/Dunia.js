import React from "react";
import { Hero } from "../../components";
import duniaImg1 from "../../images/news-dunia1.jpg";
import duniaImg2 from "../../images/news-dunia3.jpg";
import pdf from "../../data/dunia-site-plan.pdf";

const Dunia = () => {
  return (
    <div>
      <Hero>
        <h1>Dunia Plaza, Victorville, California</h1>
        <div style={{ textAlign: "left" }}>
          <span>📅</span>
          <span>June 16, 2015</span>
        </div>
        <div style={{ textAlign: "left" }}> 
        <p >
          <img style={{ float: "right" }} alt="dunia1" src={duniaImg1} />
          <img style={{ float: "right" }} alt="dunia2" src={duniaImg2} />
          Our Dunia Plaza project in Victorville, California, is an expertly
          master-planned mixed retail development emphasizing restaurants,
          hospitality and power retailers such as Kohl’s, Lowe’s and Wal-Mart.
          The master-plan enabled the project to be developed in phases with
          each phase operating independently as well as enhancing subsequent
          phases as developed. The project is a joint venture with the Dunia
          Family and was developed over a period of approximately 7 years.
        </p>
        <p>
          The project was completed in 2011, and to generate in excess of 400
          million dollars in annual sales.
        </p>
        <span>View the </span>
        <a
          rel="noreferrer"
          alt="site plan for Dunia Plaza"
          target="_blank"
          href={pdf} 
        >
          site plan
        </a>
        <span> for Dunia Plaza</span>
        <p><a alt="news section of the website" href="#">More news</a></p>
        </div>
      </Hero>
    </div>
  );
};

export default Dunia;
