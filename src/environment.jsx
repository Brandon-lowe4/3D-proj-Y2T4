import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/exportmodels.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane058.geometry}
        material={materials['Modern white.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane059.geometry}
        material={materials.Glass}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane060.geometry}
        material={materials.Glass}
        position={[-357.003, 9.765, -26.703]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane061.geometry}
        material={materials['Modern wood']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane062.geometry}
        material={materials.Glass}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane063.geometry}
        material={materials.Glass}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane064.geometry}
        material={materials['brown wood']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane065.geometry}
        material={materials['2000s black.001']}
        position={[-341.292, 2.658, -46.798]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane066.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane067.geometry}
        material={materials['brown wood']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane068.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane069.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane070.geometry}
        material={materials['2000s black.001']}
        position={[-349.285, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane071.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane072.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane073.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane074.geometry}
        material={materials['Modern white.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane075.geometry}
        material={materials['Modern white.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane076.geometry}
        material={materials.Glass}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane077.geometry}
        material={materials.Glass}
        position={[-298.713, 9.765, -101.777]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane078.geometry}
        material={materials['2000s black.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane079.geometry}
        material={materials.Glass}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane080.geometry}
        material={materials.Glass}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane081.geometry}
        material={materials['brown wood']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane082.geometry}
        material={materials['2000s black.001']}
        position={[-278.564, 2.658, -86.135]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane083.geometry}
        material={materials['2000s black.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane084.geometry}
        material={materials['Modern wood']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane085.geometry}
        material={materials['2000s black.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane086.geometry}
        material={materials['2000s black.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane087.geometry}
        material={materials['2000s black.001']}
        position={[-289.219, 9.524, -94.092]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane088.geometry}
        material={materials['2000s black.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane089.geometry}
        material={materials['2000s black.001']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane090.geometry}
        material={materials['Modern white']}
        position={[-289.149, 9.544, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane091.geometry}
        material={materials['Modern grey.001']}
        position={[-289.189, 9.524, -88.092]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane092.geometry}
        material={materials['Black wood']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane093.geometry}
        material={materials['Black wood']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane094.geometry}
        material={materials['Modern white']}
        position={[-289.149, 9.544, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane095.geometry}
        material={materials['Modern white.001']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane096.geometry}
        material={materials.Glass}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane097.geometry}
        material={materials.Glass}
        position={[-357.061, 9.765, -79.676]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane098.geometry}
        material={materials['Modern wood']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane099.geometry}
        material={materials.Glass}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane100.geometry}
        material={materials.Glass}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane101.geometry}
        material={materials['brown wood']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane102.geometry}
        material={materials['2000s black.001']}
        position={[-341.559, 2.658, -99.933]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane103.geometry}
        material={materials['2000s black.001']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane104.geometry}
        material={materials['Modern wood']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane105.geometry}
        material={materials['2000s black.001']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane106.geometry}
        material={materials['2000s black.001']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane107.geometry}
        material={materials['2000s black.001']}
        position={[-349.442, 9.524, -89.223]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane108.geometry}
        material={materials['2000s black.001']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane109.geometry}
        material={materials['2000s black.001']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane110.geometry}
        material={materials['Modern white']}
        position={[-343.421, 9.544, -89.335]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane111.geometry}
        material={materials['Black wood']}
        position={[-343.442, 9.524, -89.295]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane112.geometry}
        material={materials['Black wood']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane113.geometry}
        material={materials['Black wood']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane114.geometry}
        material={materials['Modern white']}
        position={[-343.421, 9.544, -89.335]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane115.geometry}
        material={materials['Modern white.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane116.geometry}
        material={materials.Glass}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane117.geometry}
        material={materials.Glass}
        position={[-355.889, 9.765, -149.732]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane118.geometry}
        material={materials['Modern wood']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane119.geometry}
        material={materials.Glass}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane120.geometry}
        material={materials.Glass}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane121.geometry}
        material={materials['brown wood']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane122.geometry}
        material={materials['2000s black.001']}
        position={[-335.872, 2.658, -133.922]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane123.geometry}
        material={materials['2000s black.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane124.geometry}
        material={materials['brown wood']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane125.geometry}
        material={materials['2000s black.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane126.geometry}
        material={materials['2000s black.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane127.geometry}
        material={materials['2000s black.001']}
        position={[-346.46, 9.524, -141.967]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane128.geometry}
        material={materials['2000s black.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane129.geometry}
        material={materials['2000s black.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane130.geometry}
        material={materials['2000s black.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane131.geometry}
        material={materials['Modern white.001']}
        position={[-346.49, 9.524, -135.946]}
        rotation={[0, -0.005, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane132.geometry}
        material={materials['Modern white.001']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane133.geometry}
        material={materials.Glass}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane134.geometry}
        material={materials.Glass}
        position={[-321.701, 9.765, -199.529]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane135.geometry}
        material={materials['Modern wood']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane136.geometry}
        material={materials.Glass}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane137.geometry}
        material={materials.Glass}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane138.geometry}
        material={materials['brown wood']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane139.geometry}
        material={materials['2000s black.001']}
        position={[-301.614, 2.658, -183.806]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane140.geometry}
        material={materials['2000s black.001']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane141.geometry}
        material={materials['Modern wood']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane142.geometry}
        material={materials['2000s black.001']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane143.geometry}
        material={materials['2000s black.001']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane144.geometry}
        material={materials['2000s black.001']}
        position={[-312.238, 9.524, -191.805]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane145.geometry}
        material={materials['2000s black.001']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane146.geometry}
        material={materials['2000s black.001']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane147.geometry}
        material={materials['Modern white']}
        position={[-312.191, 9.544, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane148.geometry}
        material={materials['Black wood']}
        position={[-312.231, 9.524, -185.806]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane149.geometry}
        material={materials['Black wood']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane150.geometry}
        material={materials['Black wood']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane151.geometry}
        material={materials['Modern white']}
        position={[-312.191, 9.544, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane172.geometry}
        material={materials['Modern white.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane173.geometry}
        material={materials.Glass}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane174.geometry}
        material={materials.Glass}
        position={[-357.003, 9.765, -26.703]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane175.geometry}
        material={materials['Modern wood']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane176.geometry}
        material={materials.Glass}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane177.geometry}
        material={materials.Glass}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane178.geometry}
        material={materials['brown wood']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane179.geometry}
        material={materials['2000s black.001']}
        position={[-341.292, 2.658, -46.798]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane180.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane181.geometry}
        material={materials['brown wood']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane182.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane183.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane184.geometry}
        material={materials['2000s black.001']}
        position={[-349.285, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane185.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane186.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane187.geometry}
        material={materials['2000s black.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Big_window_pane188.geometry}
        material={materials['Modern white.001']}
        position={[-343.264, 9.524, -36.17]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Roof tiles']}
        position={[-308.63, 2.638, 16.908]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Roof tiles']}
        position={[-317.428, 6.181, 23.286]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Creamy white.001']}
        position={[-311.582, 5.436, 23.504]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials['Pre 2000s wood']}
        position={[-311.582, 5.436, 23.504]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials['Creamy white.001']}
        position={[-311.582, 5.436, 23.504]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials['Creamy white.001']}
        position={[-311.571, 5.761, 23.504]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials['Creamy white.001']}
        position={[-317.428, 6.181, 23.286]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials['Creamy white.001']}
        position={[-308.635, 2.249, 11.915]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials['Roof tiles']}
        position={[-311.582, 4.801, 23.504]}
        scale={[14.392, 5.291, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-317.428, 6.181, 23.286]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials.Glass}
        position={[-311.571, 5.761, 23.504]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials['pre 2000s wood 2']}
        position={[-317.428, 6.181, 23.286]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials['pre 2000s wood 2']}
        position={[-308.63, 2.638, 16.908]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[-308.635, 2.249, 11.915]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={materials.Glass}
        position={[-308.635, 2.249, 11.867]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials['Creamy white.001']}
        position={[-301.367, 15.81, 20.126]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials['Creamy white.001']}
        position={[-317.428, 6.181, 23.286]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials['Creamy white.001']}
        position={[-305.933, 0.579, 11.452]}
        scale={0.288}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={materials['Roof tiles']}
        position={[-301.367, 15.81, 20.126]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube106.geometry}
        material={materials['Pre 2000s wood']}
        position={[-165.091, 5.435, 23.366]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube107.geometry}
        material={materials['Creamy white.001']}
        position={[-165.079, 5.761, 23.366]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube108.geometry}
        material={materials['Roof tiles']}
        position={[-165.091, 4.8, 23.366]}
        scale={[14.392, 5.291, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube109.geometry}
        material={nodes.Cube109.material}
        position={[-170.937, 6.181, 23.148]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube110.geometry}
        material={materials.Glass}
        position={[-165.079, 5.761, 23.366]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube111.geometry}
        material={materials['pre 2000s wood 2']}
        position={[-162.138, 2.638, 16.77]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube112.geometry}
        material={nodes.Cube112.material}
        position={[-162.143, 2.248, 11.777]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube113.geometry}
        material={materials.Glass}
        position={[-162.143, 2.248, 11.73]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube114.geometry}
        material={materials['Creamy white.001']}
        position={[-154.876, 15.81, 19.988]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube115.geometry}
        material={materials['Creamy white.001']}
        position={[-159.441, 0.578, 11.314]}
        scale={0.288}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube116.geometry}
        material={materials['Roof tiles']}
        position={[-162.138, 2.638, 16.77]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube117.geometry}
        material={materials['Roof tiles']}
        position={[-170.937, 6.181, 23.148]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube118.geometry}
        material={materials['Creamy white.001']}
        position={[-165.091, 5.435, 23.366]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube119.geometry}
        material={materials['Creamy white.001']}
        position={[-165.091, 5.435, 23.366]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube120.geometry}
        material={materials['Creamy white.001']}
        position={[-170.937, 6.181, 23.148]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube121.geometry}
        material={materials['Creamy white.001']}
        position={[-162.143, 2.248, 11.777]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube122.geometry}
        material={materials['pre 2000s wood 2']}
        position={[-170.937, 6.181, 23.148]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube123.geometry}
        material={materials['Creamy white.001']}
        position={[-170.937, 6.181, 23.148]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube124.geometry}
        material={materials['Roof tiles']}
        position={[-154.876, 15.81, 19.988]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube125.geometry}
        material={materials['Pre 2000s wood']}
        position={[-165.091, 5.435, 23.366]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube126.geometry}
        material={materials['red brick']}
        position={[-227.752, 5.157, -36.291]}
        rotation={[0, -1.564, 0]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube127.geometry}
        material={materials.Cream}
        position={[-227.752, 5.483, -36.28]}
        rotation={[0, -1.564, 0]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube128.geometry}
        material={materials['Roof tiles']}
        position={[-227.752, 4.522, -36.291]}
        rotation={[0, -1.564, 0]}
        scale={[14.392, 5.291, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube129.geometry}
        material={nodes.Cube129.material}
        position={[-227.575, 5.903, -42.139]}
        rotation={[0, 0.007, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube130.geometry}
        material={materials.Glass}
        position={[-227.752, 5.483, -36.28]}
        rotation={[0, -1.564, 0]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube131.geometry}
        material={materials['Red brick 2']}
        position={[-221.135, 2.36, -33.385]}
        rotation={[Math.PI, -0.007, Math.PI]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube132.geometry}
        material={nodes.Cube132.material}
        position={[-216.142, 1.97, -33.426]}
        rotation={[0, -1.564, 0]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube133.geometry}
        material={materials.Glass}
        position={[-216.095, 1.97, -33.426]}
        rotation={[0, -1.564, 0]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube134.geometry}
        material={materials['Creamy white.001']}
        position={[-224.302, 15.532, -26.1]}
        rotation={[0, -1.564, 0]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube135.geometry}
        material={materials.Cream}
        position={[-215.66, 0.3, -30.727]}
        rotation={[0, -1.564, 0]}
        scale={0.288}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube136.geometry}
        material={materials['Roof tiles']}
        position={[-221.135, 2.36, -33.385]}
        rotation={[Math.PI, -0.007, Math.PI]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube137.geometry}
        material={materials['Roof tiles']}
        position={[-227.575, 5.903, -42.139]}
        rotation={[0, 0.007, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube138.geometry}
        material={materials['Creamy white.001']}
        position={[-227.752, 5.157, -36.291]}
        rotation={[0, -1.564, 0]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube139.geometry}
        material={materials['Creamy white.001']}
        position={[-227.752, 5.157, -36.291]}
        rotation={[0, -1.564, 0]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube140.geometry}
        material={materials.Cream}
        position={[-227.575, 5.903, -42.139]}
        rotation={[0, 0.007, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube141.geometry}
        material={materials.Cream}
        position={[-216.142, 1.97, -33.426]}
        rotation={[0, -1.564, 0]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube142.geometry}
        material={materials['Red brick 2']}
        position={[-227.575, 5.903, -42.139]}
        rotation={[0, 0.007, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube143.geometry}
        material={materials['Creamy white.001']}
        position={[-227.575, 5.903, -42.139]}
        rotation={[0, 0.007, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube144.geometry}
        material={materials['Roof tiles']}
        position={[-224.302, 15.532, -26.1]}
        rotation={[0, -1.564, 0]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube145.geometry}
        material={materials['pre 2000s yellow']}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube146.geometry}
        material={materials['Material.005']}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube147.geometry}
        material={materials.Glass}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube148.geometry}
        material={materials['pre 2000s yellow']}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube149.geometry}
        material={materials['Creamy white.001']}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube150.geometry}
        material={materials['Pre 2000s blue']}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube151.geometry}
        material={materials['Material.005']}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube152.geometry}
        material={materials.Glass}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube153.geometry}
        material={materials['Pre 2000s blue']}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube154.geometry}
        material={materials['Creamy white.001']}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube155.geometry}
        material={materials['Pre 2000s red']}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube156.geometry}
        material={materials['Material.005']}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube157.geometry}
        material={materials.Glass}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube158.geometry}
        material={materials['Pre 2000s red']}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube159.geometry}
        material={materials['Creamy white.001']}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube160.geometry}
        material={materials['yellow wood']}
        position={[-246.682, 5.157, 23.371]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube161.geometry}
        material={materials.Cream}
        position={[-246.671, 5.483, 23.371]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube162.geometry}
        material={materials.roofing}
        position={[-246.682, 4.522, 23.371]}
        scale={[14.392, 5.291, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube163.geometry}
        material={nodes.Cube163.material}
        position={[-252.528, 5.903, 23.153]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube164.geometry}
        material={materials.Glass}
        position={[-246.671, 5.483, 23.371]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube165.geometry}
        material={materials['Yellow wood 2']}
        position={[-243.73, 2.36, 16.775]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube166.geometry}
        material={nodes.Cube166.material}
        position={[-243.735, 1.97, 11.782]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube167.geometry}
        material={materials.Glass}
        position={[-243.735, 1.97, 11.735]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube168.geometry}
        material={materials['Creamy white.001']}
        position={[-236.467, 15.532, 19.993]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube169.geometry}
        material={materials.Cream}
        position={[-241.033, 0.3, 11.319]}
        scale={0.288}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube170.geometry}
        material={materials.roofing}
        position={[-243.73, 2.36, 16.775]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube171.geometry}
        material={materials.roofing}
        position={[-252.528, 5.903, 23.153]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube172.geometry}
        material={materials['Creamy white.001']}
        position={[-246.682, 5.157, 23.371]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube173.geometry}
        material={materials['Creamy white.001']}
        position={[-235.676, 5.157, -41.009]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube174.geometry}
        material={materials.Cream}
        position={[-252.528, 5.903, 23.153]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube175.geometry}
        material={materials.Cream}
        position={[-243.735, 1.97, 11.782]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube176.geometry}
        material={materials['Yellow wood 2']}
        position={[-252.528, 5.903, 23.153]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube177.geometry}
        material={materials['Creamy white.001']}
        position={[-252.528, 5.903, 23.153]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube178.geometry}
        material={materials['Roof tiles']}
        position={[-236.467, 15.532, 19.993]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube179.geometry}
        material={materials['pre 2000s yellow']}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube180.geometry}
        material={materials['Material.005']}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube181.geometry}
        material={materials.Glass}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube182.geometry}
        material={materials['pre 2000s yellow']}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube183.geometry}
        material={materials['Creamy white.001']}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube203.geometry}
        material={materials['yellow wood']}
        position={[-290.882, 5.157, -42.925]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube204.geometry}
        material={materials.Cream}
        position={[-290.893, 5.483, -42.925]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube205.geometry}
        material={materials.roofing}
        position={[-290.882, 4.522, -42.925]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[14.392, 5.291, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube206.geometry}
        material={nodes.Cube206.material}
        position={[-285.036, 5.903, -42.697]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube207.geometry}
        material={materials.Glass}
        position={[-290.893, 5.483, -42.925]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[12.817, 5.776, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube208.geometry}
        material={materials['Yellow wood 2']}
        position={[-293.845, 2.36, -36.334]}
        rotation={[0, 1.569, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube209.geometry}
        material={nodes.Cube209.material}
        position={[-293.849, 1.97, -31.341]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube210.geometry}
        material={materials.Glass}
        position={[-293.849, 1.97, -31.293]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube211.geometry}
        material={materials['Creamy white.001']}
        position={[-301.102, 15.532, -39.564]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube212.geometry}
        material={materials.Cream}
        position={[-296.552, 0.3, -30.882]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={0.288}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube213.geometry}
        material={materials.roofing}
        position={[-293.845, 2.36, -36.334]}
        rotation={[0, 1.569, 0]}
        scale={[3.178, 2.5, 3.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube214.geometry}
        material={materials.roofing}
        position={[-285.036, 5.903, -42.697]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube215.geometry}
        material={materials['Creamy white.001']}
        position={[-290.882, 5.157, -42.925]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube216.geometry}
        material={materials['Creamy white.001']}
        position={[-290.882, 5.157, -42.925]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[12.817, 5.094, 9.266]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube217.geometry}
        material={materials.Cream}
        position={[-285.036, 5.903, -42.697]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube218.geometry}
        material={materials.Cream}
        position={[-293.849, 1.97, -31.341]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[1.5, 2, 0.32]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube219.geometry}
        material={materials['Yellow wood 2']}
        position={[-285.036, 5.903, -42.697]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube220.geometry}
        material={materials['Creamy white.001']}
        position={[-285.036, 5.903, -42.697]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[12.135, 2.786, 5.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube221.geometry}
        material={materials['Roof tiles']}
        position={[-301.102, 15.532, -39.564]}
        rotation={[-Math.PI, 0.002, -Math.PI]}
        scale={[0.965, 2.957, 0.965]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube222.geometry}
        material={materials['Pre 2000s red']}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube223.geometry}
        material={materials['Material.005']}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube224.geometry}
        material={materials.Glass}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube225.geometry}
        material={materials['Pre 2000s red']}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube226.geometry}
        material={materials['Creamy white.001']}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube227.geometry}
        material={materials['2000s black.001']}
        position={[-349.964, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube228.geometry}
        material={materials.Glass}
        position={[-349.964, 9.345, -45.973]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube229.geometry}
        material={nodes.Cube229.material}
        position={[-351.311, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube230.geometry}
        material={materials.Glass}
        position={[-351.311, 9.345, -45.973]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube231.geometry}
        material={materials['2000s black.001']}
        position={[-351.311, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube232.geometry}
        material={materials['2000s black.001']}
        position={[-349.964, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube233.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube234.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube235.geometry}
        material={materials.Glass}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube236.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube237.geometry}
        material={materials['Creamy white.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube238.geometry}
        material={materials['2000s black.001']}
        position={[-279.419, 9.345, -94.804]}
        rotation={[0, -1.567, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube239.geometry}
        material={materials.Glass}
        position={[-279.419, 9.345, -94.804]}
        rotation={[0, -1.567, 0]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube240.geometry}
        material={nodes.Cube240.material}
        position={[-279.424, 9.345, -96.151]}
        rotation={[0, -1.567, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube241.geometry}
        material={materials.Glass}
        position={[-279.424, 9.345, -96.151]}
        rotation={[0, -1.567, 0]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube242.geometry}
        material={materials['2000s black.001']}
        position={[-279.424, 9.345, -96.151]}
        rotation={[0, -1.567, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube243.geometry}
        material={materials['2000s black.001']}
        position={[-279.419, 9.345, -94.804]}
        rotation={[0, -1.567, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube244.geometry}
        material={materials['Material.004']}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube245.geometry}
        material={materials['2000s black.001']}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube246.geometry}
        material={materials.Glass}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube247.geometry}
        material={materials['2000s black.001']}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube248.geometry}
        material={materials['Creamy white.001']}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube249.geometry}
        material={materials['Modern grey.001']}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube250.geometry}
        material={materials['2000s black.001']}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube251.geometry}
        material={materials.Glass}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube252.geometry}
        material={materials['2000s black.001']}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube253.geometry}
        material={materials['Creamy white.001']}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube254.geometry}
        material={materials['2000s black.001']}
        position={[-350.222, 9.345, -99.018]}
        rotation={[0, 0.01, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube255.geometry}
        material={materials.Glass}
        position={[-350.222, 9.345, -99.018]}
        rotation={[0, 0.01, 0]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube256.geometry}
        material={nodes.Cube256.material}
        position={[-351.569, 9.345, -99.004]}
        rotation={[0, 0.01, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube257.geometry}
        material={materials.Glass}
        position={[-351.569, 9.345, -99.004]}
        rotation={[0, 0.01, 0]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube258.geometry}
        material={materials['2000s black.001']}
        position={[-351.569, 9.345, -99.004]}
        rotation={[0, 0.01, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube259.geometry}
        material={materials['2000s black.001']}
        position={[-350.222, 9.345, -99.018]}
        rotation={[0, 0.01, 0]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube260.geometry}
        material={materials['Modern grey.001']}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube261.geometry}
        material={materials['2000s black.001']}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube262.geometry}
        material={materials.Glass}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube263.geometry}
        material={materials['2000s black.001']}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube264.geometry}
        material={materials['Creamy white.001']}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube265.geometry}
        material={materials['2000s black.001']}
        position={[-336.654, 9.345, -142.598]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube266.geometry}
        material={materials.Glass}
        position={[-336.654, 9.345, -142.598]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube267.geometry}
        material={nodes.Cube267.material}
        position={[-336.648, 9.345, -143.945]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube268.geometry}
        material={materials.Glass}
        position={[-336.648, 9.345, -143.945]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube269.geometry}
        material={materials['2000s black.001']}
        position={[-336.648, 9.345, -143.945]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube270.geometry}
        material={materials['2000s black.001']}
        position={[-336.654, 9.345, -142.598]}
        rotation={[Math.PI, -1.566, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube271.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube272.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube273.geometry}
        material={materials.Glass}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube274.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube275.geometry}
        material={materials['Creamy white.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube276.geometry}
        material={materials['2000s black.001']}
        position={[-302.435, 9.345, -192.479]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube277.geometry}
        material={materials.Glass}
        position={[-302.435, 9.345, -192.479]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube278.geometry}
        material={nodes.Cube278.material}
        position={[-302.434, 9.345, -193.826]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube279.geometry}
        material={materials.Glass}
        position={[-302.434, 9.345, -193.826]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube280.geometry}
        material={materials['2000s black.001']}
        position={[-302.434, 9.345, -193.826]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube281.geometry}
        material={materials['2000s black.001']}
        position={[-302.435, 9.345, -192.479]}
        rotation={[Math.PI, -1.57, Math.PI]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube282.geometry}
        material={materials['Modern grey.001']}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube283.geometry}
        material={materials['2000s black.001']}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube284.geometry}
        material={materials.Glass}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube285.geometry}
        material={materials['2000s black.001']}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube286.geometry}
        material={materials['Creamy white.001']}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube287.geometry}
        material={materials['Pre 2000s blue']}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube288.geometry}
        material={materials['Material.005']}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube289.geometry}
        material={materials.Glass}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube290.geometry}
        material={materials['Pre 2000s blue']}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube291.geometry}
        material={materials['Creamy white.001']}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube297.geometry}
        material={materials['Material.004']}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube298.geometry}
        material={materials['2000s black.001']}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube299.geometry}
        material={materials.Glass}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube300.geometry}
        material={materials['2000s black.001']}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube301.geometry}
        material={materials['Creamy white.001']}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube308.geometry}
        material={materials['2000s black.001']}
        position={[-349.964, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube309.geometry}
        material={materials.Glass}
        position={[-349.964, 9.345, -45.973]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube310.geometry}
        material={nodes.Cube310.material}
        position={[-351.311, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube311.geometry}
        material={materials.Glass}
        position={[-351.311, 9.345, -45.973]}
        scale={[0.552, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube312.geometry}
        material={materials['2000s black.001']}
        position={[-351.311, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube313.geometry}
        material={materials['2000s black.001']}
        position={[-349.964, 9.345, -45.973]}
        scale={[0.531, 2.549, 0.178]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={nodes.Cylinder003.material}
        position={[-309.519, 1.961, 11.731]}
        rotation={[-1.322, -1.103, -1.248]}
        scale={2.319}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-163.027, 1.96, 11.593]}
        rotation={[-1.322, -1.103, -1.248]}
        scale={2.319}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={nodes.Cylinder005.material}
        position={[-215.965, 1.682, -34.311]}
        rotation={[-2.686, -0.117, -3.038]}
        scale={2.319}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={nodes.Cylinder006.material}
        position={[-244.618, 1.682, 11.598]}
        rotation={[-1.322, -1.103, -1.248]}
        scale={2.319}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={nodes.Cylinder008.material}
        position={[-292.965, 1.682, -31.155]}
        rotation={[-1.816, 1.103, 1.89]}
        scale={2.319}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_004.geometry}
        material={materials['house brown wood']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_005.geometry}
        material={materials['house brown wood']}
        position={[-289.199, 9.524, -88.07]}
        rotation={[0, 0.003, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_006.geometry}
        material={materials['Black wood']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_007.geometry}
        material={materials['Black wood 2']}
        position={[-343.421, 9.524, -89.285]}
        rotation={[-Math.PI, 1.56, -Math.PI]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_008.geometry}
        material={materials['Black wood']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hide_009.geometry}
        material={materials['Black wood 2']}
        position={[-312.241, 9.524, -185.784]}
        rotation={[0, -0.001, 0]}
        scale={[10, 3.5, 3.143]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Concrete}
        position={[-164.865, 0, 19.128]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials.Road}
        position={[-241.486, 0.1, -9.666]}
        scale={[168.518, 1, 9.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials.Concrete}
        position={[-226.11, 0, -32.968]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials.Concrete}
        position={[-246.371, 0, 19.238]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane006.geometry}
        material={materials.Concrete}
        position={[-311.002, 0, 19.238]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Concrete}
        position={[-290.91, 0, -32.965]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Concrete}
        position={[-317.556, 0.166, -186.941]}
        rotation={[0, 1.568, 0]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane009.geometry}
        material={materials.Concrete}
        position={[-344.425, 0, -33.309]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials.Concrete}
        position={[-291.017, 0.166, -91.65]}
        rotation={[Math.PI, -0.001, Math.PI]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane011.geometry}
        material={materials.Concrete}
        position={[-344.519, 0.166, -83.959]}
        rotation={[Math.PI, -0.008, Math.PI]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane012.geometry}
        material={materials.Concrete}
        position={[-344.425, 0, -135.024]}
        scale={[16.904, 16.904, 13.482]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane013.geometry}
        material={materials.Road}
        position={[-317.67, 0.1, -48.712]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[121.166, 1, 9.85]}
      />
      <directionalLight
        intensity={10}
        decay={2}
        position={[10.511, 35.491, 55.48]}
        rotation={[0.683, -1.519, 2.85]}
      />
      <group
        position={[-307.028, 1.946, -111.664]}
        rotation={[0, 1.522, 0]}
        scale={[0.607, 1.835, 0.607]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube380.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube380_1.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube380_2.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube380_3.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-180.615, 1.946, 1.247]} scale={[0.607, 1.835, 0.607]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube244_1.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube244_2.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube244_3.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube244_4.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[-328.43, 1.946, -50.158]}
        rotation={[Math.PI, -1.522, Math.PI]}
        scale={[0.607, 1.835, 0.607]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube395.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube395_1.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube395_2.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube395_3.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group
        position={[-328.582, 1.946, -148.269]}
        rotation={[0, -0.055, 0]}
        scale={[0.607, 1.835, 0.607]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube510.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube510_1.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube510_2.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube510_3.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-232.943, 1.946, 1.357]} scale={[0.607, 1.835, 0.607]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube313_1.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube313_2.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube313_3.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube313_4.geometry}
          material={materials['Material.004']}
        />
      </group>
      <group position={[-277.65, 1.946, -21.745]} scale={[0.607, 1.835, 0.607]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube314.geometry}
          material={materials.Glass}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube314_1.geometry}
          material={materials['og material']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube314_2.geometry}
          material={materials['pre 2000s yellow']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube314_3.geometry}
          material={materials['Material.004']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide012.geometry}
        material={nodes.Unhide012.material}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide013.geometry}
        material={materials['Creamy white.001']}
        position={[-203.784, -0.109, -14.078]}
        rotation={[0, -1.568, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide014.geometry}
        material={nodes.Unhide014.material}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide015.geometry}
        material={materials['Creamy white.001']}
        position={[-234.178, -0.109, -5.535]}
        rotation={[0, 1.561, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide016.geometry}
        material={nodes.Unhide016.material}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide017.geometry}
        material={materials['Creamy white.001']}
        position={[-170.737, 0.21, 5.206]}
        rotation={[-Math.PI, 0.008, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide018.geometry}
        material={nodes.Unhide018.material}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide019.geometry}
        material={materials['Creamy white.001']}
        position={[-252.087, 0.19, 4.682]}
        rotation={[-Math.PI, 0.012, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide020.geometry}
        material={nodes.Unhide020.material}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide021.geometry}
        material={materials['Creamy white.001']}
        position={[-283.549, 0.098, -14.336]}
        rotation={[Math.PI, -1.569, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide022.geometry}
        material={nodes.Unhide022.material}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide023.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide024.geometry}
        material={nodes.Unhide024.material}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide025.geometry}
        material={materials['2000s black.001']}
        position={[-317.379, -0.109, -52.141]}
        rotation={[0, -0.002, 0]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide026.geometry}
        material={nodes.Unhide026.material}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide027.geometry}
        material={materials['2000s black.001']}
        position={[-314.209, -0.109, -37.552]}
        rotation={[-Math.PI, 0.561, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide028.geometry}
        material={nodes.Unhide028.material}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide029.geometry}
        material={materials['2000s black.001']}
        position={[-335.28, -0.109, -79.876]}
        rotation={[Math.PI, -1.541, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide030.geometry}
        material={nodes.Unhide030.material}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide031.geometry}
        material={materials['2000s black.001']}
        position={[-333.834, 0.216, -127.004]}
        rotation={[Math.PI, -1.565, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide032.geometry}
        material={nodes.Unhide032.material}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide033.geometry}
        material={materials['2000s black.001']}
        position={[-321.739, -0.109, -177.747]}
        rotation={[-Math.PI, 0.04, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide034.geometry}
        material={nodes.Unhide034.material}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide035.geometry}
        material={materials['Creamy white.001']}
        position={[-302.108, -0.109, -6.034]}
        rotation={[-Math.PI, 0.978, -Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide038.geometry}
        material={nodes.Unhide038.material}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Unhide039.geometry}
        material={materials['2000s black.001']}
        position={[-311.33, -0.109, -163.119]}
        rotation={[Math.PI, -0.005, Math.PI]}
        scale={[2.316, 2.434, 4.119]}
      />
    </group>
  )
}

useGLTF.preload('/exportmodels.glb')