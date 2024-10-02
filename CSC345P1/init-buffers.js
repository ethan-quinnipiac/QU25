function initBuffers(gl) {
    const skyPosBuffer = initSkyPositionBuffer(gl);
    const groundPosBuffer = initGroundPositionBuffer(gl);
  
    const skyColorBuffer = initSkyColorBuffer(gl);
    const groundColorBuffer = initGroundColorBuffer(gl);

    return {
        position: skyPosBuffer,
        color: skyColorBuffer,
    };

  }
  
  function initSkyPositionBuffer(gl) {
    //create a buffer for the square's positions
    const positionBuffer = gl.createBuffer();
  
    //select the positionBuffer as the one to apply buffer operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    //now create an array of positions for the square.
    const sky = [3.5, 3.0, -3.5, 3.0, 3.5, 0, -3.5, 0];
    
  
    //now pass the list of positions into WebGL to build the shape by creating a Float32Array from the JavaScript array, then use it to fill the current buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sky), gl.STATIC_DRAW);
  
    return positionBuffer;
  }

  function initGroundPositionBuffer(gl) {
    //create a buffer for the square's positions
    const positionBuffer = gl.createBuffer();
  
    //select the positionBuffer as the one to apply buffer operations to from here out.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    //now create an array of positions for the square.
    const sky = [3.5, 0.0, -3.5, 0.0, 3.5, -3.0, -3.5, -3.0];
    
  
    //now pass the list of positions into WebGL to build the shape by creating a Float32Array from the JavaScript array, then use it to fill the current buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sky), gl.STATIC_DRAW);
  
    return positionBuffer;
  }

    //create buffer for sky color
  function initSkyColorBuffer(gl) {
    const colors = [
      0.0, 0.0, 1.0, 1.0, // blue
      0.0, 0.0, 1.0, 1.0, // blue
      0.0, 0.0, 1.0, 1.0, // blue
      0.0, 0.0, 1.0, 1.0, // blue
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
  }

  function initGroundColorBuffer(gl) {
    const colors = [
      0.0, 1.0, 0.0, 1.0, // green
      0.0, 1.0, 0.0, 1.0, 
      0.0, 1.0, 0.0, 1.0, 
      0.0, 1.0, 0.0, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
  }
  
  
  export { initBuffers };
  