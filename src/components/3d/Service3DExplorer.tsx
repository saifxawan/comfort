"use client";

import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { Flame, Droplets, ShieldAlert, Waves, ArrowRight } from "lucide-react";

type ServiceMode = "heating" | "plumbing" | "gas" | "hotwater";

interface ExplorerModelProps {
  mode: ServiceMode;
}

function ServiceVisualizer({ mode }: ExplorerModelProps) {
  const meshRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate particle positions
  const count = 200;
  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 5;
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.6;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.2;
    }
  });

  const getModeProps = () => {
    switch (mode) {
      case "heating":
        return { color: "#d97706", emissive: "#b45309", size: 1.2 };
      case "plumbing":
        return { color: "#0284c7", emissive: "#0369a1", size: 1.2 };
      case "gas":
        return { color: "#ca8a04", emissive: "#a16207", size: 1.1 };
      case "hotwater":
        return { color: "#dc2626", emissive: "#b91c1c", size: 1.3 };
    }
  };

  const current = getModeProps();

  return (
    <group ref={meshRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Central Core Sphere */}
        <mesh>
          <icosahedronGeometry args={[current.size, 2]} />
          <meshStandardMaterial
            color={current.color}
            emissive={current.emissive}
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.2}
            wireframe
          />
        </mesh>

        {/* Concentric Energy Ring */}
        <mesh ref={ringRef}>
          <torusGeometry args={[current.size * 1.5, 0.05, 16, 64]} />
          <meshStandardMaterial
            color={current.color}
            emissive={current.color}
            emissiveIntensity={0.8}
          />
        </mesh>
      </Float>

      {/* Orbiting particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.07}
          color={current.color}
          transparent
          opacity={0.85}
        />
      </points>
    </group>
  );
}

export default function Service3DExplorer() {
  const [activeMode, setActiveMode] = useState<ServiceMode>("heating");

  const modes: { id: ServiceMode; label: string; icon: React.ReactNode; color: string; border: string; desc: string }[] = [
    {
      id: "heating",
      label: "HEATING SYSTEMS",
      icon: <Flame className="w-5 h-5" />,
      color: "text-copper-dark",
      border: "border-copper/50",
      desc: "Precision boiler upgrades, hydronic controls, and thermal energy optimization for year-round indoor climate perfection.",
    },
    {
      id: "plumbing",
      label: "PLUMBING & HYDRO",
      icon: <Droplets className="w-5 h-5" />,
      color: "text-electric",
      border: "border-electric/50",
      desc: "High-pressure water distribution, acoustic leak isolation, and heavy-duty pipework engineering for domestic and commercial builds.",
    },
    {
      id: "gas",
      label: "GAS ENGINEERING",
      icon: <ShieldAlert className="w-5 h-5" />,
      color: "text-amber-600",
      border: "border-amber-500/50",
      desc: "Strictly compliant gas safety testing, pressure regulation, commercial meter fitting, and certified gas network connections.",
    },
    {
      id: "hotwater",
      label: "HOT WATER TECH",
      icon: <Waves className="w-5 h-5" />,
      color: "text-red-600",
      border: "border-red-500/50",
      desc: "G3 unvented hot water cylinders and thermal storage solutions engineering rapid mains-pressure delivery across all outlets.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Background Lighting Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-electric/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-copper/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-electric uppercase px-3.5 py-1 rounded-full bg-electric/10 border border-electric/20 font-semibold">
            Interactive Engineering Studio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 font-display">
            EXPLORE OUR <span className="text-gradient-blue">3D CORE CAPABILITIES</span>
          </h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">
            Interact with our specialized engineering disciplines below to examine the technological systems powering Comfort Heating and Plumbing Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Service Selector Column */}
          <div className="lg:col-span-5 space-y-4">
            {modes.map((mode) => {
              const isActive = activeMode === mode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border backdrop-blur-md flex flex-col gap-3 ${
                    isActive
                      ? `bg-white ${mode.border} shadow-xl scale-[1.02] ring-1 ring-slate-200`
                      : "bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl bg-slate-100 border border-slate-200 ${mode.color}`}>
                        {mode.icon}
                      </div>
                      <span className="font-display font-bold tracking-wider text-slate-900 text-base">
                        {mode.label}
                      </span>
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? "text-electric translate-x-1" : "text-slate-400"}`} />
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {mode.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Interactive 3D Canvas Column */}
          <div className="lg:col-span-7">
            <div className="w-full h-[450px] sm:h-[500px] relative rounded-3xl overflow-hidden bg-white border border-slate-200 p-2 shadow-2xl">
              <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 text-xs font-mono text-slate-800 font-semibold flex items-center gap-2 shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-electric animate-ping" />
                ACTIVE MODEL: <span className="text-electric font-bold">{activeMode.toUpperCase()}</span>
              </div>

              <Canvas gl={{ antialias: true, alpha: true }}>
                <PerspectiveCamera makeDefault position={[0, 0, 4.5]} fov={45} />
                <ambientLight intensity={1.2} />
                <pointLight position={[10, 10, 10]} intensity={1.8} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#0284c7" />
                <pointLight position={[10, -10, 10]} intensity={2} color="#d97706" />
                <ServiceVisualizer mode={activeMode} />
              </Canvas>

              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-xs text-slate-600 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-slate-200 shadow-sm font-medium">
                <span>SIMULATION FPS: 60</span>
                <span>SYSTEM STATUS: CERTIFIED OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
