import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

// Suppress unhandled rejections and errors originating from browser extensions (e.g. MetaMask, inpage.js)
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason?.message || String(event.reason || '');
    const stack = event.reason?.stack || '';
    if (
      reason.includes('MetaMask') ||
      reason.includes('ethereum') ||
      stack.includes('chrome-extension://') ||
      stack.includes('inpage.js')
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });

  window.addEventListener('error', (event) => {
    const msg = event.message || '';
    const src = event.filename || '';
    if (
      msg.includes('MetaMask') ||
      msg.includes('ethereum') ||
      src.includes('chrome-extension://') ||
      src.includes('inpage.js')
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
