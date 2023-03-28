import React, { useState } from 'react';

interface Props {
  card_image: string;
  name: string;
  description: string;
  card_type: string;
  id_hero: string;
  effects: string;
}

const CartInGame: React.FC<Props> = ({ image, name, description, attack, defense, attcrit }) => {
  const [cardImage, setCardImage] = useState<string>(image);

  return (
    <div className="bg-white rounded-md shadow-md p-4 w-72 h-96 flex flex-col items-center">
      <img src={cardImage} alt={name} className="object-cover w-48 h-64 rounded-md mb-4" />

      <div className="flex flex-col items-start">
        <h2 className="text-lg font-semibold mb-2">{name}</h2>

        <p className="text-sm mb-2">{description}</p>

        <div className="flex justify-between w-full mb-2">
          <p className="text-sm text-gray-600">Tipo: {attack}</p>
          <p className="text-sm text-gray-600">ID: {defense}</p>
        </div>

        <div className="flex justify-between w-full">
          <p className="text-sm text-gray-600">Efectos: {attcrit}</p>
        </div>
      </div>
    </div>
  );
};

export default CartInGame;
