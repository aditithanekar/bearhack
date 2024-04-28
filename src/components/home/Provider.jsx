import React from 'react';
import texts from '@/data/Providers';

const Provider = ({ title }) => {
  return (
    <div className="flex flex-col">
      {texts.map((title, index) => (
          <button 
            key={index} 
            className="text-black text-center text-4xl font-serif border-black border-4 rounded-3xl bg-white p-2"
          >
            {title}
          </button>
      ))}
    </div>
  );
};

export default Provider;
