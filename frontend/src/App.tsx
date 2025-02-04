import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TrpcProvider } from './lib/trpc';
import { getAllTemplatesRoute, getTemplateRoute, viewTemplateRouteParams } from './lib/routes';
import MainLayout from './app/layouts/mainLayout';
import NotFoundPage from './pages/NotFound';
import TemplatePage from './pages/TemplatePage';
import MainPage from './pages/MainPage';
import './App.css';

function App() {
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
