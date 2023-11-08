import { Outlet } from 'react-router-dom';

import { HeaderComponent } from '../modules/HeaderComponent/HeaderComponent';

export const TopLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};
