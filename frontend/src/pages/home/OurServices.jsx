import React from "react";
import Card from "./Card";
import banner6 from "../../assets/banner6.jpg";
import banner7 from "../../assets/banner7.png";
import banner8 from "../../assets/banner8.jpg";
import banner9 from "../../assets/banner9.jpg";
import banner10 from "../../assets/banner10.jpg";
import banner11 from "../../assets/banner11.jpg";
const OurServices = () => {
  return (
    <>
      <div
        className="flex items-center justify-center min-h-screen container mx-auto"
        id="service"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            cardI={banner6}
            cardN="Web Devlopment"
            cardP="Unleash the power of the web with our top-notch web development services. 
            From eye-catching designs to seamless functionality, we craft websites that leave a lasting impression. 
            Elevate your online presence and engage your audience with our innovative solutions."
            cardB="Join Us"
          />
          <Card
            cardI={banner7}
            cardN="App Devlopment"
            cardP="Transform your ideas into interactive and feature-rich mobile apps. 
            Our app development expertise spans across platforms, ensuring a stellar user experience. 
            Whether it's iOS or Android, we bring your vision to life with cutting-edge technology and unparalleled creativity."
            cardB="Join Us"
          />
          <Card
            cardI={banner8}
            cardN="Maintenance and Support"
            cardP="Ongoing website and app maintenance.
            Proactive bug fixes and troubleshooting.
            Performance optimization for better speed and responsiveness.
            Regular security audits and enhancements.
            24/7 support to address your concerns promptly."
            cardB="Join Us"
          />
          <Card
            cardI={banner9}
            cardN="Custom Software Development"
            cardP="Tailored software solutions for specific business needs. 
            Enterprise software development. Database design and management. 
            Workflow automation to improve operational efficiency"
            cardB="Join Us"
          />
          <Card
            cardI={banner10}
            cardN="Consultation and Strategy"
            cardP="Technology consulting to align solutions with business goals. 
            Digital strategy development for online presence. Feasibility studies for new projects. 
            Technology stack recommendations based on project requirements"
            cardB="Join Us"
          />
          <Card
            cardI={banner11}
            cardN="Digital Marketing"
            cardP="Navigate the ever-evolving digital landscape with our expert guidance. 
            We assess your current digital ecosystem, identify opportunities for improvement, 
            and develop a roadmap for a successful digital transformation journey."
            cardB="Join Us"
          />
        </div>
      </div>
    </>
  );
};

export default OurServices;
