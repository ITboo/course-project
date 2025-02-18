import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TrpcProvider } from './app/lib/trpc';
import * as routes from './app/lib/routes';

import { ThemeContext } from './app/context/ThemeContext';
import MainLayout from './app/layouts/mainLayout';
import NotFoundPage from './pages/NotFound';
import TemplatePage from './pages/TemplatePage';
import MainPage from './pages/MainPage';
import BlankForm from './pages/BlankForm';
import FormBuilder from './pages/BlankForm/FormBuilder';
import { NewIdeaPage } from './pages/AddTest';
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
          <Route path="/test" element={<FormBuilder />} />
          <Route path="/add" element={<NewIdeaPage />} />
          <Route path={routes.getCreateFormRoute()} element={<BlankForm />} />
          <Route path={routes.getFormRoute(routes.viewFormRouteParams)} element={<TemplatePage />} />
          </Route>          
          <Route path={routes.getNotFoundRoute()} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
