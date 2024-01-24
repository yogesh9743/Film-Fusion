import React from 'react'

const Comments = ({data}) => {
  return (
    <div className='mt-5'>
        <div className='flex items-center gap-2' >
            <img src="/images/avatar.png" alt="" className='w-[40px] h-[40px] rounded-[50%]'/>
            <p className='font-medium'> {data?.author}</p>
            <p className='text-slate-400 text-[12px] font-medium'>{data?.updated_at}</p>
        </div>
        <div>
            <p className='md:pl-[50px] text-[14px] md:text-[16px]'>
                {data?.content}
            </p>
        </div>
    </div>
  )
}

export default Comments