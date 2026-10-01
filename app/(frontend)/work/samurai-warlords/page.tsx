"use client";

import { SmoothScroll } from "@/app/components/ScrollSmoother";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

/* =========================================================
   PAGE
========================================================= */

export default function SamuraiWarlords() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">

      <SmoothScroll>

        <NavBar />

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative px-4 pb-12 pt-32 md:px-8 md:pb-16 md:pt-40 lg:px-12">

          <div className="mx-auto flex max-w-[1800px] flex-col">

            <div
              className="
                grid
                gap-12
                lg:grid-cols-[1.15fr_0.85fr]
                lg:items-end
              "
            >

              {/* =================================================
                  HERO TITLE
                  ================================================= */}

              <div>

                <div
                  className="
                    mb-8
                    flex
                    items-center
                    gap-3
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/35
                    md:text-xs
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/70" />

                  Selected Case Study
                </div>


                <h1
                  className="
                    max-w-[900px]
                    text-[clamp(4rem,8vw,10rem)]
                    font-medium
                    leading-[0.78]
                    tracking-[-0.08em]
                  "
                >
                  Samurai Warlords

                  <span className="text-white/20">
                    .
                  </span>
                </h1>

              </div>


              {/* =================================================
                  HERO DESCRIPTION
                  ================================================= */}

              <div className="max-w-130 lg:pb-3">

                <p
                  className="
                    mb-6
                    text-lg
                    leading-relaxed
                    text-white/65
                    md:text-xl
                  "
                >
                  Designing a structured digital experience
                  for automotive retail — connecting
                  discovery, product exploration, purchase
                  and the physical store experience.
                </p>


                <a
                  href="https://samuraiwarlords.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-4
                    rounded-full
                    border
                    border-white/20
                    px-5
                    py-3
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-black
                  "
                >
                  Visit Live Website

                  <span>
                    ↗
                  </span>
                </a>

              </div>

            </div>


            {/* =================================================
                PROJECT META
                ================================================= */}

            <div
              className="
                mt-16
                grid
                grid-cols-2
                gap-y-8
                border-t
                border-white/10
                pt-6
                md:grid-cols-4
              "
            >

              {/* ROLE */}

              <div>

                <p
                  className="
                    mb-2
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Role
                </p>

                <p className="text-sm text-white/80">
                  UI / UX Design
                </p>

              </div>


              {/* CATEGORY */}

              <div>

                <p
                  className="
                    mb-2
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Category
                </p>

                <p className="text-sm text-white/80">
                  BlockChain Gaming
                </p>

              </div>


              {/* YEAR */}

              <div>

                <p
                  className="
                    mb-2
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Year
                </p>

                <p className="text-sm text-white/80">
                  2021
                </p>

              </div>


              {/* BUILD */}

              <div>

                <p
                  className="
                    mb-2
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  "
                >
                  Build
                </p>

                <p className="text-sm text-white/80">
                  Figma
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SITE PREVIEW
        ===================================================== */}

        <section className="px-4 md:px-8 lg:px-12">

          <div className="mx-auto max-w-[1800px]">

            <div
              className="
                relative
                aspect-[16/9]
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#111]
              "
            >

              <img
                src="/thumbnail/samurai-w-thumbnail.webp"
                alt="Samurai Warlords"
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </section>

        <section className="flex flex-col justify-center w-full items-center py-24">
                <h1
                  className="
                    max-w-[900px]
                    text-[clamp(4rem,5vw,10rem)]
                    font-medium
                    leading-[0.78]
                    tracking-[-0.08em]
                  "
                >
                  Coming Soon

                  <span className="text-white/20">
                    .
                  </span>
                </h1>

        </section>


        {/* =====================================================
            CASE STUDY PDF
        ===================================================== */}
{/* 
        <section className="px-4 py-24 md:px-8 md:py-32 lg:px-12">

          <div className="mx-auto max-w-[1400px]">

            <div
              className="
                mb-8
                flex
                flex-col
                gap-4
                border-b
                border-white/10
                pb-6
                md:flex-row
                md:items-end
                md:justify-between
              "
            >

              <div>

                <p
                  className="
                    font-mono
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/30
                  "
                >
                  Case Study
                </p>

                <h2
                  className="
                    mt-3
                    text-3xl
                    font-medium
                    tracking-[-0.04em]
                    md:text-4xl
                  "
                >
                  MAHY Khooray — UX Case Study
                </h2>

              </div>



              <a
                href="/case-studies/mka/mka-case-study.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  w-fit
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  px-5
                  py-3
                  text-xs
                  uppercase
                  tracking-[0.15em]
                  text-white/70
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                "
              >
                Open PDF

                <span>
                  ↗
                </span>

              </a>

            </div>


            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#151515]
              "
            >

              <iframe
                src="/case-studies/mka/mka-case-study.pdf"
                title="MAHY Khooray Case Study"
                className="
                  block
                  h-[80vh]
                  w-full
                  md:h-[1000px]
                "
              />

            </div>

          </div>

        </section> */}


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />

      </SmoothScroll>

    </main>
  );
}