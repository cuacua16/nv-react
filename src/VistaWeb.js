import React from "react";
import logo from "./images/logoNV.png";

const VistaWeb = ({poema}) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        alt="random"
        style={{maxWidth: "600px", maxHeight: "400"}}
      />
      {/* <h1 style={{color: "#3388af", fontSize: "42px"}}>Plan Alimentario</h1> */}
      <p>Plan Alimentario</p>
      <table>
        <tr>
          <td> cell 1</td>
          <td> cell 2</td>
          <td> cell 3</td>
        </tr>
      </table>
      <p
        style={{
          color: "gray",
          fontStyle: "italic",
          fontSize: "10px",
        }}
      >
        {lorem}
      </p>
      <br />
    </div>
  );
};

export default VistaWeb;
