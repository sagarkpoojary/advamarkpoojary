
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Generate random points in a sphere
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = radius * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    points[i * 3] = x;
    points[i * 3 + 1] = y;
    points[i * 3 + 2] = z;
  }
  return points;
}

const StarField = (props: any) => {
  const ref = useRef<THREE.Points>(null!);
  
  // Generate points once
  const sphere = useMemo(() => generateSpherePoints(3000, 1.5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  // Fixed: Cast 'group' to any to avoid "Property 'group' does not exist on type 'JSX.IntrinsicElements'"
  const Group = 'group' as any;

  return (
    <Group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#d4af37" // Gold-500
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </Group>
  );
};

const ParticleBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full bg-zinc-950 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarField />
      </Canvas>
      {/* Gradient Overlay for Fade Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10" />
    </div>
  );
};

export default ParticleBackground;
