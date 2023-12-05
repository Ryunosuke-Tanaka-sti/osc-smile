import { Route, Routes } from 'react-router-dom';

import { TopLayout } from '@/components/layout/TopLayout';
import { ChartPage } from '@/components/pages/ChartPage';
import { TopPage } from '@/components/pages/TopPage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<TopPage />} />
        <Route path="chart" element={<ChartPage />} />
      </Route>
    </Routes>
  );
};
