import { Route, Routes } from 'react-router-dom';

import { TopLayout } from '@/components/layout/TopLayout';
import { ChartPage } from '@/components/pages/ChartPage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<ChartPage />} />
      </Route>
    </Routes>
  );
};
