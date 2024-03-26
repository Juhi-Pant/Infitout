import React from 'react';
import OscillatorChart from '../Charts/Oscillators'; 

function PlaceCard({ selectedIndex }) {
  return (
    <div className="max-w-sm mx-auto my-10"> 
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Summary</h3>
          <button className="float-right text-gray-400 focus:outline-none focus:text-gray-600">
            
          </button>
        </div>
        <div className="w-full relative bottom-8 left-12">
          {/*OscillatorChart component here */}
          <OscillatorChart selectedIndex={selectedIndex} />
        </div>
        <div className='flex justify-center relative bottom-12'>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-red-500 ">
            <div className='bg-red-200 w-fit px-4'>Bearish</div>
            <div className='text-center'>1</div>
          </div>
          <div className="text--500">
            <div className='bg-gray-200 w-fit px-4'>Neutral</div>
            <div className='text-center'>9</div>
          </div>
          <div className="text-blue-500">
            <div className='bg-blue-200 w-fit px-4'>Bullish</div>
            <div className='text-center'>17</div>
          </div>
        </div>
        </div>
        <div className='flex justify-center relative bottom-6'>
        <div className="grid grid-cols-2 gap-20  text-sm">
          {/* Values and labels */}
          <div>
          <div>RSI (5)</div>
          <div>Stoch. (14, 3, 3)</div>
          <div>CCI (20)</div>
          </div>
          <div>
            <div>49.12</div>
            <div>23.11</div>
            <div>53.12</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
