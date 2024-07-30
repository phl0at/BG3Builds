import React from "react";

class ErrorBoundary extends React.Component {
  state = { errors: false };

  static getDerivedStateFromError() {
    return { errors: true };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.errors) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
