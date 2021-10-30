import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/StuffCards';
import { getStuff } from '../api/data/stuffData';

export default function Stuff({ uid }) {
  const [cards, setCards] = useState([]);
  console.warn('Stuff View', uid);

  useEffect(() => {
    getStuff(uid).then(setCards);
  }, []);

  return (
    <div className="d-flex flex-wrap">
      {cards.map((card) => (
        <Card
          key={card.firebaseKey}
          card={card}
          setCards={setCards}
          uid={uid}
        />
      ))}
    </div>
  );
}

Stuff.propTypes = {
  uid: PropTypes.string.isRequired,
};
