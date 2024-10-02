function initBuffers(gl) {
  const skyPosBuffer = initSkyPositionBuffer(gl);
  const groundPosBuffer = initGroundPositionBuffer(gl);

  const leftTreePosBuffer = initLeftTreePositionBuffer(gl);
  const rightTreePosBuffer = initRightTreePositionBuffer(gl);
  const leftLeavesPosBuffer = initLeftLeavesPositionBuffer(gl);
  const rightLeavesPosBuffer = initRightLeavesPositionBuffer(gl);

  const sunPosBuffer = initSunPositionBuffer(gl);
  const sunFade1PosBuffer = initSunFade1PositionBuffer(gl);
  const sunFade2PosBuffer = initSunFade2PositionBuffer(gl);

  const sawPosBuffer = initSawPositionBuffer(gl); 
  const standPosBuffer = initStandPositionBuffer(gl);

  const p1HeadPosBuffer = initP1HeadPositionBuffer(gl);
  const p1BodyPosBuffer = initP1BodyPositionBuffer(gl);
  const p1LegPosBuffer = initP1LegPositionBuffer(gl);
  const p1ArmPosBuffer = initP1ArmPositionBuffer(gl);

///////////////////////COLORS////////////////////////
  const blueColorBuffer = initBlueColorBuffer(gl);
  const greenColorBuffer = initGreenColorBuffer(gl);
  const brownColorBuffer = initBrownColorBuffer(gl);
  const darkGreenColorBuffer = initDarkGreenColorBuffer(gl);
  const yellowColorBuffer = initYellowColorBuffer(gl);
  const yellowFade1ColorBuffer = initYellowFade1ColorBuffer(gl);
  const yellowFade2ColorBuffer = initYellowFade2ColorBuffer(gl);
  const purpleColorBuffer = initPurpleColorBuffer(gl);
  const blackColorBuffer = initBlackColorBuffer(gl);
  const tanColorBuffer = initTanColorBuffer(gl);

  return [
    {//sky
      position: skyPosBuffer,
      color: blueColorBuffer,
    },
    {//sun fade 2
        position: sunFade2PosBuffer,
        color: yellowFade2ColorBuffer,
    },
    {//sun fade 1
        position: sunFade1PosBuffer,
        color: yellowFade1ColorBuffer,
    },
    {//sun
        position: sunPosBuffer,
        color: yellowColorBuffer,
    },
    {//ground
      position: groundPosBuffer,
      color: greenColorBuffer,
    },
    {//left tree
        position: leftTreePosBuffer,
        color: brownColorBuffer,
    },
    {//left leaves
        position: leftLeavesPosBuffer,
        color: darkGreenColorBuffer,
    },
    {//right tree
        position: rightTreePosBuffer,
        color: brownColorBuffer,
    },
    {//right leaves
        position: rightLeavesPosBuffer,
        color: darkGreenColorBuffer,
    },
    {//stand
        position: standPosBuffer,
        color: blackColorBuffer,
    },
    {//saw
        position: sawPosBuffer,
        color: purpleColorBuffer,
    },
    {//p1 head
        position: p1HeadPosBuffer,
        color: tanColorBuffer,
    },
    {//p1 body
        position: p1BodyPosBuffer,
        color: tanColorBuffer,
    },
    {//p1 leg
        position: p1LegPosBuffer,
        color: tanColorBuffer,
    },
    {//p1 arm
        position: p1ArmPosBuffer,
        color: tanColorBuffer,
    },
  ];
}

function initSkyPositionBuffer(gl) {
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = [3.5, 3.0, -3.5, 3.0, 3.5, 0.0, -3.5, 0.0];

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  return positionBuffer;
}

function initSawPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [-2.5, -2, -2.3, -2, -1, -1, -.7, -1];
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initStandPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [-1.75, -1.5, -1.25, -2, -2.25, -2, -1.75, -1.5];
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
  }

function initLeftLeavesPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [-1.5, 2, -3, 2, -1.5, 0.5, -3, 0.5];
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initRightLeavesPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [1.5, 2, 3, 2, 1.5, 0.5, 3, 0.5];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initSunPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [2.5, 2.5, 3.5, 2.5, 2.5, 1.5, 3.5, 1.5];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initSunFade1PositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [2.4, 2.6, 3.6, 2.6, 2.4, 1.4, 3.6, 1.4];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initSunFade2PositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [2.3, 2.7, 3.7, 2.7, 2.3, 1.3, 3.7, 1.3];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initP1HeadPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [-2.4, -1, -2.1, -1, -2.4, -1.3, -2.1, -1.3]; 

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initP1BodyPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [-2.3, -1, -2.2, -1, -2.3, -1.8, -2.2, -1.8]; 

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initP1LegPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [-2.3, -1.8, -2.2, -1.8, -2.0, -2.1, -1.9, -2.1]; 

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initP1ArmPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    const positions = [-2.3, -1.4, -2.2, -1.4, -2.1, -1.9, -2, -1.9]; 

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

