import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/whitecar.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube044.geometry}
        material={materials['Material.004']}
        position={[-12.745, -0.109, 21.26]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube045.geometry}
        material={materials['2000s black.002']}
        position={[-12.745, -0.109, 21.26]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <group position={[-12.745, -0.109, 21.26]} rotation={[-Math.PI, 0.008, -Math.PI]} scale={[2.316, 2.434, 4.119]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
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
        geometry={nodes.Cube047.geometry}
        material={materials['2000s black.002']}
        position={[-12.745, -0.109, 21.26]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube048.geometry}
        material={materials['Creamy white.002']}
        position={[-12.745, -0.109, 21.26]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <pointLight
        intensity={0}
        decay={2}
        distance={0}
        color="#ffffff"
        position={[10.511, 35.491, 55.48]}
        rotation={[0.683, -1.519, 2.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide008.geometry}
        material={nodes.Unhide008.material}
        position={[-12.745, -0.109, 21.26]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide009.geometry}
        material={materials['2000s black.002']}
        position={[-12.745, -0.109, 21.26]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
    </group>
  )
}

useGLTF.preload('/whitecar.glb')