import React from 'react';
import './style.scss'
import { NavLink } from 'react-router-dom';

export const Menu: React.FC = React.memo((): JSX.Element => {
  return (
    <div className='menu'>
      <nav>
        <ul>
          <li><NavLink to={'/'}>Groups</NavLink></li>
          <li><NavLink to={'/addGroup'}>Add Group</NavLink></li>
          <li><NavLink to={'/students'}>Students</NavLink></li>
          <li><NavLink to={'addstudents'}>Add Student</NavLink></li>
          <li><NavLink to={'/teachers'}>Teachers</NavLink></li>
          <li><NavLink to={'/addteacher'}>Add Teacher</NavLink></li>
        </ul>
      </nav>
    </div>
  );
});
