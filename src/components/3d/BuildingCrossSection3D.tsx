"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export type EngineeringStep = 1 | 2 | 3 | 4;

interface BuildingModelProps {
  step: EngineeringStep;
}

function ArchitecturalBuilding({ step }: BuildingModelProps) {
  const houseGroupRef = useRef<THREE.Group>(null);
  const heatingCircuitRef = useRef<THREE.Mesh>(null);
  const hotWaterCircuitRef = useRef<THREE.Mesh>(null);
  const coldWaterCircuitRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (houseGroupRef.current) {
      houseGroupRef.current.rotation.y += delta * 0.12;
    }

    if (heatingCircuitRef.current) {
      const active = step === 1 || step === 4;
      const mat = heatingCircuitRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = active ? 0.8 + Math.sin(state.clock.elapsedTime * 4) * 0.3 : 0.1;
    }

    if (hotWaterCircuitRef.current) {
      const active = step === 2 || step === 4;
      const mat = hotWaterCircuitRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = active ? 0.8 + Math.cos(state.clock.elapsedTime * 4) * 0.3 : 0.1;
    }

    if (coldWaterCircuitRef.current) {
      const active = step === 3 || step === 4;
      const mat = coldWaterCircuitRef.current.material as THREE.MeshStandardMaterial;
      mat.emissiveIntensity = active ? 0.8 + Math.sin(state.clock.elapsedTime * 5) * 0.3 : 0.1;
    }
  });

  return (
    <group ref={houseGroupRef} position={[0, -0.2, 0]}>
      {/* Contemporary House Wireframe Shell */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 3.4, 2.8]} />
        <meshStandardMaterial
          color="#94a3b8"
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>

      {/* Pitched Roof Wireframe */}
      <mesh position={[0, 2.3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2.5, 1.4, 4]} />
        <meshStandardMaterial color="#64748b" transparent opacity={0.2} wireframe />
      </mesh>

      {/* Internal Floor Plates */}
      {[-1.0, 0.2].map((y, idx) => (
        <mesh key={idx} position={[0, y, 0]}>
          <boxGeometry args={[3.0, 0.04, 2.6]} />
          <meshStandardMaterial color="#cbd5e1" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}

      {/* Step 1: Heating Circuit (Warm Copper) */}
      <mesh ref={heatingCircuitRef} position={[-0.8, 0.2, -0.6]}>
        <cylinderGeometry args={[0.07, 0.07, 3.2, 16]} />
        <meshStandardMaterial
          color="#b76e41"
          emissive="#b76e41"
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* Hydronic Underfloor Heating Loop */}
      <mesh position={[0, -0.95, 0]}>
        <ringGeometry args={[0.5, 1.2, 32]} />
        <meshStandardMaterial
          color="#b76e41"
          emissive="#b76e41"
          emissiveIntensity={step === 1 || step === 4 ? 0.6 : 0.1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Step 2: Unvented Hot Water Cylinder & Output */}
      <group position={[0.8, -0.4, 0.6]}>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 1.2, 32]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} roughness={0.1} />
        </mesh>
        <mesh ref={hotWaterCircuitRef} position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 1.8, 16]} />
          <meshStandardMaterial color="#d97706" emissive="#d97706" />
        </mesh>
      </group>

      {/* Step 3: Mains Hydro Distribution Line (Blue) */}
      <mesh ref={coldWaterCircuitRef} position={[0.8, 0.2, -0.6]}>
        <cylinderGeometry args={[0.06, 0.06, 3.2, 16]} />
        <meshStandardMaterial
          color="#0284c7"
          emissive="#0284c7"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Base Mechanical Foundation */}
      <mesh position={[0, -1.6, 0]}>
        <boxGeometry args={[3.4, 0.2, 3.0]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function BuildingCrossSection3D() {
  const [step, setStep] = useState<EngineeringStep>(1);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const steps: { num: EngineeringStep; title: string; subtitle: string; color: string }[] = [
    { num: 1, title: "01 — HEATING", subtitle: "Warm copper thermal circulation activates across floors and radiators.", color: "text-brand-copper" },
    { num: 2, title: "02 — HOT WATER", subtitle: "Unvented thermal cylinder delivers continuous mains-pressure hot water.", color: "text-amber-600" },
    { num: 3, title: "03 — PLUMBING", subtitle: "Mains water distribution routes highlight with acoustic leak isolation.", color: "text-brand-blueAccent" },
    { num: 4, title: "04 — TOTAL COMFORT", subtitle: "Complete building-services system operates in total thermal harmony.", color: "text-emerald-700" },
  ];

  if (reducedMotion) {
    return (
      <div className="w-full rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 text-center shadow-md">
        <h4 className="text-base sm:text-lg font-bold text-brand-deepNavy mb-2 font-display">Integrated Building Services Visualisation</h4>
        <p className="text-xs sm:text-sm text-brand-slate max-w-md mx-auto">
          Interactive 3D cutaway showcasing real heating circuits, hot water cylinder distribution, and hydro plumbing routes.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl border border-slate-200 p-4 sm:p-6 lg:p-8 shadow-elevated">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        
        {/* Step Controls Column */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3">
          {steps.map((s) => {
            const isActive = step === s.num;
            return (
              <button
                key={s.num}
                onClick={() => setStep(s.num)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 min-h-[48px] ${
                  isActive
                    ? "bg-brand-warmWhite border-brand-copper shadow-sm scale-[1.01]"
                    : "bg-white border-slate-200 hover:border-slate-300 opacity-85"
                }`}
              >
                <div className={`text-xs font-mono font-bold uppercase tracking-wider ${s.color}`}>
                  {s.title}
                </div>
                <div className="text-[11px] sm:text-xs text-brand-slate mt-0.5 leading-snug">
                  {s.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* 3D Canvas Column */}
        <div className="lg:col-span-7">
          <div className="w-full h-[320px] sm:h-[400px] lg:h-[450px] relative rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-inner p-1">
            <div className="absolute top-3 left-3 z-10 bg-white/95 backdrop-blur-md px-3 py-1 rounded-md border border-slate-200 text-[11px] sm:text-xs font-mono text-brand-deepNavy font-bold shadow-xs">
              ACTIVE: <span className="text-brand-copper">STEP 0{step}</span>
            </div>

            <Canvas gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} dpr={[1, 2]}>
              <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 6.5 : 5.8]} fov={isMobile ? 50 : 45} />
              <ambientLight intensity={1.3} />
              <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
              <pointLight position={[-8, -5, -5]} intensity={2.2} color="#0284c7" />
              <pointLight position={[8, -5, 5]} intensity={2.2} color="#b76e41" />
              <directionalLight position={[0, 10, 5]} intensity={1.5} color="#ffffff" />
              <ArchitecturalBuilding step={step} />
            </Canvas>

            <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-wrap items-center justify-between gap-1.5 text-[10px] sm:text-xs text-brand-slate bg-white/95 backdrop-blur-md px-3 py-2 rounded-md border border-slate-200 shadow-xs font-medium">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-copper" /> Heating</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-600" /> Hot Water</span>
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-brand-blueAccent" /> Hydro</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
