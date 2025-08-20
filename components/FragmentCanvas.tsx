"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

// Central fragment (Icosahedron)
function FragmentSymbol() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.5, 1]} />
      <meshStandardMaterial
        color="#00ffcc"
        wireframe
        emissive="#00ffcc"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

// Orbiting React-style rings
function OrbitRings() {
  return (
    <>
      {[0, 60, 120].map((angle, i) => (
        <mesh rotation={[0, 0, (angle * Math.PI) / 180]} key={i}>
          <torusGeometry args={[3, 0.05, 16, 100]} />
          <meshStandardMaterial
            color="#61DAFB"
            emissive="#61DAFB"
            emissiveIntensity={0.6}
          />
        </mesh>
      ))}
    </>
  );
}

export default function FragmentCanvas() {
  return (
    <div className="w-full h-72">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Objects */}
        <FragmentSymbol />
        <OrbitRings />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
