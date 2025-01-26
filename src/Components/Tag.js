import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import Usegif from '../hooks/Usegif';
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
 const Tag = () => {
  // const [gif,setGif] = useState('');
  // const[loading,setLoading] = useState(false);
  const[tag,setTag] = useState('');
  // async function fetchData() {
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imgSrc = data.data.images.downsized_large.url;
  //   setGif(imgSrc);
  //   setLoading(false);
  // }
  // useEffect(()=>{
  //   fetchData();
  // },[])
  const {gif,loading,fetchData} = Usegif(tag);
  function clickHandler() {
    fetchData();
  }
  function changeHandler(event) {
    setTag(event.target.value)
  }
  return (
    
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl font-bold underline mt-[15px] uppercase'>RANDOM {tag} GIF</h1>
      {
        loading ? (<Spinner></Spinner>) : (<img src={gif}></img>)
      }
      <input className='w-10/12 mb-[2px] py-2 text-lg rounded-lg text-center' onChange={changeHandler} value={tag}>
      </input>
      
      <button onClick={clickHandler} className='mb-[20px] py-2 text-lg bg-green-100 rounded-lg  w-10/12'>Generate</button>
    </div>
  )
}
export default Tag
