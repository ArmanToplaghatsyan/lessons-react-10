import React from 'react';
import './style.scss';

export const Students: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="students">
      <h2>Students</h2>
    </div>
  );
});
