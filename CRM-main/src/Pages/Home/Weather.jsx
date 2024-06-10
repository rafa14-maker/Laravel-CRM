import React, { useEffect, useState } from 'react';

const WeatherCard = () => {
  const [time, setTime] = useState(new Date());
  const minTemperature = 20;
  const maxTemperature = 35;
  const currentTemperature = Math.floor(Math.random() * (maxTemperature - minTemperature)) + minTemperature;

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date());
    };

    const interval = setInterval(updateTime, 60000);
    updateTime();

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="w-72 h-30 p-4 rounded-lg border-2 border-white shadow-md bg-gradient-to-r from-blue-400 to-blue-700">
        <div className="grid grid-cols-2 gap-2 h-full text-white">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl tracking-widest mb-4">{time.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}</h1>
            <span>{time.toLocaleDateString('en-GB')}</span>
          </div>
          <div className="flex flex-col items-end justify-center text-right">
            <div className="flex items-center justify-end w-full">
              <span className="text-2xl font-bold">{currentTemperature}&deg;</span>
              <div className="w-12 h-12 ml-4 bg-sunny bg-cover"></div>
            </div>
            <span className="mt-4">Belgrade, Serbia</span>
          </div>
        </div>
      </div>
   
  );
};

export default WeatherCard;
