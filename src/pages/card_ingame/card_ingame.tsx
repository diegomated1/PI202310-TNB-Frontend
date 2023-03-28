import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

interface Props {
  id: number;
}

interface CardData {
  card_image: string;
  name: string;
  description: string;
  card_type: string;
  id_hero: string;
  effects: string;
}

const CartInGame: React.FC<Props> = ({ id }) => {
  const [cardData, setCardData] = useState<CardData>({
    card_image: '',
    name: '',
    description: '',
    card_type: '',
    id_hero: '',
    effects: '',
  });

  const socket = io('#');

  useEffect(() => {
    socket.emit('get_card_data', { id });

    // Recibe los datos de la carta del servidor socket y actualiza el estado del componente :3
    socket.on('card_data', (data: CardData) => {
      setCardData(data);
    });

    return () => {
      socket.off('card_data');
      socket.disconnect();
    };
  }, [id, socket]);

  return (
    // Renderiza el componente de la misma manera que en la respuesta anterior :D
  );
};

export default CartInGame;
