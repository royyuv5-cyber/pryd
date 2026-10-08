import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    // Check if error is from third-party extension
    if (
      error.message?.includes('MetaMask') ||
      error.message?.includes('ethereum') ||
      error.stack?.includes('chrome-extension://')
    ) {
      return { hasError: false };
    }
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (
      error.message?.includes('MetaMask') ||
      error.stack?.includes('chrome-extension://')
    ) {
      return;
    }
    console.error('Uncaught application error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-white flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full p-8 border border-[#E5E5E5] rounded-xs space-y-4">
            <div className="w-12 h-12 bg-red-50 text-[#D9222A] rounded-full flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h2 className="font-display font-extrabold text-xl text-[#111111]">
              Catalogue Temporarily Reloading
            </h2>
            <p className="font-display text-xs text-[#555555]">
              An unexpected display glitch occurred. Please refresh to restore the Primus product catalogue.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="px-6 py-2.5 bg-[#111111] hover:bg-[#333333] text-white font-technical text-xs font-bold uppercase tracking-wider rounded-xs flex items-center justify-center gap-2 mx-auto cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reload Catalogue</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
