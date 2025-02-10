import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ErrorBoundary } from 'react-error-boundary';

import App from './App.tsx';
import FallbackComponent from './components/ui/fallback.tsx';
import './index.css';
import { ThemeProvider } from './app/context/ThemeContext.tsx';
import { ClerkProvider } from '@clerk/clerk-react';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary fallback={<FallbackComponent />}>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <ThemeProvider>
        <App />
      </ThemeProvider>
      </ClerkProvider>
    </ErrorBoundary>
  </StrictMode>
);
