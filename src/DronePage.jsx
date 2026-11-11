import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { MathUtils, Vector3 } from "three";
import { Model as EnvironmentModel } from "./environment.jsx";
import "./App.css";

const CAMERA_STOPS = [
  { camera: [-116.0027, 6.4, -11], target: [-225.753, 6.861, -2.1242] },
  { camera: [-152.8, 6.4, -11], target: [-259.2003, 6.98467, -1.4631] },
  { camera: [-152.8, 6.4, -11], target: [-152.78, 6.861, 7] },
  { camera: [-180.2, 6.4, -19], target: [-178.2, 6.8, 6.9] },
  { camera: [-202, 7.8, -15], target: [-222.8, 6.8, 2.2] },
  { camera: [-245.1, 7.6, -25.7], target: [-245.4, 6.8, 6.3] },
  { camera: [-241, 6.7, -12], target: [-254.4, 6.8, -10.8] },
  { camera: [-305.5, 6.4, -6.3], target: [-317.3, 6.8, -12.7] },
  { camera: [-317.3, 7, -36], target: [-318, 6.8, -49.5] },
  { camera: [-307.3, 6.8, -109.9], target: [-317, 6.8, -118.6] },
  { camera: [-315, 6.6, -145.9], target: [-315, 6.8, -158.9] },
];
const SCENE_COUNT = CAMERA_STOPS.length;
const INITIAL_CAMERA_TARGET = new Vector3(...CAMERA_STOPS[0].target);

function logCameraCoordinates(controls) {
  const { x, y, z } = controls.object.position;
  console.log("Camera position:", { x, y, z });
  console.log("Camera look-at target:", controls.target.toArray());
}

function ScrollCamera({ progressRef, manualControlRef, controlsRef }) {
  const cameraStart = useRef(new Vector3());
  const cameraEnd = useRef(new Vector3());
  const targetStart = useRef(new Vector3());
  const targetEnd = useRef(new Vector3());
  const desiredCamera = useRef(new Vector3());
  const desiredTarget = useRef(new Vector3());
  const currentTarget = useRef(new Vector3(...CAMERA_STOPS[0].target));
  useFrame(({ camera }, delta) => {
    if (manualControlRef.current) return;

    const pathProgress = progressRef.current;
    const startIndex = Math.min(Math.floor(pathProgress), CAMERA_STOPS.length - 2);
    const blend = pathProgress - startIndex;
    const start = CAMERA_STOPS[startIndex];
    const end = CAMERA_STOPS[startIndex + 1];
    const smoothing = 1 - Math.exp(-delta * 5);

    cameraStart.current.set(...start.camera);
    cameraEnd.current.set(...end.camera);
    targetStart.current.set(...start.target);
    targetEnd.current.set(...end.target);
    desiredCamera.current.lerpVectors(cameraStart.current, cameraEnd.current, blend);
    desiredTarget.current.lerpVectors(targetStart.current, targetEnd.current, blend);

    camera.position.lerp(desiredCamera.current, smoothing);
    currentTarget.current.lerp(desiredTarget.current, smoothing);
    controlsRef.current?.target.copy(currentTarget.current);
    camera.lookAt(currentTarget.current);
  });

  return null;
}

