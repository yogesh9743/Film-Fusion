import React, { useEffect, useState } from 'react'
import Card from './Card'
import Slider from 'react-slick';
import useFetch from '../hooks/useFetch';
import LoadingSkeleton from './SliderSkeleton';

const PopularSlider = () => {
    const [popularType, setPopularType] = useState("movie");
    const {data:popular, loading} = useFetch(`/${popularType}/popular`)
    const [isSmallDevice, setIsSmallDevice] = useState(window.innerWidth <= 768);
    console.log("popular", popular);
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
        slidesToShow: isSmallDevice ? 2 : 5,
        slidesToScroll: isSmallDevice ? 2 : 5,
        infinite: false,
      };
    
  return (
    <>
    <div className="flex justify-between items-center md:px-5">
          <p className="md:text-2xl text-white my-4 uppercase">
            POPULAR {popularType === "movie" ? "movies" :"tv series"} 
          </p>
          <div className="flex rounded-xl my-4 bg-slate-50  ">
            <button
              className={`m-1 md:p-2 p-1 font-medium rounded-xl ${popularType === "movie" && "bg-gradient-to-r from-yellow-500 via-red-500 to-red-500 text-white "}`}
              onClick={() => setPopularType("movie")}
            >
              Movies
            </button>
            <button
              className={`m-1 md:p-2 p-1 font-medium rounded-xl ${popularType === "tv" && "bg-gradient-to-r from-yellow-500 via-red-500 to-red-500 text-white "}`}
              onClick={() => setPopularType("tv")}
            >
              TV Series
            </button>
          </div>
        </div>
        {loading ? (<LoadingSkeleton/>):(
        <Slider {...settings}>
          {popular?.results?.length>0 && popular?.results?.map((item,i)=>(<div className="!flex !flex-col !items-center !justify-center" key={i}>
            <Card data={item} mediaType={popularType}/>
          </div>))}
        </Slider>)}
    </>
  )
}

export default PopularSlider