import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const Songitem = ({name,image,desc,id}) => {
  const {playWithid}=useContext(PlayerContext)
  return (
    <div  onClick={() => playWithid(id)}  className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'> 
     <img  className='rounded'src={image} alt="" />
     <p className='font-bold mt-2 mb-1 '>{name}</p>
     <p className='text-slate-200 text'>{desc}</p>
    </div>
  )
}

export default Songitem