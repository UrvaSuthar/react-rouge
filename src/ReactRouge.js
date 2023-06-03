import React,{useRef , useEffect} from 'react'

const ReactRouge = ({ width, height, tilesize }) => {
	const canvasRef = useRef();
	useEffect(()=>{
		const canvas = canvasRef.current;
		const ctx = canvas.getContext('2d');
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, width * tilesize, height * tilesize);
	});

	return (
		<canvas
			width={width * tilesize}
			height={height * tilesize}
			style={{ border: '1px solid black' }}
		></canvas>
	);
}

export default ReactRouge