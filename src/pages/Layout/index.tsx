import React from 'react';
import './style.scss'
import { Menu } from '../../component/Menu';
import { Outlet } from 'react-router-dom';

export const Layout: React.FC = React.memo((): JSX.Element => {
  return (
    <div className="layout">
      <Menu/>
      <Outlet/>
    </div>
  );
});
