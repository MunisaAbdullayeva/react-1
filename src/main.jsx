import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Leads from './pages/Leads.jsx';
import Transactions from './pages/Transactions.jsx';
import Analytics from './pages/Analytics.jsx';
import Integration from './pages/Integration.jsx';
import Calendar from './pages/Calendar.jsx';
import Pages from './pages/Pages.jsx';
import Settings from './pages/Settings.jsx';
import Documentation from './pages/Documentation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/Dashboard", element: <Dashboard /> },
      { path: "/Leads", element: <Leads /> },
      { path: "/Transactions", element: <Transactions /> },
      { path: "/Analytics", element: <Analytics /> },
      { path: "/Integration", element: <Integration /> },
      { path: "/Calendar", element: <Calendar /> },
      { path: "/Pages", element: <Pages /> },
      { path: "/Settings", element: <Settings /> },
      { path: "/Documentation", element: <Documentation /> },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
