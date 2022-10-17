import React from 'react'

const Card = ({speed,title}) => {
  return (
    <div className='w-[40%] px-[5px] py-[10px] bg-blur !rounded-sm text-center'>
                        <p className='uppercase font-bold text-[15px] py-[3px]'>{speed}</p>
                        <p className='uppercase text-[12px]'>{title}</p>
    </div>
  )
}

export default Card