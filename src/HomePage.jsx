import { useState, useRef, useEffect, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./scene.jsx";
import { Html } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => { 
    gsap.timeline ({
      scrollTrigger: {
        trigger:mainRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        onUpdate: (self) => {
          setProgress(self.progress)
          
        }
      }
    })
    .to(sceneRef.current, {
      ease: "none",
      x: '-25vw',
      y: '100vh'
    })
    .to(sceneRef.current, {
      ease: "none",
      x: '25vw',
      y: '200vh'
    })
    .to(sceneRef.current, {
      ease: "none",
      x: '-25vw',
      y: '300vh'
    })

  },[])

  return (
    <main ref={mainRef} className="overflow-x-hidden">
        <section className="hero">
            <div className="text-container">
                <div className="hero-text">
                    <h1 className="title">DESTRUCTION<br/> OF{" "}
                        <span className="highlight-letter-C">C</span>
                        <span className="highlight-letter-O">O</span>
                        <span className="highlight-letter-L">L</span>
                        <span className="highlight-letter-O">O</span>
                        <span className="highlight-letter-R">R</span>
                    </h1>
                    <img src="/public/images/line 1.png" alt="Line 1" />
                    <p>The pre 2000s embraced bold and bright color palettes. Now this has completely flipped, minimalism has taken over and color has faded away from our environments.</p>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-scene.png" alt="Hero"/>
            </div>

          <div ref={sceneRef} className="h-[100vh] w-[100vw] text-white">
            {/* <Canvas>
              <Scene progress={progress}/>
            </Canvas> */}
          </div>
        </section>

        <section className="scene-2">
            <h2>
                Bright colors have disappeared and reduced to...
            </h2>
        </section>

        <section className="scene-3">
                <h3>
                    BLACK
                </h3>
            <div className="model-canvas">
                <Canvas>
                    <Suspense fallback={<Html center>Loading model...</Html>}>
                        <Scene progress={progress}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>

    </main>
  );
}

export default HomePage;
