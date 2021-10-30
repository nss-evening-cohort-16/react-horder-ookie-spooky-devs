import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { getSingleStuff, updateStuff } from '../api/data/stuffData';

const initialState = {
  itemName: '',
  itemImage: '',
  itemDescription: '',
  uid: '',
  favoriteItem: false,
};

export default function EditStuffForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [setEditItem] = useState({});
  const history = useHistory();
  const { key } = useParams();

  useEffect(() => {
    if (obj.firebaseKey) {
      getSingleStuff(key).then(setEditItem);
    }
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateStuff(obj.firebaseKey, formInput).then(() => {
      history.push('/stuff');
    });
  };

  return (
    <>
      {/* <h1>Update Your Stuff</h1> */}
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

EditStuffForm.propTypes = {
  obj: PropTypes.shape(PropTypes.obj),
};

EditStuffForm.defaultProps = {
  obj: {},
};
