import React from "react";
import { Hero } from "../../components";
import "./style.css"
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
          {arizona.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
        <h2>California</h2>
        <table>
          {california.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
        <h2>Colorado</h2>
        <table>
          {colorado.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
        <h2>Idaho</h2>
        <table>
          {idaho.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>
        <h2>Illinois</h2>
        <table>
          {illinois.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>

        <h2>Indiana</h2>
        <table>
          {indiana.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>

        <h2>Massachusetts</h2>
        <table>
          {massachusetts.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>

        <h2>Michigan</h2>
        <table>
          {michigan.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>

        <h2>Missouri</h2>
        <table>
          {missouri.map((data,index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th>{data.Vendor}</th>
                  <th>{data.Street}</th>
                  <th>{data.City}</th>
                </tr>
              </tbody>
            );
          })}
        </table>

        <h2>New Jersey</h2>
        <table>
        {newJersey.map((data,index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{data.Vendor}</th>
                <th>{data.Street}</th>
                <th>{data.City}</th>
              </tr>
            </tbody>
          );
        })}
        </table>
        <h2>Ohio</h2>
        <table>
        {ohio.map((data,index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{data.Vendor}</th>
                <th>{data.Street}</th>
                <th>{data.City}</th>
              </tr>
            </tbody>
          );
        })}
        </table>
        <h2>Oklahoma</h2>
        <table>
        {oklahoma.map((data,index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{data.Vendor}</th>
                <th>{data.Street}</th>
                <th>{data.City}</th>
              </tr>
            </tbody>
          );
        })}
        </table>
        <h2>Texas</h2>
        <table>
        {texas.map((data,index) => {
          return (
            <tbody key={index}>
              <tr>
                <th>{data.Vendor}</th>
                <th>{data.Street}</th>
                <th>{data.City}</th>
              </tr>
            </tbody>
          );
        })}
        </table>
        <h2>Washington</h2>
        <table>
        {washington.map((data,index) => {
          return (
            <tbody key={index}>
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
