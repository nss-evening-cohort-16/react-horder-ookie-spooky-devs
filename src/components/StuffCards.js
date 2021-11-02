import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff, getStuff } from '../api/data/stuffData';

export default function Card({ card, setCards, uid }) {
  const handleDelete = (method) => {
    if (method === 'delete') {
      deleteStuff(card.firebaseKey).then(() => {
        getStuff(uid).then(setCards);
      });
    }
  };

  return (
    <div>
      <div
        className="card stuff-cards"
        style={{ width: '18rem', margin: '.5rem' }}
      >
        <div className="card-body">
          <h3 className="card-title">{card.itemName}</h3>
          <img src={card.itemImage} className="card-img" alt="item" />
          <div className="button-row">
            <Link to={`/edit/${card.firebaseKey}`} className="btn btn-warning">
              Edit
            </Link>
            <Link to={`/stuff/${card.firebaseKey}`} className="btn btn-success">
              Single
            </Link>
            <button
              onClick={() => handleDelete('Delete')}
              className="btn btn-danger fas"
              type="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
  uid: PropTypes.string.isRequired,
};
