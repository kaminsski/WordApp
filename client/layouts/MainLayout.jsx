import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout(props) {
  return (
    <>
      <div className="backgroundContainer position-relative min-vh-100 w-100">
       
        <div className="videoContainer position-absolute h-100 object-fit-cover w-100">
          <video
            loop
            className="w-100 h-100 object-fit-cover"
            muted
            autoPlay
            src={"/bg.mp4"}
          ></video>
        </div>
       
        <div className="contentContainer position-relative z-5 pb-5">
          <Header></Header>
          {props.children}
        </div>
      
      </div>
      <Footer></Footer>
    </>
  );
}
4;
