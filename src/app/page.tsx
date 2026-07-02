"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import Herosection from "@/components/Herosection"
import Introsection from "@/components/Intorsection"
import Gallerysection from "@/components/Gallerysection"

const Home = () => {
const homeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-home-section]").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }, homeRef)

    return () => context.revert()
  }, [])

return (
  <>
  {/* this will be the base for all  */}  
  <div ref={homeRef} className="h-full w-full bg-[#fff5dc] text-3xl   ">
  <section data-home-section>
  <Herosection/>
  </section>
  <section data-home-section>
  <Introsection/>
  </section>
  <section data-home-section>
  <Gallerysection/>
  </section>
  </div>      
  </>
)

}
export default Home