import React from 'react';
import './style.scss'

export const MyError: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="myerror">
      <h2>My Error </h2>
    </div>
  );
});