function KeyboardCamera({ controlsRef, manualControlRef }) {
  const keys = useRef(new Set());
  const forward = useRef(new Vector3());
  const right = useRef(new Vector3());
  const movement = useRef(new Vector3());

  useEffect(() => {
    const movementKeys = new Set(["w", "a", "s", "d"]);
    const onKeyDown = (event) => {
      const key = event.key.toLowerCase();
      if (!movementKeys.has(key)) return;
      event.preventDefault();
      keys.current.add(key);
      manualControlRef.current = true;
    };
    const onKeyUp = (event) => {
      const key = event.key.toLowerCase();
      if (!movementKeys.has(key)) return;
      keys.current.delete(key);
      if (keys.current.size !== 0) return;

      const controls = controlsRef.current;
      if (!controls) return;
      logCameraCoordinates(controls);
    };
    const onBlur = () => keys.current.clear();

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, [controlsRef, manualControlRef]);

  useFrame(({ camera }, delta) => {
    const controls = controlsRef.current;
    if (!controls || keys.current.size === 0) return;

    const keySet = keys.current;
    const forwardAmount = Number(keySet.has("w")) - Number(keySet.has("s"));
    const rightAmount = Number(keySet.has("d")) - Number(keySet.has("a"));
    camera.getWorldDirection(forward.current);
    forward.current.y = 0;
    forward.current.normalize();
    right.current.crossVectors(forward.current, camera.up).normalize();
    movement.current
      .set(0, 0, 0)
      .addScaledVector(forward.current, forwardAmount)
      .addScaledVector(right.current, rightAmount)
      .normalize()
      .multiplyScalar(30 * delta);

    camera.position.add(movement.current);
    controls.target.add(movement.current);
    controls.update();
  });

  return null;
}








export default function DronePage() {
  const pageRef = useRef(null);
  const progressRef = useRef(0);
  const manualControlRef = useRef(false);
  const controlsRef = useRef(null);
  const scenes = Array.from({ length: SCENE_COUNT }, (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
  }));

  useEffect(() => {
    const page = pageRef.current;
    window.scrollTo(0, 0);
    const storySections = Array.from(
      page.querySelectorAll(".drone-story-section")
    );
    const pathSections = storySections.slice(0, CAMERA_STOPS.length - 1);

    const updateProgress = () => {
      manualControlRef.current = false;
      const pageTop = page.getBoundingClientRect().top + window.scrollY;
      const scrollDistance = Math.max(0, window.scrollY - pageTop);
      let segmentStart = 0;

      for (let index = 0; index < pathSections.length; index += 1) {
        const segmentHeight = pathSections[index].offsetHeight;
        const isLastSegment = index === pathSections.length - 1;
        if (scrollDistance <= segmentStart + segmentHeight || isLastSegment) {
          const segmentProgress = MathUtils.clamp(
            (scrollDistance - segmentStart) / segmentHeight,
            0,
            1
          );
          progressRef.current = index + segmentProgress;
          break;
        }
        segmentStart += segmentHeight;
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main ref={pageRef} className="drone-experience">
      <Canvas
        className="drone-canvas"
        camera={{
          position: CAMERA_STOPS[0].camera,
          fov: 50,
          near: 0.1,
          far: 2000,
        }}
        dpr={[1, 1.5]}
      >
        <color attach="background" args={["#222222"]} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[-250, 70, 100]} intensity={2.5} />
        <ScrollCamera
          progressRef={progressRef}
          manualControlRef={manualControlRef}
          controlsRef={controlsRef}
        />
        <KeyboardCamera
          controlsRef={controlsRef}
          manualControlRef={manualControlRef}
        />
        <OrbitControls
          ref={controlsRef}
          target={INITIAL_CAMERA_TARGET}
          enablePan
          onStart={() => {
            manualControlRef.current = true;
          }}
          onEnd={() => {
            const controls = controlsRef.current;
            if (!controls) return;
            logCameraCoordinates(controls);
          }}
        />
        <Suspense
          fallback={
            <Html center>
              <div className="drone-loading">Loading environment...</div>
            </Html>
          }
        >
          <EnvironmentModel />
        </Suspense>
      </Canvas>

      {scenes.map(({ number }, index) => (
        <section
          className={`drone-story-section${
            index === 1 ? " drone-story-section--short" : ""
          }${
            index === SCENE_COUNT - 3 ? " drone-story-section--long" : ""
          }${
            index === SCENE_COUNT - 2 ? " drone-story-section--extended" : ""
          }`}
          key={number}
          aria-label={`Environment scene ${number} of ${SCENE_COUNT}`}
        >
          <div className="drone-story-sticky">
            <div className="drone-story-card">
              <p>DRONE EXPERIENCE</p>
              <h1>Scene {number}</h1>
              <span>{number} / {SCENE_COUNT}</span>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
