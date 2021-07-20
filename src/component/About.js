import React from "react";
import bgimg from "./d2.jpg";
const About = () => {
  return (
      
    <div className="container">
        <div class="bg_image"
          style={{
          backgroundImage: 'url('+bgimg+')',    //Setting the image in background imported from our folder 
          backgroundSize: "cover",             //Adjusting size according to requirement
          height: "100vh",
          color: "#f5f5f5"
        }}
      ></div>
    </div>
  );
};

export default About;