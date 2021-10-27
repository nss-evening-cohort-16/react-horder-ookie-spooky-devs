import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { createStuff } from '../api/data/stuffData';

const initialState = {
  itemName: '',
  itemImage: '',
  itemDescription: '',
  uid: '',
  favoriteItem: false,
};

export default function NewStuffForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        itemName: obj.itemName,
        itemImage: obj.itemImage,
        itemDescription: obj.itemDescription,
        uid: obj.uid,
        favoriteItem: obj.favoriteItem,
        firebaseKey: obj.firebaseKey,
      });
    }
  }, [obj]);

  const resetForm = () => {
    setFormInput({ ...initialState });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj) {
      createStuff({ ...formInput }).then(() => {
        resetForm();
        history.push('/stuff');
      });
    }
  };

  return (
    <>
      <h1>Create Stuffs</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="itemName"
          name="itemName"
          value={formInput.itemName}
          onChange={handleChange}
          required
          placeholder="Item Name"
        />
        <input
          id="itemImage"
          name="itemImage"
          value={formInput.itemImage}
          onChange={handleChange}
          required
          placeholder="Item Image"
        />
        <input
          id="itemDescription"
          name="itemDescription"
          value={formInput.itemDescription}
          onChange={handleChange}
          required
          placeholder="Item Description"
        />
        <button type="submit" className="btn btn-success">
          Create
        </button>
      </form>
    </>
  );
}

NewStuffForm.propTypes = {
  obj: PropTypes.shape({
    itemName: PropTypes.string,
    itemImage: PropTypes.string,
    itemDescription: PropTypes.string,
    uid: PropTypes.string,
    favoriteItem: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

NewStuffForm.defaultProps = { obj: {} };
