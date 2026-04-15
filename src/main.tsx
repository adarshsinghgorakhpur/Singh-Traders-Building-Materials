import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
  setInterval(() => {
  const badge = document.querySelector('a[href*="bolt"]');
  if (badge) badge.remove();
}, 1000);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
