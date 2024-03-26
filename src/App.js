import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import PlaceCard1 from './PlaceCards/PlaceCard1'
import PlaceCard2 from './PlaceCards/PlaceCard2'
import PlaceCard3 from './PlaceCards/PlaceCard3'
import PlaceCard4 from './PlaceCards/PlaceCard4'

function App() {
  const [selectedIndex1, setSelectedIndex1] = useState(9);
  const [selectedIndex2, setSelectedIndex2] = useState(2);
  const [selectedIndex3, setSelectedIndex3] = useState(11);
  const [selectedIndex4, setSelectedIndex4] = useState(4);
  const handleTimeDurationClick = (barId) => {
     setSelectedIndex1(barId);
     setSelectedIndex2(barId);
     setSelectedIndex3(barId);
     setSelectedIndex4(barId);
  }
  const timeDurations = {
    '1week': 8,
    '2week': 5,
    '1month': 9,
    '3months': 13
  };

  return (
    <>
    <div>
     <Navbar/>
    </div>
    <div>
      <div className='text-3xl ml-6'>NIFTY 50</div>
      <div className='ml-6'>Rs.22004.70</div>
    </div>
    <div>
            {/* Buttons to select time durations */}
        <div className={`lg:relative fixed bottom-0 w-full lg:w-auto bg-gray-100 p-4 z-10 flex justify-center`}>
        <div className="lg:container lg:mx-auto lg:flex lg:justify-center">
          {Object.keys(timeDurations).map((duration) => (
            <button
              key={duration}
              onClick={() => handleTimeDurationClick(timeDurations[duration])}
              className={`px-4 py-2 text-sm ${
                selectedIndex1 === timeDurations[duration] ? 'text-white bg-blue-600' : 'text-gray-700 bg-white'
              } rounded shadow mx-2`}
            >
              {duration}
            </button>
          ))}
        </div>


    </div>
    </div>
    <div className='flex flex-col lg:grid lg:grid-cols-2 gap-4 p-4 bg-gray-100 mb-6'>
      <PlaceCard1 selectedIndex={selectedIndex1}/>
      <PlaceCard2 selectedIndex={selectedIndex2}/>
      <PlaceCard3 selectedIndex={selectedIndex3}/>
      <PlaceCard4 selectedIndex={selectedIndex4}/>
      </div>
    </>
  )
}

export default App
