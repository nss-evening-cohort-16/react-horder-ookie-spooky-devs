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

export default function NewStuffForm({ obj }) {
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
      createStuff(formInput).then(() => {
        resetForm();
        history.push('/stuff');
      });
    }
  };

  return (
    <>
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
          {obj.firebaseKey ? 'Edit' : 'Create'}
        </button>
      </form>
    </>
  );
}

NewStuffForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

NewStuffForm.defaultProps = {
  obj: {},
};
