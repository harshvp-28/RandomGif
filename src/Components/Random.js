import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
 const Random = () => {
  const {gif,loading,fetchData} = Usegif();
  function clickHandler() {
    fetchData();
  }
  return (
    
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl font-bold underline mt-[15px]'>A RANDOM GIF</h1>
      {
        loading ? (<Spinner></Spinner>) : (<img src={gif}></img>)
      }

      
      <button onClick={clickHandler} className='mb-[20px] py-2 text-lg bg-green-100 rounded-lg  w-10/12'>Generate</button>
    </div>
  )
}
export default Random
