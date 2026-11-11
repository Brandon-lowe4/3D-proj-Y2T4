import { useRef, useEffect, useLayoutEffect, Suspense, useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./scene.jsx";
import { Html } from "@react-three/drei";
import DronePage from "./DronePage.jsx";

gsap.registerPlugin(ScrollTrigger)

function HomePage() {
  const mainRef = useRef(null);
  const heroTextRef = useRef(null);
  const scene2TextRef = useRef(null);
  const sceneAfterGreyTextRef = useRef(null);
  const finalTextRef = useRef(null);
  const pre2000QuestionRef = useRef(null);
  const pre2000HeroTextRef = useRef(null);
  const sceneRef = useRef(null);
  const scene3Ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const scene4Ref = useRef(null);
  const [whiteProgress, setWhiteProgress] = useState(0);
  const scene5Ref = useRef(null);
  const [greyProgress, setGreyProgress] = useState(0);

  useLayoutEffect(() => {
    if (window.location.hash !== "#drone-experience") return undefined;

    document.getElementById("drone-experience")?.scrollIntoView({
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    const createTextEntrance = (
      element,
      { axis = "y", offset = -80, duration = 2, onScroll = true } = {}
    ) => {
      const animation = {
        [axis]: 0,
        autoAlpha: 1,
        duration,
        ease: "power2.out",
      };

      if (onScroll) {
        animation.scrollTrigger = {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
        };
      }

      return gsap.fromTo(
        element,
        { [axis]: offset, autoAlpha: 0 },
        animation
      );
    };
    const heroEntrance = createTextEntrance(heroTextRef.current, {
      duration: 1,
      onScroll: false,
    });
    const scene2TextEntrance = createTextEntrance(scene2TextRef.current);
    const sceneAfterGreyTextEntrance = createTextEntrance(sceneAfterGreyTextRef.current);
    const finalTextEntrance = createTextEntrance(finalTextRef.current);
    const pre2000QuestionEntrance = createTextEntrance(pre2000QuestionRef.current);
    const carTitleEntrances = [...mainRef.current.querySelectorAll(".car-section-title")]
      .map((title, index) =>
        gsap.fromTo(
          title,
          { x: index === 1 ? -180 : 180, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1.5,
            delay: 0.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: title,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        )
      );
    const pre2000HeroTextEntrance = createTextEntrance(pre2000HeroTextRef.current, {
      axis: "x",
      duration: 1,
    });
    const modernEraEntrances = [];
    mainRef.current.querySelectorAll(".modern-era-column").forEach((column) => {
      const model = column.querySelector(".modern-era-model");
      const text = column.querySelector(".modern-era-text");
      const scrollTrigger = {
        trigger: column,
        start: "top 80%",
        toggleActions: "play none none none",
      };

      modernEraEntrances.push(
        gsap.fromTo(
          text,
          {
            x: column.classList.contains("pre-2000s-column") ? -80 : 80,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 2.5,
            ease: "power2.out",
            scrollTrigger,
          }
        ),
        gsap.fromTo(
          model,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 3.5,
            ease: "power2.out",
            scrollTrigger,
          }
        )
      );
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        endTrigger: finalTextRef.current.closest(".scene-2"),
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
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


    const cameraProgressTrigger = ScrollTrigger.create({
      trigger: scene3Ref.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setProgress(self.progress),
    });

    const WhiteCarProgressTrigger = ScrollTrigger.create({
      trigger: scene4Ref.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setWhiteProgress(self.progress),
    });

    const GreyCarProgressTrigger = ScrollTrigger.create({
      trigger: scene5Ref.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setGreyProgress(self.progress),
    });

    return () => {
      heroEntrance.kill();
      scene2TextEntrance.scrollTrigger?.kill();
      scene2TextEntrance.kill();
      sceneAfterGreyTextEntrance.scrollTrigger?.kill();
      sceneAfterGreyTextEntrance.kill();
      finalTextEntrance.scrollTrigger?.kill();
      finalTextEntrance.kill();
      pre2000QuestionEntrance.scrollTrigger?.kill();
      pre2000QuestionEntrance.kill();
      carTitleEntrances.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
      pre2000HeroTextEntrance.scrollTrigger?.kill();
      pre2000HeroTextEntrance.kill();
      modernEraEntrances.forEach((animation) => {
        animation.scrollTrigger?.kill();
        animation.kill();
      });
      cameraProgressTrigger.kill();
      WhiteCarProgressTrigger.kill();
      GreyCarProgressTrigger.kill();
    };
  },
    [])


  return (
    <main ref={mainRef} className="overflow-x-clip">
      <section className="hero">
        <div className="text-container">
          <div ref={heroTextRef} className="hero-text">
            <h1 className="title">DESTRUCTION<br /> OF{" "}
              <span className="highlight-letter-C">C</span>
              <span className="highlight-letter-O">O</span>
              <span className="highlight-letter-L">L</span>
              <span className="highlight-letter-O">O</span>
              <span className="highlight-letter-R">R</span>
            </h1>
            <img src="/public/images/line 1.png" alt="Line 1" />
            <p>The pre 2000s embraced bold and bright colour palettes. Now this has completely flipped, minimalism has taken over and colour has faded away from our environments.</p>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-scene.png" alt="Hero" />
        </div>
      </section>

      <section className="scene-2">
        <div className="scene-2-sticky">
          <h2 ref={scene2TextRef}>Bright colours have disappeared and reduced to...</h2>
        </div>
      </section>

      <section ref={scene3Ref} className="scene-3">
        <div className="scene-3-sticky">
          <h3 className="car-section-title">
            BLACK
          </h3>
          <div className="model-canvas">
            <Canvas>
              <Suspense fallback={<Html center>Loading model...</Html>}>
                <Scene progress={progress} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      <section ref={scene4Ref} className="scene-4" >
        <div className="scene-4-sticky">
          <h3 className="car-section-title">
            WHITE
          </h3>
          <div className="model-canvas">
            <Canvas>
              <Suspense fallback={<Html center>Loading model...</Html>}>
                <Scene carColor="white" progress={whiteProgress} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      <section ref={scene5Ref} className="scene-5">
        <div className="scene-5-sticky">
          <h3 className="car-section-title">
            GREY
          </h3>
          <div className="model-canvas">
            <Canvas>
              <Suspense fallback={<Html center>Loading model...</Html>}>
                <Scene carColor="grey" progress={greyProgress} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>

      <section className="scene-2 scene-after-grey">
        <div className="scene-2-sticky">
          <div className="hero-image">
            <img src="/images/2000s-bg.png" alt="" />
          </div>
          <h2 ref={sceneAfterGreyTextRef}>Minimalism is the reason we are losing our{" "}
            <span className="highlight-letter-C">C</span>
            <span className="highlight-letter-O">O</span>
            <span className="highlight-letter-L">L</span>
            <span className="highlight-letter-O">O</span>
            <span className="highlight-letter-R">R</span>. And everything is being effected.</h2>
        </div>
      </section>

      <section className="scene-2">
        <div className="scene-2-sticky">

          <div className="two-column modern-era-column">
            <img className="car-png modern-era-model modern-era-car" src="/images/2000scar.png" alt="Black Car" />
            <img src="/images/Line%202.png" alt="Line 2" />

            <div className="text-container modern-era-text">
              <h4>CARS</h4>
              <p>Minimalism has had a major impact on cars. As of today neutral toned cars dominate the market. 4 out of 5 cars sold are coloured white, black, grey or silver.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scene-3">
        <div className="scene-3-sticky">
          <div className="two-column modern-era-column">
            <img className="car-png modern-era-model" src="/images/2000shouse.png" alt="Modern House" />
            <img src="/images/Line%202.png" alt="Line 2" />

            <div className="text-container modern-era-text">
              <h4>BUILDINGS</h4>
              <p>Architectural design has been impacted by the loss of colour. Vibrant colours reflect light which can create a more colourful environment compared to neutral tones that absorb light.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scene-3">
        <div className="scene-3-sticky">
          <div className="two-column modern-era-column">
            <img className="light-png modern-era-model" src="/images/2000slight.png" alt="White Light" />
            <img src="/images/Line%202.png" alt="Line 2" />

            <div className="text-container modern-era-text">
              <h4>LIGHTING</h4>
              <p>White LEDs have replaced yellow sodium lamps. LEDs are more sustainable than sodium lamps. However, this modern shift has stripped cities of their golden glows.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="scene-2">
        <div className="scene-2-sticky">
          <h2 ref={pre2000QuestionRef}>What did the pre 2000s look like with environments that thrived on bright popping colours?</h2>
        </div>
      </section>

      <section className="hero-pre-2000s-section">
        <div className="pre-2000s-sticky">
          <div className="text-container">
            <div ref={pre2000HeroTextRef} className="hero-text" id="hero2-text">
              <h1 id="hero2h1" className="title">PRE{" "}
                <span className="highlight-letter-C">2</span>
                <span className="highlight-letter-O">0</span>
                <span className="highlight-letter-L">0</span>
                <span className="highlight-letter-O">0</span>
                <span className="highlight-letter-R">s</span>
                </h1>
            </div>
          </div>
          <div className="hero-image">
            <img src="/images/sceneveiw-pre2000s.png" alt="Pre 2000s Hero" />
          </div>
        </div>
      </section>

      <section className="scene-2 grey-section">
        <div className="scene-2-sticky">
          <h2 className="grey-copy">Bright colours help with social engagement and have a major impact on our emotions. Seeing these colours releases dopamine and relieves stress.</h2>
        </div>
      </section>

      <section className="scene-3-grey">
        <div className="scene-3-sticky">
          <div className="two-column modern-era-column pre-2000s-column">
            <div className="text-container modern-era-text">
              <h4 className="h4-pre2000s">CARS</h4>
              <p className="black-p">With the 2000s transition into minimalism cars coloured in neutral tones dominate the market. 4 out of 5 cars sold are coloured white, black, grey or silver.</p>
            </div>
            <img src="/images/Line%202.png" alt="Line 2" />
            <img className="car-png modern-era-model" src="/images/Pre2000s-car.png" alt="Old car" />
          </div>
        </div>
      </section>

      <section className="scene-3-grey">
        <div className="scene-3-sticky">
          <div className="two-column modern-era-column pre-2000s-column">
            <div className="text-container modern-era-text">
              <h4 className="h4-pre2000s">BUILDINGS</h4>
              <p className="black-p">Before the minimalistic era, buildings used a lot of colourful materials such as wood and brick. This gave every neighbourhood and city a unique feel.</p>
            </div>
            <img src="/images/Line%202.png" alt="Line 2" />
            <img className="car-png modern-era-model" src="/images/pre2000s-house.png" alt="old Hosue" />
          </div>
        </div>
      </section>

      <section className="scene-3-grey">
        <div className="scene-3-sticky">
          <div className="two-column modern-era-column pre-2000s-column">
            <div className="text-container modern-era-text">
              <h4 className="h4-pre2000s">LIGHTING</h4>
              <p className="black-p">Cities used to be have that golden warm glow with a cozy feeling. This was because of the sodium lamps and and their yellow light. They made evening walks a cinematic experience.</p>
            </div>
            <img src="/images/Line%202.png" alt="Line 2" />
            <img className="light-png modern-era-model" src="/images/pre2000s-light.png" alt="White Light" />
          </div>
        </div>
      </section>

      <section className="scene-2">
        <div className="scene-2-sticky">
          <h2 ref={finalTextRef}>Now you know how colour has evolved from the pre 2000s into the 2000s. Lets get a first person look into this shift in colour with the {" "}
            <a className="highlight-word-drone" href="#drone-experience">
              DRONE EXPERIENCE
            </a>
          </h2>
        </div>
      </section>
      <DronePage />
    </main>
  );
}

export default HomePage;
