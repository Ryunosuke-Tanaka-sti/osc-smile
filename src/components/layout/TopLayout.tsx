import { Outlet } from 'react-router-dom';

import { ErrorBoundaryComponent } from '@/utilities/ErrorBoundary';
import { SWRConfigComponent } from '@/utilities/SwrConfig';

import { Footer } from '../modules/Footer';
import { Header } from '../modules/Header';

export const TopLayout = () => {
  return (
    <>
      <Header />
      <ErrorBoundaryComponent>
        <SWRConfigComponent>
          <Outlet />
        </SWRConfigComponent>
      </ErrorBoundaryComponent>
      <Footer />
    </>
  );
};
