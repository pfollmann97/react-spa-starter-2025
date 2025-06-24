import {Navigate, Route, Routes as ReactRoutes} from 'react-router-dom';
import {ProtectedRoute} from '@features/auth';

import {ROUTE__DASHBOARD, ROUTE__LOGIN} from '@shared/constants';

import {DashboardPage} from '@/pages/Dashboard';
import ErrorPage404 from '@/pages/Errors/404';
import {LoginPage} from '@/pages/Login';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path={ROUTE__LOGIN} element={<LoginPage />} />

      <Route
        path={ROUTE__DASHBOARD}
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      <Route path="/" element={<Navigate replace to={ROUTE__DASHBOARD} />} />

      <Route path="*" element={<ErrorPage404 />} />
    </ReactRoutes>
  );
};

export default Routes;
