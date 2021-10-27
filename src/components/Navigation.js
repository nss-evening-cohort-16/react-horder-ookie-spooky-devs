import React from 'react';
import { useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { signOutUser } from '../api/auth';

export default function Navigation() {
  const history = useHistory();
  return (
    <div className="container d-flex justify-content-center py-3">
      <button
        type="button"
        onClick={() => history.push('/')}
        // onClick={() => history.push('/new')}
        className="btn btn-light border border-dark"
      >
        Home
      </button>
      <button
        type="button"
        onClick={() => history.push('/new')}
        // onClick={() => history.push('/stuff')}
        className="btn btn-light border border-dark"
      >
        New
      </button>
      <button
        type="button"
        onClick={() => history.push('/stuff')}
        // onClick={() => history.push('/stuff')}
        className="btn btn-light border border-dark"
      >
        Stuff
      </button>
      <button
        onClick={signOutUser}
        type="button"
        className="btn btn-danger border border-dark"
      >
        Log Out
      </button>
    </div>
  );
}
