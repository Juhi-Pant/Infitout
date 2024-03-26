import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center space-x-4">

          <span className="text-xl font-bold text-blue-600">INFITOUT</span>

          <span className="text-lg text-gray-600">Streak</span>
        </div>
        

        <div>
          <span className="text-sm text-gray-500">Powered by</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

