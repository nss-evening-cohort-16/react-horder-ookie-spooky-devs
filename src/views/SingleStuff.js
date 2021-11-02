import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react/cjs/react.development';
import SingleStuff from '../components/SingleStuff';
import { getSingleStuff } from '../api/data/stuffData';

export default function SingleStuffView() {
  const [editItem, setEditItem] = useState({});
  const { key } = useParams();

  useEffect(() => {
    getSingleStuff(key).then(setEditItem);
  }, []);

  return (
    <>
      <div className="single-stuff-page">
        <h1>{editItem.itemName}</h1>
        <div className="single-view-body">
          <SingleStuff card={editItem} />
        </div>
      </div>
    </>
  );
}
