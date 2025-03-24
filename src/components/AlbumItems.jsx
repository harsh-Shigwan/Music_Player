import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItems = (props) => {
    const nav = useNavigate();
  return (
    <div className=' min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={()=>nav(`/album/${props.id}`)}>
        <img className=' w-full' src={props.image} alt="" />
        <p className='font-bold mt-2 mb-1'>{props.name}</p>

        <p className=' text-slate-200 text-sm '>{props.desc}</p>
        </div>
  )
}

export default AlbumItems