import React from "react";
import { Hero } from "../../components";
import {
  arizona,
  california,
  colorado,
  idaho,
  illinois,
  indiana,
  massachusetts,
  michigan,
  missouri,
  newJersey,
  ohio,
  oklahoma,
  texas,
  washington,
} from "../../properties";

const Properties = () => {
  console.log(arizona);

  return (
    <div>
      <Hero>
        <h1>Properties (Partial List)</h1>
        <h2>Arizona</h2>
        <table>
          {arizona.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>California</h2>
          {california.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Colorado</h2>
          {colorado.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Idaho</h2>
          {idaho.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Illinois</h2>
          {illinois.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Indiana</h2>
          {indiana.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Massachusetts</h2>
          {massachusetts.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Michigan</h2>
          {michigan.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Missouri</h2>
          {missouri.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>New Jersey</h2>
          {newJersey.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Ohio</h2>
          {ohio.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Oklahoma</h2>
          {oklahoma.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Texas</h2>
          {texas.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
          <h2>Washington</h2>
          {washington.map((data) => {
            return (
              <tbody>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
      </Hero>
    </div>
  );
};

export default Properties;
