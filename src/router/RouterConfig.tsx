import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { TopLayout } from '@/components/layout/TopLayout';
import { ChartPage } from '@/components/pages/ChartPage';
import { TopPage } from '@/components/pages/TopPage';

export const RouterConfig = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    console.debug(pathname);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<TopPage />} />
        <Route path="chart" element={<ChartPage />} />
      </Route>
    </Routes>
  );
};
