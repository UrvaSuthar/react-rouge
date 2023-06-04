import React, { useRef, useEffect } from 'react';

const ReactRouge = ({ width, height, tilesize }) => {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, width * tilesize, height * tilesize);
    ctx.fillStyle = '#000';
    ctx.fillRect(12, 12, 16, 16);
  }, [width, height, tilesize]);

  return (
    <canvas
      ref={canvasRef}
      width={width * tilesize}
      height={height * tilesize}
      style={{ border: '1px solid black' }}
    ></canvas>
  );
};

export default ReactRouge;
