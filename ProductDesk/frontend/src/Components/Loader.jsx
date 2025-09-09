import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-100 bg-white dark:bg-[#1D232A] w-full">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-16 bg-blue-500 rounded-full animate-loader-bar" style={{ animationDelay: '-0.32s' }}></div>
          <div className="w-4 h-16 bg-blue-500 rounded-full animate-loader-bar" style={{ animationDelay: '-0.16s' }}></div>
          <div className="w-4 h-16 bg-blue-500 rounded-full animate-loader-bar"></div>
        </div>
        <p className="mt-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
          Fetching data...
        </p>
      </div>

      <style>
        {`
          @keyframes loader-bar-animation {
            0%, 40%, 100% {
              transform: scaleY(0.4);
            }
            20% {
              transform: scaleY(1.0);
            }
          }
          .animate-loader-bar {
            animation: loader-bar-animation 1.2s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  );
};


export default Loader;