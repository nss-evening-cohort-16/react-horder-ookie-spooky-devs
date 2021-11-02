import React from 'react';
import styled from 'styled-components';
import { signInUser } from '../api/auth';
import logo from '../assets/logo.jpg';

const SignInStyle = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
`;

export default function SignIn() {
  return (
    <SignInStyle className="text-center mt-5">
      <h1>Welcome! Sign In!</h1>
      <img src={logo} alt="logo" />
      <button type="button" className="btn btn-success" onClick={signInUser}>
        Sign In
      </button>
    </SignInStyle>
  );
}
