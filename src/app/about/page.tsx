"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Crown, Leaf, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const featureCards = [
  {
    title: "Thoughtful Arrival",
    description:
      "A calm, beautifully framed entrance sets the tone the moment guests arrive.",
  },
  {
    title: "Elegant Flow",
    description:
      "Every gathering space is arranged to feel intimate, effortless, and refined.",
  },
  {
    title: "Timeless Setting",
    description:
      "Natural textures, open air, and soft light create a ceremony backdrop that photographs beautifully.",
  },
];

const highlights = [
  "Open garden ceremony lawns",
  "Warm evening ambiance",
  "Photogenic corners and pathways",
  "Premium hospitality experience",
];

const AboutPage = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      gsap.from("[data-hero-text]", {
        opacity: 0,
        y: 28,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
      });

      gsap.from("[data-hero-visual]", {
        opacity: 0,
        y: 36,
        duration: 1,
        ease: "power3.out",
        delay: 0.15,
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      gsap.to("[data-hero-image]", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-hero-visual]",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <main ref={rootRef} className="overflow-hidden bg-[#fff5dc] text-[#3b2522]">
      <section className="relative isolate border-b border-[#6b4b3a]/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,98,84,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(59,37,34,0.08),transparent_34%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="flex flex-col justify-center">
            <p
              data-hero-text
              className="text-xs uppercase tracking-[0.38em] text-[#7d6254]"
              style={{ fontFamily: "var(--font-orange)" }}
            >
              About Nidhivan
            </p>
            <h1
              data-hero-text
              className="mt-5 max-w-3xl text-5xl leading-[0.96] md:text-7xl"
              style={{ fontFamily: "var(--font-zaslia)" }}
            >
              A garden venue shaped for intimate, elegant celebrations.
            </h1>
            <p data-hero-text className="mt-6 max-w-2xl text-base leading-8 text-[#6f5447] md:text-lg">
              Nidhivan blends natural serenity with a carefully composed
              experience, so weddings feel luxurious, warm, and quietly
              memorable from the first welcome to the final farewell.
            </p>

            <div data-hero-text className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full bg-[#3b2522] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#fff5dc] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(59,37,34,0.18)]"
              >
                Explore Home <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#story"
                className="inline-flex items-center gap-3 rounded-full border border-[#6b4b3a]/15 bg-[#fff5dc]/70 px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#3b2522] transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#fffaf0]"
              >
                Our Story
              </Link>
            </div>
          </div>

          <div data-hero-visual className="relative min-h-112 lg:min-h-136">
            <div className="absolute left-6 top-6 h-full w-full rounded-4xl border border-[#6b4b3a]/10 bg-[#f7ead0]" />
            <div className="absolute right-0 top-0 h-full w-[92%] overflow-hidden rounded-4xl shadow-[0_22px_60px_rgba(59,37,34,0.12)]">
              <Image
                data-hero-image
                src="/images/demo1.png"
                alt="Nidhivan wedding garden"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#000000]/45 via-[#000000]/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-[#fff5dc] md:p-8">
                <p className="text-xs uppercase tracking-[0.34em] opacity-90">
                  Wedding Garden
                </p>
                <p
                  className="mt-3 max-w-xs text-3xl leading-tight md:text-4xl"
                  style={{ fontFamily: "var(--font-zaslia)" }}
                >
                  Calm spaces, graceful details, unforgettable moments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        data-reveal
        className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="space-y-5">
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.38em] text-[#7d6254]"
              style={{ fontFamily: "var(--font-orange)" }}
            >
              Our Story
            </p>
            <h2
              data-reveal
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-runalto)" }}
            >
              Designed around the feeling of an effortless celebration.
            </h2>
            <p data-reveal className="max-w-xl text-base leading-8 text-[#6f5447]">
              The idea behind Nidhivan is simple: create a setting where the
              venue never competes with the moment. The garden, light, and
              composition work together to let every ritual, speech, and shared
              smile feel naturally elevated.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {featureCards.map((card) => (
              <article
                key={card.title}
                data-reveal
                className="rounded-3xl border border-[#6b4b3a]/10 bg-[#fffaf0] p-6 shadow-[0_14px_30px_rgba(59,37,34,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <Sparkles className="h-5 w-5 text-[#7d6254]" />
                <h3
                  className="mt-6 text-xl"
                  style={{ fontFamily: "var(--font-runalto)" }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#6f5447]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section data-reveal className="border-y border-[#6b4b3a]/10 bg-[#f7ead0]/60">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div>
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.38em] text-[#7d6254]"
              style={{ fontFamily: "var(--font-orange)" }}
            >
              Why Choose Us
            </p>
            <h2
              data-reveal
              className="mt-4 text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-runalto)" }}
            >
              Luxury that feels warm, never overdone.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item}
                data-reveal
                className="flex items-start gap-4 rounded-3xl border border-[#6b4b3a]/10 bg-[#fff5dc] p-5 shadow-[0_10px_25px_rgba(59,37,34,0.05)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3b2522] text-[#fff5dc]">
                  {index + 1}
                </div>
                <p className="pt-1 text-sm leading-7 text-[#6f5447]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div data-reveal className="rounded-4xl border border-[#6b4b3a]/10 bg-[#fffaf0] p-8 shadow-[0_14px_30px_rgba(59,37,34,0.05)] lg:col-span-2">
            <div className="flex items-center gap-3 text-[#7d6254]">
              <Crown className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.32em]">
                Vision
              </span>
            </div>
            <p
              className="mt-5 text-2xl leading-9 md:text-3xl"
              style={{ fontFamily: "var(--font-runalto)" }}
            >
              To be the garden venue people remember for its atmosphere,
              hospitality, and the ease it brings to meaningful celebration.
            </p>
          </div>

          <div data-reveal className="rounded-4xl border border-[#6b4b3a]/10 bg-[#fffaf0] p-8 shadow-[0_14px_30px_rgba(59,37,34,0.05)]">
            <div className="flex items-center gap-3 text-[#7d6254]">
              <Leaf className="h-5 w-5" />
              <span className="text-xs uppercase tracking-[0.32em]">
                Mission
              </span>
            </div>
            <p className="mt-5 text-sm leading-7 text-[#6f5447]">
              Deliver a seamless experience through thoughtful design, calm
              service, and spaces that feel naturally elegant.
            </p>
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="rounded-[2.5rem] border border-[#6b4b3a]/10 bg-[#3b2522] px-6 py-12 text-[#fff5dc] shadow-[0_22px_60px_rgba(59,37,34,0.18)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:px-12">
          <div>
            <p
              data-reveal
              className="text-xs uppercase tracking-[0.38em] text-[#e2c8a4]"
              style={{ fontFamily: "var(--font-orange)" }}
            >
              Let&apos;s create something memorable
            </p>
            <h2
              data-reveal
              className="mt-4 max-w-2xl text-4xl leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-zaslia)" }}
            >
              Begin your celebration in a place that already feels special.
            </h2>
          </div>

          <a
            data-reveal
            href="tel:+917851945466"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#fff5dc] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#3b2522] transition-transform duration-300 hover:-translate-y-0.5 lg:mt-0"
          >
            let&apos;s connect <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
