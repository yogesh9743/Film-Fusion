import React from "react";
import HomeSlider from "../components/HomeSlider";
import PopularSlider from "../components/PopularSlider";
import TopRatedSlider from "../components/TopRatedSlider";
import TrendingSlider from "../components/TrendingSlider";

const Home = () => {
  

 
  return (
    <div className=" px-5 md:px-20 py-5 md:py-10  ">
       <HomeSlider/>
      <div className="mt-5 md:mt-9">
        <TrendingSlider/>
      </div>
      <div className="mt-5 md:mt-9">
       
        <PopularSlider />
      </div>
      <div className="mt-5 md:mt-9">
      
        <TopRatedSlider/>
      </div>
    </div>
  );
};

export default Home;
