import "./App.css";

import Tag from './Components/Tag';
import Random from './Components/Random'



function App() {


  return (
    <div className="relative flex flex-col items-center w-full h-screen overflow-x-hidden background">

      <h1 className="absolute w-11/12 text-center bg-white rounded-md mt-[40px] ml-[15px] px-10 py-2 text-4xl font-bold mx-auto">RANDOM GIFS</h1>
      <div className="flex flex-col items-center w-full mt-[120px]">
         <Random/>
         <Tag/>



      </div>


    </div>
  );
}

export default App;

