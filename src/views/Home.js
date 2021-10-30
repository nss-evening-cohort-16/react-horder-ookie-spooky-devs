import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ uid }) {
  console.warn('home', uid);
  return (
    // Add favorites stuff to home page
    <div>
      <h1>Home</h1>
    </div>
  );
}

Home.propTypes = {
  uid: PropTypes.string.isRequired,
};
