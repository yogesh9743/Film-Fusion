import React, { useEffect, useState } from "react";
import Slid from "react-slick";


const SliderSection = ({cast}) => {
 
  const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallDevice(window.innerWidth <= 768);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    const settings = {
      slidesToShow: isSmallDevice ? 3 : 5,
      slidesToScroll: isSmallDevice ? 3 : 5,
      infinite: false,
    };

  return (
 
        <Slid {...settings}>
          {cast?.map((item)=>(<div className="!flex !flex-col !items-center !justify-center" key={item.id}>
            <img
            src={item?.profile_path ? `https://image.tmdb.org/t/p/original${item.profile_path}` : "/images/avatar.png"}
            alt=""
            className="!w-[100px] !h-[100px] md:!w-[150px] md:!h-[150px] rounded-[50%] object-cover"
          />
          <p className="text-[12px] md:text-[16px]">{item.original_name} <br />as <br />{item.character}</p>
          </div>))}
          
        </Slid>
      
    
  );
};

export default SliderSection;

