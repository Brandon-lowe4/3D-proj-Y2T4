import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import { MathUtils, Vector3 } from "three";
import { Model as EnvironmentModel } from "./environment.jsx";
import "./App.css";

const CAMERA_STOPS = [
  { camera: [-116.0027, 6.4, -10.5], target: [-225.753, 6.861, -2.1242] },
  { camera: [-152.8, 6.4, -10.5], target: [-152.78, 6.861, 7] },
  { camera: [-180.2, 6.4, -19], target: [-178.2, 6.8, 6.9] },
  { camera: [-202, 7.8, -15], target: [-222.8, 6.8, 2.2] },
  { camera: [-255.1, 7.6, -25.7], target: [-245.4, 6.8, 6.3] },
  { camera: [-241, 6.7, -12], target: [-254.4, 6.8, -10.8] },
  { camera: [-305.5, 6.4, -6.3], target: [-317.3, 6.8, -12.7] },
  {
    camera: [-317.3, 7, -36],
    target: [-318, 6.8, -49.5],
    text: "Now we enter the 2000s. The environment is dominated by neutral shades. Our cities have lost colour and the energetic feel they once had.",
  },
  { camera: [-307.3, 6.8, -109.9], target: [-317, 6.8, -118.6] },
  { camera: [-315, 6.6, -145.9], target: [-315, 6.8, -158.9] },
];
const SCENE_COUNT = CAMERA_STOPS.length;

function ScrollCamera({ progressRef }) {
  const cameraStart = useRef(new Vector3());
  const cameraEnd = useRef(new Vector3());
  const targetStart = useRef(new Vector3());
  const targetEnd = useRef(new Vector3());
  const desiredCamera = useRef(new Vector3());
  const desiredTarget = useRef(new Vector3());
  const currentTarget = useRef(new Vector3(...CAMERA_STOPS[0].target));
  useFrame(({ camera }, delta) => {
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
    camera.lookAt(currentTarget.current);
  });

  return null;
}

export default function DronePage() {
  const pageRef = useRef(null);
  const progressRef = useRef(0);
  const scenes = Array.from({ length: SCENE_COUNT }, (_, index) => ({
    number: String(index + 1).padStart(2, "0"),
    text: CAMERA_STOPS[index].text,
  }));

  useEffect(() => {
    const page = pageRef.current;
    const storySections = Array.from(
      page.querySelectorAll(".drone-camera-section")
    );
    const pathSections = storySections.slice(0, CAMERA_STOPS.length - 1);
    const textAnimations = Array.from(page.querySelectorAll(".text"), (text) => {
      const section = text.closest(".drone-story-section");
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

      return {
        animation: gsap.fromTo(
          text,
          { filter: "blur(20px)", opacity: 0, scale: 0.9 },
          {
            filter: "blur(0px)",
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.out",
            paused: true,
          }
        ),
        sectionTop,
        started: false,
      };
    });
    const updateProgress = () => {
      textAnimations.forEach((textAnimation) => {
        const triggerY =
          textAnimation.sectionTop - window.innerHeight * 0.1;
        if (!textAnimation.started && window.scrollY >= triggerY) {
          textAnimation.started = true;
          textAnimation.animation.play();
        }
      });

      const firstPathSectionTop =
        pathSections[0].getBoundingClientRect().top + window.scrollY;
      const scrollDistance = Math.max(0, window.scrollY - firstPathSectionTop);
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
      textAnimations.forEach(({ animation }) => animation.kill());
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      ref={pageRef}
      id="drone-experience"
      className="drone-experience"
      aria-label="Drone experience"
    >
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
        <ScrollCamera progressRef={progressRef} />
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

      <section
        className="drone-story-section drone-story-section--intro"
        aria-label="Drone experience introduction"
      >
        <div className="drone-story-sticky drone-story-sticky--intro">
          <h3 className="text drone-story-card__description">
            The pre 2000s consisted of bright popping colours like yellow, red and blue. This is a first person experience of what urban environments used to look like.
          </h3>
        </div>
      </section>

      {scenes.map(({ number, text }, index) => (
        <section
          className={`drone-story-section drone-camera-section${
            index === 1 ? " drone-story-section--short" : ""
          }${
            index === SCENE_COUNT - 3 ? " drone-story-section--long" : ""
          }${
            index === SCENE_COUNT - 2 ? " drone-story-section--extended" : ""
          }`}
          key={number}
          aria-label={`Environment scene ${number} of ${SCENE_COUNT}`}
        >
          {text && (
            <div className="drone-story-sticky">
              <h3 className="text drone-story-card__description">{text}</h3>
            </div>
          )}
        </section>
      ))}
    </section>
  );
}
