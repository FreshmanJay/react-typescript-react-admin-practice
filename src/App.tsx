// src/App.tsx
import React from 'react';
import { Route } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Admin, CustomRoutes, Layout, Menu, MenuProps, LayoutProps } from 'react-admin';

import mockDataProvider from './providers/mockDataProvider';

import { Dashboard } from './components/Dashboard';
import { TablePage } from './components/TablePage';

// ✅ 注意：MenuProps 来自 react-admin
const MyMenu: React.FC<MenuProps> = () => (
  <Menu>
    <Menu.Item to="/dashboard" primaryText="仪表盘" leftIcon={<BarChartIcon />}/>
    <Menu.Item to="/tablePage" primaryText="表格页" leftIcon={<BarChartIcon />}/>
  </Menu>
);

export const MyLayout: React.FC<LayoutProps> = ({ children, ...rest }) => (
  <Layout {...rest} menu={MyMenu}>
    {children}
  </Layout>
);

const App: React.FC = () => (
  <Admin layout={MyLayout} dataProvider={mockDataProvider}>
    <CustomRoutes>
      <Route path="/dashboard" element={<Dashboard />} />
    </CustomRoutes>

    <CustomRoutes>
      <Route path="/tablePage" element={<TablePage />} />
    </CustomRoutes>
  </Admin>
);

export default App;