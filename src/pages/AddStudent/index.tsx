import React from 'react';
import './style.scss';

export const AddStudent: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="addstudent">
      <h2>Add Student</h2>
    </div>
  );
});
