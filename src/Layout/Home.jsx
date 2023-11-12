import React from "react";
import Header from "./Header";
import Content from "./Content";
import "./Home.css";

export default function Home() {
  return (
    <div id="main-layout" className="full-background">
      <Header />
      <div className="wrapper">
        <Content />
      </div>
    </div>
  );
}
