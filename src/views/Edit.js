import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react/cjs/react.development';
import NewStuffForm from '../components/NewStuffForm';
import { getSingleStuff } from '../api/data/stuffData';

export default function Edit({ uid }) {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleStuff(key).then(setEditItem);
  }, []);

  return (
    <>
      <h1>Edit Stuff for {editItem.itemName}</h1>
      <NewStuffForm obj={editItem} uid={uid} />
    </>
  );
}

Edit.propTypes = {
  uid: PropTypes.string,
};

Edit.defaultProps = {
  uid: '',
};
