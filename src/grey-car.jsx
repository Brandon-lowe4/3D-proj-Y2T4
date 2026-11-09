import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/greycar.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube049.geometry}
        material={materials['Modern grey']}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube050.geometry}
        material={materials['2000s black']}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube051.geometry}
        material={materials['Glass.001']}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />

      

      <group position={[25.934, -0.109, -173.915]} rotation={[-Math.PI, 0.008, -Math.PI]} scale={[2.316, 2.434, 4.119]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
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
        geometry={nodes.Cube052.geometry}
        material={materials['2000s black']}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube053.geometry}
        material={materials['Creamy white']}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <directionalLight
        intensity={1}
        decay={2}
        position={[10.511, 35.491, 55.48]}
        rotation={[0.683, -1.519, 2.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide010.geometry}
        material={nodes.Unhide010.material}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide011.geometry}
        material={materials['2000s black']}
        position={[25.934, -0.109, -173.915]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
    </group>
  )
}

useGLTF.preload('/greycar.glb')