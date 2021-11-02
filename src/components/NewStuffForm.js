import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { createStuff, updateStuff } from '../api/data/stuffData';

const initialState = {
  itemName: '',
  itemImage: '',
  itemDescription: '',
  uid: '',
  favoriteItem: false,
};

export default function NewStuffForm({ obj, uid }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput(obj);
    } else {
      setFormInput(initialState);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormInput(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (obj.firebaseKey) {
      updateStuff(obj.firebaseKey, formInput).then(() => {
        resetForm();
        history.push('/stuff');
      });
    } else {
      createStuff({ ...formInput, uid }).then(() => {
        resetForm();
        history.push('/stuff');
      });
    }
  };

  return (
    <>
      <div
        className="card text-center"
        style={{
          background: 'white',
          width: '60rem',
          justifyContent: 'center',
          border: '2px solid black',
        }}
      >
        <h2 className="card-header" style={{ border: '2px solid black' }}>
          New Stuff
        </h2>
        <div
          className="card-body"
          style={{ justifyContent: 'space-between', border: '2px solid black' }}
        >
          <h5 className="card-title">Enter some new stuff</h5>
          <form onSubmit={handleSubmit}>
            <input
              style={{
                border: '2px solid black',
                height: '2.5rem',
                width: '30rem',
              }}
              id="itemName"
              name="itemName"
              value={formInput.itemName}
              onChange={handleChange}
              required
              placeholder="Item Name"
            />
            <p />
            <input
              style={{
                border: '2px solid black',
                height: '2.5rem',
                width: '30rem',
              }}
              id="itemImage"
              name="itemImage"
              value={formInput.itemImage}
              onChange={handleChange}
              required
              placeholder="Item Image"
            />
            <p />
            <input
              style={{
                border: '2px solid black',
                height: '2.5rem',
                width: '30rem',
              }}
              id="itemDescription"
              name="itemDescription"
              value={formInput.itemDescription}
              onChange={handleChange}
              required
              placeholder="Item Description"
            />
            <div className="form-check">
              <label className="form-check-label" htmlFor="favoriteItem">
                <input type="checkbox" className="form-check-input" id="favoriteItem" />
                Is this a favorite Item?
              </label>
            </div>
            <p />
            <button
              type="submit"
              className="btn btn-info"
              style={{
                border: '2px solid black',
                height: '2.5rem',
                marginTop: '3px',
              }}
            >
              {obj.firebaseKey ? 'Edit' : 'Create'}
            </button>
          </form>
        </div>
        <div
          className="card-footer text-muted"
          style={{ border: '2px solid black' }}
        >
          Enjoy your stuff
        </div>
      </div>
    </>
  );
}

NewStuffForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
  uid: PropTypes.string.isRequired,
};

NewStuffForm.defaultProps = {
  obj: {},
};
