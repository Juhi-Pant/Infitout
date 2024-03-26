import React from 'react';
import SummaryChart from '../Charts/Summary'; 

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
          {/*SummaryChart component here */}
          <SummaryChart selectedIndex={selectedIndex} />
        </div>
        <div className='flex justify-center relative bottom-12'>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-red-500 ">
            <div className='bg-red-200 w-fit px-4'>Bearish</div>
            <div className='text-center'>1</div>
          </div>
          <div className="text-gray-500">
            <div className='bg-gray-200 w-fit px-4'>Neutral</div>
            <div className='text-center'>9</div>
          </div>
          <div className="text-green-500">
            <div className='bg-green-200 w-fit px-4'>Bullish</div>
            <div className='text-center'>17</div>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {/* Values and labels */}
          <div className="text-center">
            <div>22046.88</div>
            <div className='text-gray-400'>EMA (20)</div>
          </div>
          <div className="text-center">
            <div>22047.41</div>
            <div className='text-gray-400'>SMA(20)</div>
          </div>
          <div className="text-center">
            <div>53.72</div>
            <div className='text-gray-400'>RSI(14)</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div>9.18</div>
            <div className='text-gray-400'>Awesome Osc.</div>
          </div>
          <div className="text-center">
            <div>0.20</div>
            <div className='text-gray-400'>Macd (12, 26, 9)</div>
          </div>
          <div className="text-center">
            <div>73.72</div>
            <div className='text-gray-400'>CCI (20)</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
