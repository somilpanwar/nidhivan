"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Herosection = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!heroRef.current) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from("[data-hero-badge]", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from("[data-hero-title]", {
        opacity: 0,
        y: 26,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.08,
      });

      gsap.from("[data-hero-scroll]", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.35,
      });

      gsap.to("[data-hero-backdrop]", {
        scale: 1.04,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <>
      <div
        ref={heroRef}
        className="relative isolate flex h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('https://videocdn.cdnpk.net/videos/686e68ac-4af2-5190-a0c5-fdd01f8a1981/horizontal/thumbnails/large.jpg?semt=ais_hybrid&item_id=6511283&w=740&q=80')]"
      >
        {/* gradient overlay */}
        <div
          data-hero-backdrop
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#000000] to-[#00000000] opacity-70"
        />
        <div
          data-hero-title
          className="relative z-10 text-center text-6xl tracking-wider text-[#fff5dc] md:text-8xl"
          style={{ fontFamily: "var(--font-zaslia)" }}
        >
          NIDHIVAN
          <div
            data-hero-badge
            className="text-center text-sm tracking-wider md:text-3xl"
            style={{ fontFamily: "var(--font-zaslia)" }}
          >
            Place like <span className="ml-1 text-2xl md:text-5xl">Heaven</span>
          </div>
        </div>

        {/* scroll indicator */}
        <div data-hero-scroll className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center">
          <div className="flex h-10 w-10 justify-center rounded-full border-2 border-dotted border-[#fff5dc]">
            <div className="mt-5 h-2 w-2 animate-bounce rounded-full bg-[#fff5dc]" />
          </div>
          <p
            className="mt-2 animate-pulse text-sm tracking-wider text-[#fff5dc]"
            style={{ fontFamily: "var(--font-zaslia)" }}
          >
            scroll down
          </p>
        </div>
      </div>
    </>
  );
};

export default Herosection
