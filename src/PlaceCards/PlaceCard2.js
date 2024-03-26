import React from 'react';
import SupportChart from '../Charts/Support'; 

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
          {/*SupportChart component here */}
          <SupportChart selectedIndex={selectedIndex} />
        </div>
        <div className=' flex justfiy-center relative bottom-24'>
          <div className='flex space-x-10 mx-auto'>
            <div className='grid grid-cols-3 gap-2'>
                <div>S3</div>
                <div>S2</div>
                <div>S1</div>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <div>S3</div>
                <div>S2</div>
                <div>S1</div>   
            </div>
          </div>
        </div>
        <div className='relative bottom-10'>
        <div className="grid grid-cols-3 gap-4 text-sm">
          {/* Values and labels */}
          <div className="text-center">
            <div>21576.11</div>
            <div className='text-gray-400'>S1</div>
          </div>
          <div className="text-center">
            <div>22047.41</div>
            <div className='text-gray-400'>S2</div>
          </div>
          <div className="text-center">
            <div>5311.72</div>
            <div className='text-gray-400'>S3</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div>9123.18</div>
            <div className='text-gray-400'>R1</div>
          </div>
          <div className="text-center">
            <div>4210.20</div>
            <div className='text-gray-400'>R2</div>
          </div>
          <div className="text-center">
            <div>7311.72</div>
            <div className='text-gray-400'>R3</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
