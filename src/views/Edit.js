import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import NewStuffForm from '../components/NewStuffForm';
import { getSingleStuff } from '../api/data/stuffData';

export default function Edit() {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleStuff(key).then(setEditItem);
  }, []);

  return (
    <>
      <h1>Edit Stuff</h1>
      <NewStuffForm obj={editItem} />
    </>
  );
}