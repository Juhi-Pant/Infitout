import React from 'react';
import AverageChart from '../Charts/Averages';

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
          {/*AverageChart component here */}
          <AverageChart selectedIndex={selectedIndex} />
        </div>
        <div className='flex justify-center relative bottom-12'>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-orange-500 ">
            <div className='bg-orange-200 w-fit px-4'>Bearish</div>
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
        <div className='flex justify-center items-center relative bottom-6'>
        <div className="grid grid-cols-2 gap-36 text-sm">
          {/* Values and labels */}
          <div>
          <div>EMA (5)</div>
          <div>SMA (5)</div>
          <div>EMA (10)</div>
          </div>
          <div>
            <div>22021.12</div>
            <div>25221.11</div>
            <div>22021.12</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
