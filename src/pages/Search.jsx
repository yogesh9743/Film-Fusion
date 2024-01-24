import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import Card from '../components/Card';
import LoadingSkeleton from '../components/SliderSkeleton';

const Search = () => {
  const {query} = useParams();
  const [media_type, setMedia_type] = useState("movie")
  const {data:searchResult, loading} = useFetch(`/search/${media_type}?query=${query}`)
  console.log("searchResult", searchResult);
  return (
    <div className='px-5 md:px-20 md:pb-10 pb-5'>
      <div className='my-5'>
        <div className='flex flex-wrap gap-3'>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${media_type === "movie" && "bg-white !text-black"}`} onClick={()=>setMedia_type("movie")}>Movies</span>
          <span className={`md:px-3 px-1 py-1 md:mx-2 text-white md:border-2 border text-sm  rounded-xl cursor-pointer ${media_type === "tv" && "bg-white !text-black"}`} onClick={()=>setMedia_type("tv")}>TV Series</span>
       
        </div>
      </div>
      {loading ? <LoadingSkeleton/>:(<div className='flex  justify-between flex-wrap gap-10'>
           
          {searchResult?.results?.length>0 ?<>
              {searchResult?.results?.map((item,i)=><Card data={item} key={i} mediaType={media_type}/>)} </>:<p className='text-3xl text-white'>No results available for your search</p>
          }
           
        </div>)}
        
    </div>
  )
}

export default Search