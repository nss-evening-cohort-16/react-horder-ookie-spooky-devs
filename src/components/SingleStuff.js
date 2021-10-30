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
      <div className="card" style={{ width: '20rem', margin: '3px' }}>
        <h5 className="card-header">{card.itemName}</h5>
        <div className="card-body">
          <img src={card.itemImage} className="card-img" alt="item" />
          <p className="card-text">{card.itemDescription}</p>
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
    </>
  );
}

SingleStuff.propTypes = {
  card: PropTypes.shape(PropTypes.obj).isRequired,
};
