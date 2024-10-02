function drawScene(gl, programInfo, buffersArray) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things

    // Clear the canvas before we start drawing on it
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Create a perspective matrix
    const fieldOfView = (45 * Math.PI) / 180; // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

    // Loop through each buffer in buffersArray to draw multiple objects
    buffersArray.forEach(buffers => {
        // Set the drawing position to the "identity" point, which is the center of the scene
        const modelViewMatrix = mat4.create();

        // Move the drawing position to where we want to start drawing the square
        mat4.translate(modelViewMatrix, modelViewMatrix, [0.0, 0.0, -6.0]); // Translation vector

        // Bind the position buffer
        {
            const numComponents = 2; // pull out 2 values per iteration
            const type = gl.FLOAT; // the data in the buffer is 32bit floats
            const normalize = false; // don't normalize
            const stride = 0; // how many bytes to get from one set of values to the next
            const offset = 0; // how many bytes inside the buffer to start from
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.position);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexPosition,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);
        }

        // Bind the color buffer
        {
            const numComponents = 4; // pull out 4 values per iteration
            const type = gl.FLOAT; // the data in the buffer is 32bit floats
            const normalize = false; // don't normalize
            const stride = 0; // how many bytes to get from one set of values to the next
            const offset = 0; // how many bytes inside the buffer to start from
            gl.bindBuffer(gl.ARRAY_BUFFER, buffers.color);
            gl.vertexAttribPointer(
                programInfo.attribLocations.vertexColor,
                numComponents,
                type,
                normalize,
                stride,
                offset);
            gl.enableVertexAttribArray(programInfo.attribLocations.vertexColor);
        }

        // Tell WebGL to use our program when drawing
        gl.useProgram(programInfo.program);

        // Set the shader uniforms
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.projectionMatrix,
            false,
            projectionMatrix);
        gl.uniformMatrix4fv(
            programInfo.uniformLocations.modelViewMatrix,
            false,
            modelViewMatrix);

        // Draw the object
        {
            const offset = 0;
            const vertexCount = 4; // Each object has 4 vertices
            gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);
        }
    });
}

export { drawScene };

function initSkyPositionBuffer(gl) {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  // Define the positions for the sky (a rectangle covering the top half of the screen)
  const positions = [
    -1.0,  1.0,  // top left
    -1.0,  0.0,  // bottom left
     1.0,  1.0,  // top right
     1.0,  0.0,  // bottom right
  ];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return positionBuffer;
}

export { drawScene };
