import React from "react";
import {Document, Page, Text, View, Image} from "@react-pdf/renderer";
import logo from "./images/logoNV.png";

const DocuPDF = ({poema}) => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: 10,
          }}
        >
          <Image
            src={logo}
            alt="logo"
            style={{maxWidth: "600px", maxHeight: "400"}}
          />{" "}
          {/* <Text style={{color: "#3388af", fontSize: "42px"}}>TITULO</Text> */}
          <Text>Plan Alimentario</Text>
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
            }}
          >
            {lorem}
          </Text>
          <Text style={{textAlign: "justify", marginTop: "22px"}}>AA</Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