// function initCirclePositionBuffer(gl, centerX, centerY, radius) {
//     const positionBuffer = gl.createBuffer();
//     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

//     const totalPoints=100;
//     const positions = [];

//     for (let i = 0; i <= totalPoints; i++) {
//         const angle= 2 * Math.PI * i / totalPoints;
//         const x = centerX + radius * Math.cos(angle);
//         const y = centerY + radius * Math.sin(angle);
//         positions.push(x, y);
//     }

//     // const positions = [];
//     // for (let i = 0; i <= numSegments; i++) {
//     //     const angle = (i * 2 * Math.PI) / numSegments;
//     //     const x = centerX + radius * Math.cos(angle);
//     //     const y = centerY + radius * Math.sin(angle);
//     //     positions.push(x, y);
//     // }

//     gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
//     return positionBuffer;
// }

function initLeftTreePositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [-2, 1, -2.5, 1, -2, -1, -2.5, -1];
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

  function initRightTreePositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  
    const positions = [2.5, 1, 2, 1, 2.5, -1, 2, -1];
  
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
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
function initBlueColorBuffer(gl) {
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

function initBrownColorBuffer(gl) {
    const colors = [
        0.45, 0.26, 0.16, 1.0, // brown
        0.45, 0.26, 0.16, 1.0, // brown
        0.45, 0.26, 0.16, 1.0, // brown
        0.45, 0.26, 0.16, 1.0, // brown
    ];

    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

    return colorBuffer;
}

function initBlackColorBuffer(gl) {
    const colors = [
      0.0, 0.0, 0.0, 1.0, // black
      0.0, 0.0, 0.0, 1.0,
      0.0, 0.0, 0.0, 1.0,
      0.0, 0.0, 0.0, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initGreenColorBuffer(gl) {
    const colors = [
      0.0, 1, 0.0, 1.0, // green
      0.0, 1, 0.0, 1.0,
      0.0, 1, 0.0, 1.0,
      0.0, 1, 0.0, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initDarkGreenColorBuffer(gl) {
    const colors = [
      0.0, 0.5, 0.0, 1.0, // green
      0.0, 0.5, 0.0, 1.0,
      0.0, 0.5, 0.0, 1.0,
      0.0, 0.5, 0.0, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initYellowColorBuffer(gl) {
    const colors = [
      1.0, 1.0, 0.0, 1.0, // yellow
      1.0, 1.0, 0.0, 1.0,
      1.0, 1.0, 0.0, 1.0,
      1.0, 1.0, 0.0, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initPurpleColorBuffer(gl) {
    const colors = [
      0.5, 0.0, 0.5, 1.0, // purple
      0.5, 0.0, 0.5, 1.0,
      0.5, 0.0, 0.5, 1.0,
      0.5, 0.0, 0.5, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initTanColorBuffer(gl) {
    const colors = [
      0.82, 0.71, 0.55, 1.0, // tan
      0.82, 0.71, 0.55, 1.0,
      0.82, 0.71, 0.55, 1.0,
      0.82, 0.71, 0.55, 1.0,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initYellowFade1ColorBuffer(gl) {
    const colors = [
      0.8, 0.8, 0.0, 0.75, // yellow
      0.8, 0.8, 0.0, 0.75,
      0.8, 0.8, 0.0, 0.75,
      0.8, 0.8, 0.0, 0.75,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

function initYellowFade2ColorBuffer(gl) {
    const colors = [
      0.5, 0.5, 0.1, 0.5, // yellow
      0.5, 0.5, 0.1, 0.5,
      0.5, 0.5, 0.1, 0.5,
      0.5, 0.5, 0.1, 0.5,
    ];
  
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  
    return colorBuffer;
}

// function initDarkGreenCircleColorBuffer(gl) {
//   const numVertices = 101; // same as numSegments + 1 in initCirclePositionBuffer
//   const colors = [];
//   for (let i = 0; i < numVertices; i++) {
//     colors.push(0.0, 0.5, 0.0, 1.0); // dark green
//   }

//   const colorBuffer = gl.createBuffer();
//   gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
//   gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

//   return colorBuffer;
// }

export { initBuffers };
