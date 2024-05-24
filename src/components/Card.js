import React from 'react';

const Card = ({ image, title, text }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img src={image} alt={title} className="w-full h-auto" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-base">{text}</p>
      </div>
    </div>
  );
};

export default Card;
