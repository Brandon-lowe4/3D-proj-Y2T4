import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/black-car.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube039.geometry}
        material={materials['2000s black.001']}
        position={[-12.49, -0.109, 21.213]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube040.geometry}
        material={materials['2000s black.001']}
        position={[-12.49, -0.109, 21.213]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />



      <group position={[-12.49, -0.109, 21.213]} rotation={[-Math.PI, 0.008, -Math.PI]} scale={[2.316, 2.434, 4.119]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials.Glass}
        >
        <meshPhysicalMaterial
          color="#ffffff"
          roughness={0.1}
          thickness={0.02}
          ior={1.4}
          transparent
          opacity={1}
          depthWrite={false}
        />
        </mesh>
      </group>

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube042.geometry}
        material={materials['2000s black.001']}
        position={[-12.49, -0.109, 21.213]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube043.geometry}
        material={materials['Creamy white.001']}
        position={[-12.49, -0.109, 21.213]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />

      <pointLight
        intensity={1000}
        decay={2}
        distance={0}
        color="#ffffff"
        position={[10.511, 35.491, 55.48]}
        rotation={[0.683, -1.519, 2.85]}
      />

      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide006.geometry}
        material={nodes.Unhide006.material}
        position={[-12.49, -0.109, 21.213]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide007.geometry}
        material={materials['2000s black.001']}
        position={[-12.49, -0.109, 21.213]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
    </group>
  )
}

useGLTF.preload('/black-car.glb')