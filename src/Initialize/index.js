import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SignIn from '../views/SignIn';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          uid: authed.photoURL,
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);

      }
    });
  }, []);

  return (
    <div>
      {user ? (
        <h1>You are signed in</h1>
      ) : (
        <SignIn />
      )}
    </div>  
  );
}

export default Initialize;
