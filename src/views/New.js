import React from 'react';
import PropTypes from 'prop-types';
import NewStuffForm from '../components/NewStuffForm';

export default function New({ uid }) {
  return (
    <div>
      <NewStuffForm uid={uid} />
    </div>
  );
}

New.propTypes = {
  uid: PropTypes.string.isRequired,
};
