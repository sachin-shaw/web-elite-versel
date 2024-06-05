import { Carousel } from "flowbite-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import banner3 from "../../assets/banner3.png";
import banner5 from "../../assets/banner5.png";

const HomeCarousel = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    // Redirect to the contactus page or any other desired page
    navigate("/contactus");
  };

  const handleDemoClick = () => {
    // Redirect to the contactus page or any other desired page
    navigate("/contactus");
  };

  return (
    <div className="bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto my-auto">
          <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
            <div className="md:m-28">
              <img src={banner5} alt="" />
            </div>
            {/* hero text*/}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-5xl md:mb-4 mb-2 font-semibold text-neutralBlue leading-snug">
                Here you can Level Up Your Business
              </h1>
              <p className="text-neutralGrey text-base md:mb-8 mb-8">
                Welcome and thank you for taking your time to take a look at our
                solutions, we can ensure you that we will take your Business to
                the next level, so hang in tight and lets Level UP!
              </p>
              <button className="btn-primary3" onClick={handleRegisterClick}>
                Register
              </button>
            </div>
          </div>
          <div className="md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-2">
            <div className="md:m-28">
              <img src={banner3} alt="" />
            </div>
            {/* hero text*/}
            <div className="md:w-1/2">
              <h1 className="text-2xl md:text-5xl md:mb-4 mb-2 font-semibold text-neutralPink leading-snug">
                Digital Marketing Training In Mohali
              </h1>
              <p className="text-neutralGrey text-base md:mb-8 mb-8">
                Ready to upgrade your digital marketing skills and advance your
                career? Our comprehensive course covers social media, SEO,
                content marketing, and more.
              </p>
              <button className="btn-primary2" onClick={handleDemoClick}>
                Book a Free Demo
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HomeCarousel;
