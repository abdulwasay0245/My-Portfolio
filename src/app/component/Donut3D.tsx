"use client";

import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, Torus } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
  const donutRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!donutRef.current) return;

    const ctx = gsap.context(() => {
      // Rotation
      gsap.to(donutRef.current!.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      
      // Y-axis translation
      gsap.to(donutRef.current!.position, {
        y: -4,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} />
      
      {/* Studio environment for high-contrast B&W reflections */}
      <Environment preset="studio" />

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <Torus 
            ref={donutRef}
            args={[0.4, 0.12, 64, 128]} // Smaller size and higher poly count for smooth realistic look
            position={[3, 1.5, 0]} 
            rotation={[Math.PI / 4, Math.PI / 4, 0]}
        >
          {/* Realistic metallic material (chrome/silver) that renders as B&W */}
          <meshPhysicalMaterial 
            color="#dddddd"
            metalness={1}
            roughness={0.05}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Torus>
      </Float>
    </>
  );
};

export default function Donut3D() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 w-full h-full">
      <Canvas 
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
