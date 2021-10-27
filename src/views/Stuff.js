import React, { useEffect, useState } from 'react';
import Card from '../components/StuffCards';
import { getStuff } from '../api/data/stuffData';

export default function Stuff() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getStuff().then(setCards);
  });

  return (
    <div className="d-flex flex-wrap">
      {cards.map((card) => (
        <Card key={card.firebaseKey} card={card} />
      ))}
    </div>
  );
}
