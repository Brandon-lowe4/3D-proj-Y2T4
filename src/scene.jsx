import { Center, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { useEffect, useRef } from "react";
import gsap from "gsap";

import { Model as BlackCarModel } from "./black-car.jsx";
import { Model as WhiteCarModel } from "./white-car.jsx";
import { Model as GreyCarModel } from "./grey-car.jsx";


const start = { x: 0.45, y: -0.8, z: 9 };
const end = { x: 0.1, y: 1.6, z: 7 };
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