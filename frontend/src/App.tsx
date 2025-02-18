import { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { TrpcProvider } from './app/lib/trpc';
import { getAllFormsRoute, getBlankFormRoute, getFormRoute, getFormsRoute, viewFormRouteParams } from './app/lib/routes';

import { ThemeContext } from './app/context/ThemeContext';
import MainLayout from './app/layouts/mainLayout';
import NotFoundPage from './pages/NotFound';
import TemplatePage from './pages/TemplatePage';
import MainPage from './pages/MainPage';
import BlankForm from './pages/BlankForm';
import FormBuilder from './pages/BlankForm/FormBuilder';
import { NewIdeaPage } from './pages/AddTest';

import './App.css';
import Forms from './pages/Forms';

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
          <Route path={getAllFormsRoute()} element={<MainPage />} />
          <Route path={getFormsRoute()} element={<Forms />} />
          <Route path="/test" element={<FormBuilder />} />
          <Route path="/add" element={<NewIdeaPage />} />
          <Route path={getBlankFormRoute()} element={<BlankForm />} />
          <Route path={getFormRoute(viewFormRouteParams)} element={<TemplatePage />} />
          </Route>          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  );
}

export default App;
