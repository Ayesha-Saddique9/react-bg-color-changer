import React from 'react'
import './App.css';
import { useState } from 'react';


function BgChanger() {
    const [color,setColor] = useState('white');
  return (
    <div className='w-full h-screen  flex items-center justify-center transition-all duration-500' style={{backgroundColor: color}}>
        <div className='flex flex-col justify-center self-center'>
       <h1 className= 'text-4xl font-medium flex justify-center self-center'>🎨 Background Color Changer </h1>
       <div className='flex flex-wrap gap-10 mt-10  justify-center'>
           <button onClick={()=> setColor('#ef4444')} className='w-20 h-10 font-semibold text-black bg-red-500 rounded-lg'>Red</button>
       <button onClick={()=> setColor('#3b82f6')} className='w-20 h-10 font-semibold text-black bg-blue-500 rounded-lg'>Blue</button>
       <button onClick={()=> setColor('#22c55e')} className='w-20 h-10 font-semibold text-black bg-green-500 rounded-lg'>Green</button>
         <button onClick={()=> setColor('#facc15')} className='w-20 h-10 font-semibold text-black bg-yellow-400 rounded-lg'>Yellow</button>
       <button onClick={()=> setColor('#a855f7')} className='w-20 h-10 font-semibold text-black bg-purple-500 rounded-lg'>Purple</button>
       <button onClick={()=> setColor('#f97316')} className='w-20 h-10 font-semibold text-black bg-orange-500 rounded-lg'>Orange</button>
       <button  onClick={()=> setColor('white')} className='w-20 h-10 font-semibold text-black bg-gray-400 rounded-lg'>Reset</button>
       </div>
       </div>
    </div>
  )
}

export default BgChanger;
