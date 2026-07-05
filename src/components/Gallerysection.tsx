"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";

const events = [
  {
    title: "Sangeet Evening",
    imgUrl: "/images/stage.png",
    label: "Previous event",
    description: "Warm lights, live music, and an intimate open-air celebration.",
    span: "lg:col-span-7",
    height: "h-[24rem] md:h-[30rem]",
  },
  {
    title: "Wedding Ceremony",
    imgUrl: "/images/gdn-photo1.png",
    label: "Previous event",
    description: "A calm, floral setting designed for timeless vows.",
    span: "lg:col-span-5",
    height: "h-[18rem] md:h-full",
  },
  {
    title: "Reception Dinner",
    imgUrl: "/images/stage.png",
    label: "Previous event",
    description: "Elegant tablescapes and soft ambient lighting after sunset.",
    span: "lg:col-span-5",
    height: "h-[20rem] md:h-full",
  },
  {
    title: "Haldi Morning",
    imgUrl: "/images/haldi.png",
    label: "Previous event",
    description: "A bright, joyful moment with natural textures and soft colour.",
    span: "lg:col-span-7",
    height: "h-[20rem] md:h-[18rem]",
  },
];

const carouselItems = [
  { title: "Floral stage", tone: "bg-[#e9d1b0]" },
  { title: "Ceremony aisle", tone: "bg-[#d8c1a0]" },
  { title: "Dining setup", tone: "bg-[#f1e2c6]" },
  { title: "Evening lights", tone: "bg-[#cbb08f]" },
  { title: "Garden entry", tone: "bg-[#ead9bc]" },
  { title: "Mandap detail", tone: "bg-[#dfc49e]" },
];

const Gallerysection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const pauseUntilRef = useRef(0);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    let animationFrame = 0;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const halfWidth = carousel.scrollWidth / 2;

      if (halfWidth > 0 && time >= pauseUntilRef.current) {
        carousel.scrollLeft += (delta * 0.035);

        if (carousel.scrollLeft >= halfWidth) {
          carousel.scrollLeft -= halfWidth;
        }
      }

      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    pauseUntilRef.current = performance.now() + 1400;
    const scrollAmount = direction === "left" ? -340 : 340;
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="w-full px-4 pb-20 md:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p
              className="text-xs uppercase tracking-[0.38em] text-[#7d6254]"
              style={{ fontFamily: "var(--font-orange)" }}
            >
              Gallery
            </p>
            <h2
              className="mt-4 text-4xl leading-tight md:text-6xl"
              style={{ fontFamily: "var(--font-runalto)" }}
            >
              A few previous events, beautifully remembered.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#6f5447] md:text-base">
              A small curated look at celebrations hosted at Nidhivan, showing the
              atmosphere, styling, and refined energy of the venue.
            </p>
          </div>

          <div className="inline-flex w-fit items-center rounded-full border border-[#6b4b3a]/10 bg-[#fffaf0] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[#3b2522] shadow-[0_10px_25px_rgba(59,37,34,0.05)]">
            Previous events
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {events.map((event, index) => (
            <article
              key={event.title}
              className={`${event.span} group overflow-hidden rounded-4xl border border-[#6b4b3a]/10 bg-[#fffaf0] shadow-[0_18px_40px_rgba(59,37,34,0.08)] transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className={`relative ${event.height}`}>
                <Image
                  src={event.imgUrl}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000000]/55 via-[#000000]/18 to-transparent" />
                <div className="absolute left-0 top-0 flex items-center gap-2 px-5 py-5 text-[#fff5dc]">
                  <span className="text-[0.65rem] uppercase tracking-[0.35em] opacity-85">
                    {event.label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-[#fff5dc]">
                  <p className="text-xs uppercase tracking-[0.3em] opacity-80">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className="mt-3 text-3xl leading-tight md:text-4xl"
                    style={{ fontFamily: "var(--font-zaslia)" }}
                  >
                    {event.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-[#f9efd8] md:text-base">
                    {event.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-4xl border border-[#6b4b3a]/10 bg-[#fffaf0] px-4 py-5 shadow-[0_16px_35px_rgba(59,37,34,0.06)] md:px-6 md:py-6">
          <div className="flex items-center justify-between gap-4 px-2 pb-5">
            <div>
              <p
                className="text-[0.65rem] uppercase tracking-[0.35em] text-[#7d6254]"
                style={{ fontFamily: "var(--font-orange)" }}
              >
                More moments
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl" style={{ fontFamily: "var(--font-runalto)" }}>
                A continuous glimpse of other event frames.
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleScroll("left")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6b4b3a]/10 bg-[#fff5dc] text-[#3b2522] shadow-[0_10px_20px_rgba(59,37,34,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Scroll gallery left"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => handleScroll("right")}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#6b4b3a]/10 bg-[#fff5dc] text-[#3b2522] shadow-[0_10px_20px_rgba(59,37,34,0.05)] transition-transform duration-300 hover:-translate-y-0.5"
                aria-label="Scroll gallery right"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="hidden text-xs uppercase tracking-[0.3em] text-[#7d6254] md:block">
                Auto scrolling
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="overflow-x-auto scroll-smooth scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onPointerEnter={() => {
              pauseUntilRef.current = performance.now() + 1000;
            }}
          >
            <div className="flex w-max gap-4 pr-4">
              {[...carouselItems, ...carouselItems].map((item, index) => (
                <article
                  key={`${item.title}-${index}`}
                  className="group relative h-52 w-72 shrink-0 overflow-hidden rounded-[1.75rem] border border-[#6b4b3a]/10 bg-[#fff5dc] shadow-[0_12px_26px_rgba(59,37,34,0.06)] md:h-60 md:w-80"
                >
                  <div className={`absolute inset-0 ${item.tone}`} />
                  <Image
                    src="/images/demo1.png"
                    alt={item.title}
                    fill
                    className="object-cover opacity-65 transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#000000]/45 via-[#000000]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-[#fff5dc]">
                    <p className="text-[0.62rem] uppercase tracking-[0.34em] opacity-80">
                      Previous event
                    </p>
                    <h4
                      className="mt-2 text-xl leading-tight md:text-2xl"
                      style={{ fontFamily: "var(--font-zaslia)" }}
                    >
                      {item.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallerysection;