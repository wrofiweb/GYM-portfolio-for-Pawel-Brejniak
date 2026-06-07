"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Torus, Sphere } from "@react-three/drei";
import * as THREE from "three";

function NeonRing({
  position,
  rotation,
  scale,
  color,
  speed,
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale: number;
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = rotation[0] + state.clock.elapsedTime * speed * 0.3;
    ref.current.rotation.y = rotation[1] + state.clock.elapsedTime * speed * 0.5;
    ref.current.rotation.z = rotation[2] + state.clock.elapsedTime * speed * 0.2;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <Torus
        ref={ref}
        position={position}
        scale={scale}
        args={[1, 0.04, 32, 100]}
      >
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          metalness={0.9}
          roughness={0.1}
          toneMapped={false}
        />
      </Torus>
    </Float>
  );
}

function CoreSphere() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.12;
    ref.current.rotation.y = state.clock.elapsedTime * 0.18;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
      <Sphere ref={ref} args={[0.7, 64, 64]}>
        <MeshDistortMaterial
          color="#c9a84c"
          emissive="#8b4a00"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0.15}
          distort={0.35}
          speed={2}
        />
      </Sphere>
    </Float>
  );
}

function FloatingParticles() {
  const count = 80;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 8;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#c9a84c"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function OuterRings() {
  const rings = [
    { position: [0, 0, 0] as [number,number,number], rotation: [0, 0, 0] as [number,number,number], scale: 2.2, color: "#c9a84c", speed: 0.4 },
    { position: [0, 0, 0] as [number,number,number], rotation: [Math.PI / 3, 0, 0] as [number,number,number], scale: 1.9, color: "#8b0000", speed: -0.3 },
    { position: [0, 0, 0] as [number,number,number], rotation: [0, Math.PI / 4, Math.PI / 6] as [number,number,number], scale: 2.5, color: "#c9a84c", speed: 0.2 },
    { position: [0, 0, 0] as [number,number,number], rotation: [Math.PI / 2, Math.PI / 5, 0] as [number,number,number], scale: 1.5, color: "#c0392b", speed: -0.5 },
  ];

  return (
    <>
      {rings.map((ring, i) => (
        <NeonRing key={i} {...ring} />
      ))}
    </>
  );
}

export default function GymScene3D() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#c9a84c" />
        <pointLight position={[-5, -5, -5]} intensity={0.8} color="#8b0000" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#ffffff" />

        <FloatingParticles />
        <OuterRings />
        <CoreSphere />
      </Canvas>
    </div>
  );
}
