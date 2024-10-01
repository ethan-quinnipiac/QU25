import { initBuffers } from "./init-buffers.js";
import { drawScene } from "./draw-scene.js";

main();

function main() {
  const canvas = document.querySelector("#glcanvas");

  //initialize gl context
  const gl = canvas.getContext("webgl");

  //if context does not exist, quit
  if (gl === null) {
    alert(
      "Unable to initialize WebGL.",
    );
    return;
  }

  //set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  //clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Vertex shader program
  //avertexposition recieves vertex values and is multiplied by the two matrices to set gl_position to the final value
  const vsSource = `
    attribute vec4 aVertexPosition; 
    uniform mat4 uModelViewMatrix;  
    uniform mat4 uProjectionMatrix;
    void main() {
      gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }
  `;

  //fragment shader program to determine color of pixel and then set it
  //in this case it is white
  const fsSource = `
    void main() {
      gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }
  `;

  //initialize a shader program where the lighting for the vertices and so forth is established
  const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

  //collect all the info needed to use the shader program
  //look up which attribute our shader program is using for aVertexPosition and look up uniform locations
  const programInfo = {
    program: shaderProgram,
    attribLocations: {
      vertexPosition: gl.getAttribLocation(shaderProgram, "aVertexPosition"),
    },
    uniformLocations: {
      projectionMatrix: gl.getUniformLocation(shaderProgram, "uProjectionMatrix"),
      modelViewMatrix: gl.getUniformLocation(shaderProgram, "uModelViewMatrix"),
    },
  };

  //this is where the routine that builds all the objects we'll be drawing is called
  const buffers = initBuffers(gl);

  //DRAW THE SCENE :D
  drawScene(gl, programInfo, buffers);

}
//
//
//SHADER PROGRAM
//initialize a shader program, so webgl knows how to draw the data
function initShaderProgram(gl, vsSource, fsSource) {
  const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
  const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

  //create the shader program

  const shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  //if creating the shader program failed, alert

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    alert(
      `Unable to initialize the shader program: ${gl.getProgramInfoLog(
        shaderProgram,
      )}`,
    );
    return null;
  }

  return shaderProgram;
}
//
//
//SHADER LOADER
//creates a shader of the given type, uploads the source and compiles it.
function loadShader(gl, type, source) {
  const shader = gl.createShader(type);

  // Send the source to the shader object

  gl.shaderSource(shader, source);

  // Compile the shader program

  gl.compileShader(shader);

  // See if it compiled successfully

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    alert(
      `An error occurred compiling the shaders: ${gl.getShaderInfoLog(shader)}`,
    );
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}