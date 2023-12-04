import { Route, Routes } from 'react-router-dom';

import { TopLayout } from '@/components/layout/TopLayout';
import { TopPage } from '@/components/pages/TopPage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<TopLayout />}>
        <Route index element={<TopPage />} />
      </Route>
    </Routes>
  );
};
