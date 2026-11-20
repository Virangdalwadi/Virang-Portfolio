import React, { Component, ErrorInfo, ReactNode } from 'react';
import { reportError } from '../lib/sentry';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    reportError(error);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-ink p-4 text-paper">
  <div className="w-full max-w-lg border border-line p-8 text-center">
    <h2 className="display mb-4 text-5xl">Oops! Something went wrong</h2>
    <p className="mb-6 text-paper/70">
      An unexpected error occurred. We apologize for the inconvenience.
    </p>
    <button
      onClick={() => window.location.reload()}
      className="btn-solid"
    >
      Refresh page
    </button>
  </div>
</div>

      );
    }

    return this.props.children;
  }
}