import Scene from "./Scene";
import WebGLErrorBoundary from "./WebGLErrorBoundary";

const CharacterModel = () => {
  return (
    <WebGLErrorBoundary>
      <Scene />
    </WebGLErrorBoundary>
  );
};

export default CharacterModel;
