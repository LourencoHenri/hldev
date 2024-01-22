"use client";

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

export function Overlay() {
	return (
		<div className="z-50">
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate3d(-50%,-50%,0)",
				}}
			>
				<h1 className="text-9xl text-white">hello</h1>
			</div>
		</div>
	);
}

function Stars(props) {
	const ref = useRef();
	const [sphere] = useState(() =>
		random.inSphere(new Float32Array(5000), { radius: 1.5 })
	);
	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});
	return (
		<group rotation={[0, 0, Math.PI / 4]} style={{ }}>
			<ambientLight intensity={0.1} />
			<directionalLight color="red" position={[0, 0, 5]} />
			<mesh
				visible
				userData={{ hello: "world" }}
				position={[1, 2, 3]}
				rotation={[Math.PI / 1, 0, 0]}
			>
				<boxGeometry args={[200, 200, 200]} />
				<meshBasicMaterial />
			</mesh>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled={false}
				{...props}
			>
				<PointMaterial
					transparent
					color="#fff"
					size={0.005}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
}

export default function Three() {
	return (
		<div id="Home" className="h-svh min-h-96 -z-10 border-b border-b-neutral-800">
			{/* <Overlay /> */}
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Stars />
			</Canvas>
		</div>
	);
}
