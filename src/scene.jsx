import React, {useRef, useEffect} from "react"
import { useFrame } from '@react-three/fiber'
import { Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trees } from './Trees.jsx';

gsap.registerPlugin(ScrollTrigger)

const Scene = ({progress}) =>{
        const cameraRef = useRef(null);
        useFrame(() => {
            console.log(cameraRef.current.position)
            cameraRef.current.lookAt(0, 0, 0)

        })

    useEffect(() => {
        const updateCamPos = () => {
            const positions = [
                [5.1, -0.1, 0],
                [4.7, 1.6, 4.2],
                [3.7, .9, -3.3],
                [3.8, 2.5, 2.2],
            ];

            if(progress>= 1){
                gsap.to(cameraRef.current.position, {
                    x: 3.8,
                    y: 2.5,
                    z: 2.2,
                    duration: 0.5,
                    ease: "power1.Out",
            });

            }
            else{
                const segmentProgress = 1 / 3;

            const segmentIndex = Math.floor(progress / segmentProgress);

            const percentage = (progress % segmentProgress) / segmentProgress;

            const [startX, startY, startZ] = positions[segmentIndex];
            const [endX, endY, endZ] = positions[segmentIndex + 1];
            const x = startX + (endX - startX) * percentage;
            const y = startY + (endY - startY) * percentage;
            const z = startZ + (endZ - startZ) * percentage;

            gsap.to(cameraRef.current.position, {
                x: x,
                y: y,
                z: z,
                duration: 0.5,
                ease: "power1.Out"
            })
        }
        
        };
        updateCamPos()
    }, [progress]);

    return (
        <>  
            {/* {<OrbitControls/>} */}
            <PerspectiveCamera
            ref={cameraRef}
            fov={45}
            near={.1}
            far={10000}
            makeDefault
            position={[5.1, -0.1, 0]}
            />
            <Environment preset="city"/>
            <Center>
                <Trees/>
            </Center>
            <axesHelper args={[500]}/>
        </>
    )
}

export default Scene
