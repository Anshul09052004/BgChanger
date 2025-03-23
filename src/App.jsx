
import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("pink");

  return (
    <div className='w-full h-screen duration-1000 bg-black' style={{ backgroundColor: color }}>
      <div className='flex justify-center text-amber-50'>
        <button onClick={() => setColor("red")} className='m-7 bg-red-600 p-2 rounded-2xl'>Red</button>
        <button onClick={() => setColor("blue")} className='m-7 bg-blue-600 p-2 rounded-2xl'>Blue</button>
        <button onClick={() => setColor("green")} className='m-7 bg-green-600 p-2 rounded-2xl'>Green</button>
        <button onClick={() => setColor("orange")} className='m-7 bg-orange-600 p-2 rounded-2xl'>Orange</button>
        <button onClick={() => setColor("lime")} className='m-7 bg-lime-600 p-2 rounded-2xl'>Lime</button>
        <button onClick={() => setColor("yellow")} className='m-7 bg-yellow-600 p-2 rounded-2xl'>Yellow</button>
        <button onClick={() => setColor("pink")} className='m-7 bg-pink-600 p-2 rounded-2xl'>Pink</button>
        <button onClick={() => setColor("purple")} className='m-7 bg-purple-600 p-2 rounded-2xl'>Purple</button>
        <button onClick={() => setColor("skyblue")} className='m-7 bg-sky-600 p-2 rounded-2xl'>Lavender</button>
        <button onClick={() => setColor("white")} className='m-7 bg-white p-2 rounded-2xl text-black'>White</button>
        <button onClick={() => setColor("black")} className='m-7 bg-black p-2 rounded-2xl'>Black</button>
      </div>
    </div>
  );
}

export default App;

