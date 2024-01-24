import React, { useEffect, useState } from 'react'
import Card from './Card'
import Slider from 'react-slick';
import useFetch from '../hooks/useFetch';
import LoadingSkeleton from './SliderSkeleton';

const TopRatedSlider = () => {
    const [topRatedType, setTopRatedType] = useState("movie");
    const {data:topRated, loading} = useFetch(`/${topRatedType}/top_rated`)
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
      slidesToShow: isSmallDevice ? 2 : 5,
      slidesToScroll: isSmallDevice ? 2 : 5,
      
      infinite: false,
    };
    
  return (
    <>
    <div className="flex justify-between items-center md:px-5">
          <p className="md:text-2xl text-white my-4 uppercase">
            Top rated {topRatedType === "movie" ? "movies" :"tv series" }
          </p>
          <div className="flex rounded-xl my-4 bg-slate-50  ">
            <button
              className={`m-1 md:p-2 p-1 font-medium rounded-xl ${topRatedType === "movie" && "bg-gradient-to-r from-yellow-500 via-red-500 to-red-500 text-white "}`}
              onClick={() => setTopRatedType("movie")}
            >
              Movies
            </button>
            <button
              className={`m-1 md:p-2 p-1 font-medium rounded-xl ${topRatedType === "tv" && "bg-gradient-to-r from-yellow-500 via-red-500 to-red-500 text-white "}`}
              onClick={() => setTopRatedType("tv")}
            >
              TV Series
            </button>
          </div>
        </div>
        {loading ? (<LoadingSkeleton/>):(
        <Slider {...settings}>
          {topRated?.results?.map((item,i)=>(<div className="!flex !flex-col !items-center !justify-center" key={i}>
            <Card data={item} mediaType={topRatedType}/>
          </div>))}
        </Slider>)}
    </>
  )
}

export default TopRatedSlider