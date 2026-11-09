import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Trees(props) {
  const { nodes, materials } = useGLTF('/Trees.glb')

  return (
    <group scale={[.2, .2, .2]} {...props}  dispose={null}>
      <pointLight
        intensity={60}
        decay={2}
        distance={0}
        color="#ffffff"
        position={[0.376, 11.9, 5.105]}
      />
      <pointLight
        intensity={60}
        decay={2}
        distance={0}
        color="#ffffff"
        position={[0.376, 11.9, -3.665]}
      />
      
      <group position={[0.337, 1.946, 0.59]} rotation={[0, 0.005, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube542.geometry}
          material={materials.Glass}
        >
        <meshPhysicalMaterial
          color="#ffffff"
          transmission={1}
          roughness={0.1}
          thickness={0.02}
          ior={1.4}
          transparent
          opacity={1}
          depthWrite={false}
        />
      </mesh>

        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube542_1.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube542_2.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube542_3.geometry}
          material={materials['Material.004']}
          material-emissive="#ffffff"
          material-emissiveIntensity={2}
          material-toneMapped={false}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Trees.glb')