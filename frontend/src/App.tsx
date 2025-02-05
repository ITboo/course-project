import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrpcProvider } from './lib/trpc';
import { getAllTemplatesRoute, getTemplateRoute, viewTemplateRouteParams } from './lib/routes';
import MainLayout from './app/layouts/mainLayout';
import NotFoundPage from './pages/NotFound';
import TemplatePage from './pages/TemplatePage';
import MainPage from './pages/MainPage';

import { useContext, useEffect } from 'react';
import { ThemeContext } from './app/context/ThemeContext';
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
          <Route path={getAllTemplatesRoute()} element={<MainPage />} />
          <Route path={getTemplateRoute(viewTemplateRouteParams)} element={<TemplatePage />} />
          </Route>
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
