import React from "react";
import { Hero } from "../../components";
import pdf from "../../data/ponderay-site-plan.pdf";
import flyer from "../../data/ponderay-flyer.pdf";
import {Link} from "react-router-dom";

const Ponderay = () => {
  return (
    <div>
      <Hero>
        <h1>Ponderay, Idaho</h1>
        <div style={{ textAlign: "left" }}>
          <span>📅</span>
          <span> April 29, 2009</span>
        </div>
        <div style={{ textAlign: "left" }}>
          <p>
            In Ponderay, Idaho, we are developing the northeast corner of
            Highway 95 and Kootenai Cutoff Road, and the northwest corner of
            Highway 95 and Schweitzer Cutoff Road, which are directly across the
            street from one another. A Wal-Mart shopping center is located on
            the southeast corner of this intersection, and Home Depot is located
            to the east of our project on the northeast corner. This is the
            “main and main” location for retail, commercial and mixed use
            development in the Sandpoint/Ponderay trade area.
          </p>
          <p>
            On the northeast corner we are redeveloping the former Kmart
            building, which is approximately 80,000 square feet, and will be
            subdivided to accommodate tenants in the 10,000 – 50,000 square foot
            range. We are currently working with various regional, national and
            local tenants in the main building, and also recently constructed a
            6,000 square foot building in the shopping center (fully leased). We
            are currently planning to build an additional building for smaller
            tenants, as well. We expect this project to be completed by the
            summer of 2011.
          </p>
          <p>
            On the northwest corner, we are currently designing the project to
            include two pad sites and a hotel. The site is approximately 20
            acres (4.5 buildable acres), is bisected by the Sand Creek, and has
            incredible sweeping views of Schweitzer Mountain to the northwest.
            With this unique park-like setting we will provide outstanding
            outdoor amenities to our customers and guests, which will include
            floating and fishing the Sand Creek, mountain biking and walking
            trails, sledding hills in the winter or just enjoying the local
            scenery and wildlife.
          </p>
          <p>
            GVD is developing this project as a joint venture with the prior
            owners of the site. We expect this project to be complete by the
            summer of 2012.
          </p>
          <span>View the </span>
          <a
            rel="noreferrer"
            alt="site plan for Ponderay"
            target="_blank"
            href={pdf}
          >
            site plans
          </a>
          <span> and an</span>
          <a
            rel="noreferrer"
            alt="flyer for Ponderay"
            target="_blank"
            href={flyer}
          >
            {" "}
            informational flyer
          </a>
          <span>
            {" "}
            for our Ponderay, Idaho projects, or contact Ryan for additional
            information at (509) 534-5805.
          </span>
          <p>
            <Link alt="news section of the website" href="/news">
              More news...
            </Link>
          </p>
        </div>
      </Hero>
    </div>
  );
};

export default Ponderay;
