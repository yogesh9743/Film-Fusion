import React from 'react'
import {  FaRegPlayCircle } from 'react-icons/fa';
import useFetch from '../hooks/useFetch'
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const HomeSlider = () => {

  const {data,loading} = useFetch("/trending/all/day")
  console.log("trending this week",data?.results);
const settings ={
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,

}
  
    
      return (
        <div >
          {loading ? (<div className='h-[200px] md:h-[450px] bg-slate-600 rounded-2xl'>
            
          </div>): (<Slider {...settings} className='homeSlider'>
            {data?.results?.map((item)=>(
              <div key={item?.id} className="relative  flex items-center h-[250px] md:h-[450px] w-full ">
                <div className="w-full h-full top-0 left-0 absolute overflow-hidden opacity-50">
                  <img src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`} alt="" className="object-cover w-full h-full object-center rounded-2xl border-white "/>
                </div>
                
                <div className="  relative text-white md:max-w-[800px] h-[250px] md:h-[450px] flex  md:pl-40 p-3">
                  <div className="flex flex-col  gap-2 md:gap-5 items-start justify-center" >
                    <h1 className="md:text-5xl text-2xl  ">{item.title ? item.title : item.name}</h1>
                    <p className="font-medium text-[14px] md:text-[16px] line-clamp-4 md:line-clamp-none">{item.overview}</p>
                    <div className="flex items-center gap-5 my-3">
                      <div>
                        <button className="bg-red-600 p-1 md:p-[10px] md:rounded-xl rounded">
                        <Link to={`/${item?.media_type}/${item?.id}`} className="flex items-center gap-3 md:text-xl  text-sm font-medium text-white">
                          <FaRegPlayCircle className="w-6 md:w-8 h-6 md:h-8" />
                          Watch Now
                        </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>)}
          
          {/* <div className="w-full h-full top-0 left-0 absolute overflow-hidden opacity-50">
          <img src={`https://image.tmdb.org/t/p/original${data?.results[currentIndex].backdrop_path}`} alt="" className="object-cover w-full h-full object-center rounded-2xl border-white "/>
          </div>
          
          <div className="  relative text-white max-w-[800px] h-[450px] flex  ml-40">
          <div className="flex flex-col gap-5 items-start justify-center" >
            <h1 className="text-5xl  ">{data?.results[currentIndex].original_title}</h1>
            <p className="font-medium">{data?.results[currentIndex].overview}</p>
            <div className="flex items-center gap-5 my-3">
              <div>
                <button className="bg-red-600 p-[10px] rounded-xl">
                  <span className="flex items-center gap-3 text-xl font-medium text-white">
                    <FaRegPlayCircle className="w-8 h-8" />
                    Watch Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          </div>
          <div className="flex absolute gap-5  bottom-7 right-10">
        <span onClick={prev} className='cursor-pointer p-4 h-[50px] bg-slate-200 hover:bg-slate-50 text-slate-700 opacity-50 rounded-[50%]'><FaArrowLeft /></span>
        <span onClick={next} className='cursor-pointer p-4 h-[50px] bg-slate-200 hover:bg-slate-50 text-slate-700 opacity-50 rounded-[50%]'><FaArrowRight /></span>
          </div>
          <div className="flex absolute gap-2 bottom-7   right-[50%]">
          {data?.results.map((_, index) => (
            <span
              key={index}
              className={`w-5 h-2  rounded-full  cursor-pointer ${index === currentIndex ? 'bg-red-500' : 'bg-gray-500'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
          </div> */}
        </div>

      );
    };

export default HomeSlider