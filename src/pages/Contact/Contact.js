import React from "react";
import { FlexContainer, Hero } from "../../components";
import { data } from "../../data";

const Contact = () => {
  const california = data.contact.California;
  const washington = data.contact.Washington;
  return (
    <div>
      <Hero>
        <h1>{data.contact.title}</h1>
        <FlexContainer>
          <div style={{padding: 10 }}>
            <h2>{california.headingOne}</h2>
            <p>{california.pOne}</p>
            <p>{california.pTwo}</p>
            <p>{california.pThree}</p>
            <p>
              <b>Telephone:</b> {california.telephone}
            </p>
            <p>
              <b>Fax:</b> {california.fax}
            </p>
            <p>
              <b>President:</b> {california.president}
            </p>
            <p>
              <b>Vice President/CFO:</b> {california.vicePresident}
            </p>
            <p>
              <b>Property Manager:</b> {california.propertyManager}
            </p>
          </div>
          <div style={{padding: 10 }}>
            <h2>{washington.headingOne}</h2>
            <p>{washington.pOne}</p>
            <p>{washington.pTwo}</p>
            <p>{washington.pThree}</p>
            <p>
              <b>Telephone:</b> {washington.telephone}
            </p>
            <p>
              <b>Fax:</b> {washington.fax}
            </p>
            <p>
              <b>President:</b> {washington.president}
            </p>
            <p>
              <b>Vice President/CFO:</b> {washington.vicePresident}
            </p>
            <p>
              <b>Property Manager:</b> {washington.propertyManager}
            </p>
          </div>
        </FlexContainer>
      </Hero>
    </div>
  );
};

export default Contact;
