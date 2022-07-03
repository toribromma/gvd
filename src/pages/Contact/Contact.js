import React from "react";
// import { FlexContainer, Hero } from "../../components";
import { data } from "../../data";

const Contact = () => {
  const california = data.contact.California;
  const washington = data.contact.Washington;
  return (
    <div>
      <Hero>
        <h1>{data.contact.title}</h1>
        <div class="column">
          <ul>
            <h2>{california.headingOne}</h2>
            <li>{california.liOne}</li>
            <li>{california.liTwo}</li>
            <li>{california.liThree}</li>
            <li>
              <b>Telehone:</b> {california.telephone}
            </li>
            <li>
              <b>Fax:</b> {california.fax}
            </li>
            <li>
              <b>president:</b> {california.president}
            </li>
            <li>
              <b>Vice President/CFO:</b> {california.vicePresident}
            </li>
            <li>
              <b>Property Manager:</b> {california.propertyManager}
            </li>
          </ul>
          <ul>
            <h2>{washington.headingOne}</h2>
            <li>{washington.liOne}</li>
            <li>{washington.liTwo}</li>
            <li>{washington.liThree}</li>
            <li>
              <b>Telephone:</b> {washington.telephone}
            </li>
            <li>
              <b>Fax:</b> {washington.fax}
            </li>
            <li>
              <b>President:</b> {washington.president}
            </li>
            <li>
              <b>Vice President:</b> {washington.vicePresident}
            </li>
          </ul>
        </div>
      </Hero>
    </div>
  );
};

export default Contact;
