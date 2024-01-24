import React, { useState } from 'react'
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import LoadingSkeleton from '../components/SliderSkeleton';

const Show = () => {
  const [filter, setFilter]= useState("Action")
  const {data:topRated} = useFetch(`/tv/top_rated`)
  const {data:popular,loading} = useFetch(`/tv/popular`)
  console.log("popular:", popular);

  return (
    <div className='px-5 md:px-20 md:pb-10  pb-5'>
      <div className='mt-5'>
        <div className='flex flex-wrap gap-1'>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${filter === "Action" && "bg-white !text-black"}`} onClick={()=>setFilter("Action")}>Action</span>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${filter === "Drama" && "bg-white !text-black"}`} onClick={()=>setFilter("Drama")}>Drama</span>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${filter === "Adventure" && "bg-white !text-black"}`} onClick={()=>setFilter("Adventure")}>Adventure</span>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${filter === "Romance" && "bg-white !text-black"}`} onClick={()=>setFilter("Romance")}>Romance</span>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${filter === "Thrillar" && "bg-white !text-black"}`} onClick={()=>setFilter("Thrillar")}>Thrillar</span>
        </div>
      </div>
      <div>
       
      </div>
      {loading ? (<div className="my-[50px]"><LoadingSkeleton/></div>):(<>
      <div className="md:mt-9 mt-5 ">
      <p className="md:text-2xl text-white my-4 uppercase">
            Popular TV Shows
          </p>
        
          <div className='flex flex-wrap justify-between gap-10'>

      {popular?.results?.length>0 && popular?.results?.map((item)=>(
            <Card data={item} mediaType="tv"/>
          ))}</div>
      </div>
      <div className="mt-9 ">
      <p className="md:text-2xl text-white my-4 uppercase">
            Top rated TV Shows
          </p>
        
          <div className='flex flex-wrap justify-between gap-10'>

      {topRated?.results?.length>0 && topRated?.results?.map((item)=>(
            <Card data={item} mediaType="tv"/>
          ))}</div>
      </div></>)}
    </div>
  )
}

export default Show