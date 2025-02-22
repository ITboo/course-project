import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TrpcProvider } from './app/lib/trpc';
import * as routes from './app/lib/routes';

import { ThemeContext } from './app/context/ThemeContext';
import MainLayout from './app/layouts/mainLayout';
import NotFoundPage from './pages/NotFound';
import FormPage from './pages/FormPage';
import MainPage from './pages/MainPage';
import PrivateRoute from './app/privateRoute';
import CreateForm from './pages/CreateForm';
import Forms from './pages/Forms';

import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-theme' : 'dark-theme';
  }, [theme]);

  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
          <Route path={routes.getAllFormsRoute()} element={<MainPage />} />
          <Route path={routes.getFormsRoute()} element={<Forms />} />
          <Route path={routes.getCreateFormRoute()} element={<PrivateRoute><CreateForm /></PrivateRoute>} />
          <Route path={routes.getFormRoute(routes.viewFormRouteParams)} element={<FormPage />} />
          </Route>          
          <Route path={routes.getNotFoundRoute()} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
