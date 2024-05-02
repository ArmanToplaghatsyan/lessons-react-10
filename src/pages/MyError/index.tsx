import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss'

export const MyError: React.FC = React.memo((): JSX.Element => {


  return (
    <div className="error">
      <h1>Oops!</h1>
      <h3>404 - PAGE NOT FOUND </h3>
      <p>The page are you looking for might have been removed </p>
      <p> had it's name changed or is temporarily unvailable. </p>
      <button>
        <Link to={'/'} >GO TO HOMEPAGE</Link>
      </button>
      <br />
    </div>
  );
});
