// import React from 'react';
// import PropTypes from 'prop-types';

// export default function Home({ uid }) {
//   console.warn('home', uid);
//   return (
//     // Add favorites stuff to home page
//     <div>
//       <h1>My Favorite Items</h1>
//     </div>
//   );
// }

// Home.propTypes = {
//   uid: PropTypes.string.isRequired,
// };

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/StuffCards';
import { getFavoriteStuff } from '../api/data/stuffData';

export default function Home({ uid }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getFavoriteStuff(uid).then(setCards);
  }, []);

  return (
    <div className="homePage">
      <h1>My Favorite Items</h1>
      <div className="d-flex flex-wrap home-cards">
        {cards.map((card) => (
          <Card
            key={card.firebaseKey}
            card={card}
            setCards={setCards}
            uid={uid}
          />
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
};
