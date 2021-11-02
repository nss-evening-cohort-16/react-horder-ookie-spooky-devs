import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteStuff } from '../api/data/stuffData';

export default function SingleStuff({ card }) {
  const history = useHistory();
  const handleDelete = (method) => {
    if (method === 'delete') {
      deleteStuff(card.firebaseKey).then(() => {
        history.push('/stuff');
      });
    }
  };

  return (
    <>
      <div
        className="card single-stuff-cards"
        style={{ width: '25rem', margin: '3px' }}
      >
        <h3 className="card-header">{card.itemName}</h3>
        <div className="card-body">
          <img src={card.itemImage} className="card-img" alt="item" />
          <hr />
          <p className="card-text">{card.itemDescription}</p>
          <div className="button-row">
            <button
              onClick={() => handleDelete('delete')}
              className="btn btn-danger"
              type="button"
            >
              Delete
            </button>
            <Link to={`/edit/${card.firebaseKey}`} className="btn btn-warning">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

SingleStuff.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
