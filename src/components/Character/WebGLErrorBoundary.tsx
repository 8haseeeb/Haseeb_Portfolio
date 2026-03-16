import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("WebGL/3D rendering failed:", error.message);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="character-container">
          <div
            className="character-model"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "12px",
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "14px",
              textAlign: "center",
              padding: "20px",
            }}
          >
            <span style={{ fontSize: "32px" }}>🖥️</span>
            <p style={{ margin: 0 }}>
              3D content is unavailable.
              <br />
              <span style={{ fontSize: "12px", opacity: 0.7 }}>
                Enable WebGL in your browser to view the 3D character.
              </span>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default WebGLErrorBoundary;
