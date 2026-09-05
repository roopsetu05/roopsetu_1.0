"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, type MotionValue, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { heroScenes, type HeroScene } from "./hero/heroScenes";

type SceneProps = { scene: HeroScene; sceneIndex: number; progress: MotionValue<number> };
type ImagePositionStyle = React.CSSProperties & { "--desktop-object-position": string; "--mobile-object-position": string };

function HeroScene({ scene, sceneIndex, progress }: SceneProps) {
  const total = heroScenes.length;
  const start = sceneIndex / total;
  const end = (sceneIndex + 1) / total;
  const transition = 0.045;
  const range = sceneIndex === 0 ? [0, end - transition, end] : sceneIndex === total - 1 ? [start - transition, start, 1] : [start - transition, start, end - transition, end];
  const opacity = useTransform(progress, range, sceneIndex === 0 ? [1, 1, 0] : sceneIndex === total - 1 ? [0, 1, 1] : [0, 1, 1, 0], { clamp: true });
  const scale = useTransform(progress, range, sceneIndex === 0 ? [1, 1.035, 1.045] : sceneIndex === total - 1 ? [1.035, 1, 1.035] : [1.035, 1, 1.035, 1.045], { clamp: true });
  const textY = useTransform(progress, range, sceneIndex === 0 ? [0, 0, -15] : sceneIndex === total - 1 ? [20, 0, -10] : [20, 0, 0, -15], { clamp: true });
  const imagePosition: ImagePositionStyle = { "--desktop-object-position": scene.desktopObjectPosition, "--mobile-object-position": scene.mobileObjectPosition };

  return (
    <motion.article className="hero-scene" style={{ opacity, zIndex: sceneIndex + 1 }}>
      <motion.div className="hero-image" style={{ scale }}>
        <Image src={scene.image} alt={`${scene.category} — ${scene.title.replace("\n", " ")}`} fill className="object-cover hero-image-media" style={imagePosition} sizes="100vw" preload={sceneIndex === 0} quality={88} />
      </motion.div>
      <div className="hero-image-shade" />
      <motion.div className="hero-copy" style={{ y: textY }}>
        <p className="hero-category">{scene.category}</p>
        <h2>{scene.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        <p className="hero-description">{scene.description}</p>
      </motion.div>
    </motion.article>
  );
}

function ReducedHero() {
  const scene = heroScenes[0];
  const imagePosition: ImagePositionStyle = { "--desktop-object-position": scene.desktopObjectPosition, "--mobile-object-position": scene.mobileObjectPosition };
  return (
    <section className="hero-reduced" aria-label="Beauty inspiration">
      <Image src={scene.image} alt={`${scene.category} — ${scene.title.replace("\n", " ")}`} fill className="object-cover hero-image-media" style={imagePosition} preload />
      <div className="hero-image-shade" />
      <div className="hero-copy"><p className="hero-category">{scene.category}</p><h1>{scene.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1><p className="hero-description">{scene.description}</p></div>
    </section>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const nextIndex = Math.min(Math.floor(value * heroScenes.length), heroScenes.length - 1);
    setActiveIndex((currentIndex) => currentIndex === nextIndex ? currentIndex : nextIndex);
  });

  if (reducedMotion) return <ReducedHero />;

  return (
    <section className="hero-outer" ref={heroRef} aria-label="Beauty inspiration">
      <div className="hero-sticky">
        <h1 className="sr-only">RoopSetu — Beauty inspiration, beautifully discovered.</h1>
        <div className="hero-scenes-container">{heroScenes.map((scene, index) => <HeroScene key={scene.id} scene={scene} sceneIndex={index} progress={scrollYProgress} />)}</div>
        <div className="hero-progress" aria-live="polite"><span>{String(activeIndex + 1).padStart(2, "0")} / {String(heroScenes.length).padStart(2, "0")}</span><small>{heroScenes[activeIndex].category}</small></div>
        {activeIndex === 0 && <span className="hero-scroll-cue" aria-hidden="true">Scroll <i>↓</i></span>}
      </div>
    </section>
  );
}