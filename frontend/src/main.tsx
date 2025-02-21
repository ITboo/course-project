import { createRoot } from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from './app/context/ThemeContext.tsx';
import { HelmetProvider } from 'react-helmet-async';
import FallbackComponent from './components/ui/fallback.tsx';
import App from './App.tsx';
import './app/utils/i18n';
import './index.css';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key');
}

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <ErrorBoundary fallback={<FallbackComponent />}>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ClerkProvider>
    </ErrorBoundary>
  </HelmetProvider>
);
