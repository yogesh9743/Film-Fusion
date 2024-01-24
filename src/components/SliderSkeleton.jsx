import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='flex justify-between'>
            <div className='md:block hidden w-[200px]  h-[300px]  bg-slate-600 rounded-2xl'></div>
            <div className='md:block hidden w-[200px]  h-[300px]  bg-slate-600 rounded-2xl'></div>
            <div className='md:block hidden w-[200px]  h-[300px]  bg-slate-600 rounded-2xl'></div>
            <div className='md:block w-[150px] h-[200px] md:w-[200px]  md:h-[300px]  bg-slate-600 rounded-2xl'></div>
            <div className='md:block w-[150px] h-[200px] md:w-[200px]  md:h-[300px]  bg-slate-600 rounded-2xl'></div>
    </div>
  )
}

export default LoadingSkeleton