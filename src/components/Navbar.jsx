import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { Link,  useNavigate } from 'react-router-dom';


const Navbar = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate()
  return (
    <div className='bg-slate-900 py-3 flex items-center justify-between md:px-20 px-5'>
        <div className='flex items-center gap-2 '>
            <img className='h-[40px] w-[40px]'  src="https://cdn-icons-png.flaticon.com/512/3304/3304517.png" alt="" />
            <Link to='/' className='text-xl text-white'>Film Fusion</Link >
        </div>
        <div className='text-white md:flex md:items-center md:gap-10 hidden '>
            <Link to="/" className='uppercase hover:bg-red-600 px-2 py-1 rounded-lg font-medium transition-all focus:bg-red-600'>Home</Link >
            <Link to="/movies" className='uppercase hover:bg-red-600 px-2 py-1 rounded-lg font-medium transition-all focus:bg-red-600'>movies</Link >
            <Link to="/shows" className='uppercase hover:bg-red-600 px-2 py-1 rounded-lg font-medium transition-all focus:bg-red-600'>tv shows</Link >
        </div>
        <div className='flex items-center gap-2'> 
            <input type="text" className='hidden md:block p-2 rounded-lg text-white bg-slate-700 w-[300px]' 
              name='query'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Enter Movie or Tv series name'
            />
        <FaSearch className='text-xl cursor-pointer text-white' onClick={()=>navigate(`/search/${query}`)}/>
            <IoIosMenu className='text-3xl cursor-pointer text-white md:hidden ' onClick={()=>alert("hello")} />
        </div>
        
    </div>
  )
}

export default Navbar