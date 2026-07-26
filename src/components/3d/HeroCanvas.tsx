"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function PipeSystem({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const copperParticlesRef = useRef<THREE.Points>(null);

  // Generate particle coordinates for blue energy flow
  const blueParticleCount = 300;
  const bluePositions = React.useMemo(() => {
    const pos = new Float32Array(blueParticleCount * 3);
    for (let i = 0; i < blueParticleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  // Generate particle coordinates for warm copper heat flow
  const copperParticleCount = 250;
  const copperPositions = React.useMemo(() => {
    const pos = new Float32Array(copperParticleCount * 3);
    for (let i = 0; i < copperParticleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth mouse parallax rotation
      const targetRotY = mouse.current.x * 0.25;
      const targetRotX = -mouse.current.y * 0.25;
      groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
      particlesRef.current.rotation.z += delta * 0.04;
    }

    if (copperParticlesRef.current) {
      copperParticlesRef.current.rotation.y -= delta * 0.1;
      copperParticlesRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Metallic Pipe Network */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        {/* Main Central Hydro Manifold */}
        <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.35, 0.35, 6, 32]} />
          <meshStandardMaterial
            color="#334155"
            metalness={0.9}
            roughness={0.15}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Copper Thermal Conduits */}
        <mesh position={[-1.8, 1, 0.5]} rotation={[Math.PI / 3, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 4.5, 32]} />
          <meshStandardMaterial
            color="#d97706"
            metalness={0.85}
            roughness={0.2}
            emissive="#b45309"
            emissiveIntensity={0.3}
          />
        </mesh>

        <mesh position={[1.8, -1, -0.5]} rotation={[-Math.PI / 3, 0, 0]}>
          <cylinderGeometry args={[0.18, 0.18, 4.5, 32]} />
          <meshStandardMaterial
            color="#d97706"
            metalness={0.85}
            roughness={0.2}
            emissive="#b45309"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Electric Blue Pressure Rings */}
        <mesh position={[0, 1.5, 0]}>
          <torusGeometry args={[0.8, 0.08, 16, 64]} />
          <meshStandardMaterial
            color="#0284c7"
            metalness={0.5}
            roughness={0.1}
            emissive="#0284c7"
            emissiveIntensity={0.9}
          />
        </mesh>

        <mesh position={[0, -1.5, 0]}>
          <torusGeometry args={[0.8, 0.08, 16, 64]} />
          <meshStandardMaterial
            color="#d97706"
            metalness={0.5}
            roughness={0.1}
            emissive="#d97706"
            emissiveIntensity={0.9}
          />
        </mesh>

        {/* Floating Architectural Engineering Nodes */}
        <mesh position={[-2.5, -1.8, 1]}>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshStandardMaterial
            color="#475569"
            metalness={0.95}
            roughness={0.1}
            wireframe
          />
        </mesh>

        <mesh position={[2.5, 1.8, -1]}>
          <icosahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial
            color="#0284c7"
            metalness={0.8}
            roughness={0.2}
            emissive="#0369a1"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
      </Float>

      {/* Blue Electric Energy Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[bluePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color="#0284c7"
          transparent
          opacity={0.85}
        />
      </points>

      {/* Warm Copper Thermal Particles */}
      <points ref={copperParticlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[copperPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#d97706"
          transparent
          opacity={0.75}
        />
      </points>
    </group>
  );
}

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [webGLAvailable, setWebGLAvailable] = useState(true);

  useEffect(() => {
    // Check reduced motion setting
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);
    const handleChange = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const isSupported = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
      setWebGLAvailable(isSupported);
    } catch (e) {
      setWebGLAvailable(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Fallback for static/reduced motion/WebGL unavailable
  if (reducedMotion || !webGLAvailable) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
        <div className="absolute w-[600px] h-[600px] bg-electric/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute w-[500px] h-[500px] bg-copper/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="relative z-10 w-72 h-72 rounded-full border border-electric/30 flex items-center justify-center bg-white/60 backdrop-blur-md shadow-xl">
          <div className="w-56 h-56 rounded-full border border-copper/40 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-electric/20 to-copper/20 blur-sm" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={50} />
        
        {/* Cinematic Bright Volumetric Lighting for Light Theme */}
        <ambientLight intensity={1.2} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
        <pointLight position={[-8, 5, -5]} intensity={2.5} color="#0284c7" />
        <pointLight position={[8, -5, 5]} intensity={2.5} color="#d97706" />
        <directionalLight position={[0, 10, 5]} intensity={1.5} color="#ffffff" />

        <PipeSystem mouse={mouse} />
      </Canvas>
    </div>
  );
}
