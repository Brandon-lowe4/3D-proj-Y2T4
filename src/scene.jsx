import { Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Model as BlackCarModel } from "./black-car.jsx";
import { Model as WhiteCarModel } from "./white-car.jsx";
import { Model as GreyCarModel } from "./grey-car.jsx";



const start = { x: 0.45, y: -0.8, z: 9 };
const end = { x: 0.45, y: 4.5, z: 9 };
const Scene = ({ progress, carColor = "black" }) => {
    const CarModel =
        carColor === "white" ? WhiteCarModel :
            carColor === "grey" ? GreyCarModel :
                BlackCarModel;

    const car = useRef();
    const cam = useRef();

    useEffect(() => {
        const t = gsap.utils.interpolate(start, end, progress);
        gsap.to(car.current.rotation, { x: t.x, y: t.y, duration: 0.5, overwrite: true });
        gsap.to(cam.current.position, { z: t.z, duration: 0.5, overwrite: true });
    }, [progress]);

    // const cameraRef = useRef(null);

    // useEffect(() => {
    //     const positions = [
    //     //     [10, 1, 7.6],
    //     //     [1, -.1, 6.6],
    //     // ];

    //     // const segmentProgress = 1 / (positions.length - 1);
    //     // const segmentIndex = Math.min(
    //     //     Math.floor(progress / segmentProgress),
    //     //     positions.length - 2,
    //     // );
    //     // const percentage = (progress - segmentIndex * segmentProgress) / segmentProgress;
    //     // const [startX, startY, startZ] = positions[segmentIndex];
    //     // const [endX, endY, endZ] = positions[segmentIndex + 1];

    //     // const tween = gsap.to(cameraRef.current.position, {
    //     //     x: startX + (endX - startX) * percentage,
    //     //     y: startY + (endY - startY) * percentage,
    //     //     z: startZ + (endZ - startZ) * percentage,
    //     //     duration: 0.5,
    //     //     ease: "power1.out",
    //     //     overwrite: true,
    //     //     onUpdate: () => cameraRef.current.lookAt(0, 0, 0),
    //     // });

    //     // return () => tween.kill();
    // }, [progress]);

    return (
        <>
            <PerspectiveCamera
                ref={cam}
                fov={45}
                near={.3}
                far={1000}
                makeDefault
                position={[0, 0, start.z]}
            />

            {/* <OrbitControls
                makeDefault
                target={[0, 0, 0]}


                onChange={() => {
                    console.log(cameraRef.current.position.toArray());
               }}          
            /> */}

            <Environment preset="city" />
            <group ref={car} position={[0, -.5, 0]}>
                <Center>
                    <CarModel scale={.6} />
                </Center>
            </group>
        </>
    )
}

export default Scene
