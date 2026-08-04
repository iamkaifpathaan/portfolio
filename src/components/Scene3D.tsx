"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

const PRIMARY = "#3dffa6";
const SECONDARY = "#4be8ff";
const ACCENT = "#ffb454";

function ChipPins() {
  const pins = useMemo(() => {
    const list: { pos: [number, number, number]; rot: [number, number, number] }[] = [];
    const count = 6;
    const span = 2.6;
    for (let side = 0; side < 4; side++) {
      for (let i = 0; i < count; i++) {
        const offset = -span / 2 + (span / (count - 1)) * i;
        const dist = 1.55;
        if (side === 0) list.push({ pos: [offset, 0.05, dist], rot: [0, 0, 0] });
        if (side === 1) list.push({ pos: [offset, 0.05, -dist], rot: [0, 0, 0] });
        if (side === 2) list.push({ pos: [dist, 0.05, offset], rot: [0, Math.PI / 2, 0] });
        if (side === 3) list.push({ pos: [-dist, 0.05, offset], rot: [0, Math.PI / 2, 0] });
      }
    }
    return list;
  }, []);

  return (
    <group>
      {pins.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={p.rot}>
          <boxGeometry args={[0.5, 0.06, 0.14]} />
          <meshStandardMaterial
            color={ACCENT}
            emissive={ACCENT}
            emissiveIntensity={0.35}
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

function CircuitRing({ radius, speed, color, tilt }: { radius: number; speed: number; color: string; tilt: number }) {
  const ref = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    const segments = 64;
    for (let i = 0; i <= segments; i++) {
      const a = (i / segments) * Math.PI * 2;
      pts.push([Math.cos(a) * radius, 0, Math.sin(a) * radius]);
    }
    return pts;
  }, [radius]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });

  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <Line points={points} color={color} lineWidth={1.2} transparent opacity={0.55} />
    </group>
  );
}

function SolderNode({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      const s = 1 + Math.sin(t * 2 + position[0]) * 0.25;
      ref.current.scale.setScalar(s);
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.06, 12, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2.2} toneMapped={false} />
    </mesh>
  );
}

function ParticleField() {
  const [positions] = useState(() => {
    const arr = new Float32Array(240 * 3);
    for (let i = 0; i < 240; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    return arr;
  });

  const ref = useRef<THREE.Points>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={PRIMARY}
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function Chip() {
  const solderPositions = useMemo<[number, number, number][]>(
    () => [
      [1.55, 0.05, 1.55],
      [-1.55, 0.05, 1.55],
      [1.55, 0.05, -1.55],
      [-1.55, 0.05, -1.55],
    ],
    []
  );

  return (
    <group>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
        <group rotation={[0.32, 0.5, 0]}>
          {/* chip body */}
          <mesh>
            <boxGeometry args={[2.2, 0.28, 2.2]} />
            <meshStandardMaterial
              color="#081512"
              emissive={PRIMARY}
              emissiveIntensity={0.08}
              metalness={0.6}
              roughness={0.35}
            />
          </mesh>
          {/* die marking */}
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[1.1, 0.02, 1.1]} />
            <meshStandardMaterial
              color={PRIMARY}
              emissive={PRIMARY}
              emissiveIntensity={1.4}
              toneMapped={false}
              transparent
              opacity={0.85}
            />
          </mesh>
          <ChipPins />
          {solderPositions.map((p, i) => (
            <SolderNode key={i} position={p} color={i % 2 === 0 ? PRIMARY : SECONDARY} />
          ))}
        </group>
      </Float>
      <CircuitRing radius={3.4} speed={0.16} color={PRIMARY} tilt={0.35} />
      <CircuitRing radius={4.2} speed={-0.1} color={SECONDARY} tilt={1.1} />
      <CircuitRing radius={4.8} speed={0.07} color={ACCENT} tilt={0.85} />
      <ParticleField />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2.4, 7.2], fov: 42 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#00000000"]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[5, 5, 5]} intensity={1.1} color={PRIMARY} />
        <pointLight position={[-5, -2, -4]} intensity={0.7} color={SECONDARY} />
        <Suspense fallback={null}>
          <Chip />
        </Suspense>
        <EffectComposer>
          <Bloom
            intensity={0.9}
            luminanceThreshold={0.15}
            luminanceSmoothing={0.4}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
