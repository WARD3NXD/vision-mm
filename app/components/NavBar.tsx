"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);

  const navlinks = [
    {
      link: "About",
      href: "#about",
      id: "about",
    },
    {
      link: "Contact",
      href: "#contact",
      id: "contact",
    },
    {
      link: "View CV",
      href: "/cv",
      id: "cv",
    },
  ];

  useGSAP(() => {
    const nav = navRef.current;

    if (!nav) return;

    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= 20) {
        gsap.to(nav, {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: "power3.out",
        });

        lastScroll = currentScroll;
        return;
      }

      if (currentScroll > lastScroll) {
        gsap.to(nav, {
          y: -120,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      if (currentScroll < lastScroll) {
        gsap.to(nav, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Mobile menu animation
  useGSAP(() => {
    const menu = mobileMenuRef.current;

    if (!menu) return;

    if (menuOpen) {
      gsap.to(menu, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full p-3"
    >
      <div className="flex w-full items-center justify-between">
        {/* =================================================
            LOGO
            ================================================= */}

        <div className="w-fit rounded-xl bg-[#0a0a0a]/40 px-3 py-4 font-mono text-2xl uppercase tracking-widest backdrop-blur-2xl">
          Mehul Mewada
        </div>

        {/* =================================================
            DESKTOP NAV
            ================================================= */}

        <div className="hidden md:flex h-fit w-fit items-center gap-2 rounded-xl bg-[#0a0a0a]/40 px-3 py-2 font-mono uppercase backdrop-blur-2xl">
          {navlinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="group relative overflow-hidden rounded-sm bg-white/10 px-4 py-2 transition-all duration-300 hover:outline-2 hover:outline-white"
            >
              {/* Shimmer */}
              <span
                className="
                  pointer-events-none
                  absolute
                  inset-y-0
                  -left-full
                  w-[60%]
                  rotate-12
                  bg-linear-to-r
                  from-transparent
                  via-white/70
                  to-transparent
                  transition-all
                  duration-700
                  group-hover:left-[150%]
                "
              />

              <span className="relative z-10">
                {item.link}
              </span>
            </a>
          ))}

          {/* Let's Talk */}
          <a
            href="#contact"
            className="
              group
              relative
              overflow-hidden
              rounded-sm
              bg-white
              px-3
              py-2
              text-background
              transition-all
              duration-300
              hover:scale-[1.04]
              hover:rounded-lg
              hover:bg-black
              hover:text-white
            "
          >
            {/* Shimmer */}
            <span
              className="
                pointer-events-none
                absolute
                inset-y-0
                -left-full
                w-[60%]
                rotate-12
                bg-linear-to-r
                from-transparent
                via-white/80
                to-transparent
                transition-all
                duration-700
                group-hover:left-[150%]
              "
            />

            <span className="relative z-10">
              Let's Talk
            </span>
          </a>
        </div>

        {/* =================================================
            MOBILE BURGER
            ================================================= */}

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-[#0a0a0a]/40
            text-white
            backdrop-blur-2xl
            transition-all
            duration-300
            hover:bg-white
            hover:text-black
            md:hidden
          "
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* =================================================
          MOBILE MENU
          ================================================= */}

      <div
        ref={mobileMenuRef}
        className="
          mt-3
          h-0
          overflow-hidden
          rounded-xl
          bg-[#0a0a0a]/90
          backdrop-blur-2xl
          md:hidden
        "
      >
        <div className="flex flex-col gap-2 p-3 font-mono uppercase">
          {navlinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={closeMenu}
              className="
                rounded-lg
                bg-white/10
                px-4
                py-4
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              {item.link}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="
              rounded-lg
              bg-white
              px-4
              py-4
              text-background
              transition-all
              duration-300
              hover:bg-white/80
            "
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}