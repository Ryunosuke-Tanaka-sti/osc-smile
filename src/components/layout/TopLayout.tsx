import { Outlet } from 'react-router-dom';

import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

import { HeaderComponent } from '../modules/HeaderComponent/HeaderComponent';

export const TopLayout = () => {
  return (
    <>
      <HeaderComponent />
      <ErrorBoundaryComponent>
        <SWRConfigComponent>
          <Outlet />
        </SWRConfigComponent>
      </ErrorBoundaryComponent>
    </>
  );
};
