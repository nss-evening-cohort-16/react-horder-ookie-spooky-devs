import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';

export default function Card({ card, setCards }) {
  const handleDelete = (method) => {
    if (method === 'delete') {
      deleteStuff(card.firebaseKey).then(setCards);
    }
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem', margin: '3px' }}>
        <div className="card-body">
          <h3 className="card-title">{card.itemName}</h3>
          <img src={card.itemImage} className="card-img" alt="item" />
          <Link to={`/edit/${card.firebaseKey}`} className="btn btn-warning">
            Edit
          </Link>
          <Link to={`/stuff/${card.firebaseKey}`} className="btn btn-success">
            Single
          </Link>
          <button
            onClick={() => handleDelete('delete')}
            className="btn btn-danger"
            type="button"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
  setCards: PropTypes.func.isRequired,
};
