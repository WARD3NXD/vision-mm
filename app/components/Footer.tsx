"use client";

import { ArrowRight, Send } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import SplitText from "gsap/src/SplitText";
import { AnalogClockWidget } from "@/components/clock-widget";
import VisionReveal from "./VisionReveal";


export default function Footer() {
  const button = useRef<HTMLButtonElement>(null);

  const socialLinks = [
    {
      title: "instagram",
      link: "/",
      id: "insta",
      IconId: "/social-icons/insta.svg",
    },
    {
      title: "github",
      link: "/",
      id: "git",
      IconId: "/social-icons/github.svg",
    },
    {
      title: "X",
      link: "/",
      id: "x",
      IconId: "/social-icons/x.svg",
    },
    {
      title: "youtube",
      link: "/",
      id: "youtube",
      IconId: "/social-icons/youtube.svg",
    },
    {
      title: "steam",
      link: "/",
      id: "steam",
      IconId: "/social-icons/steam.svg",
    },
  ];

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  useGSAP(() => {
    const headings = gsap.utils.toArray<HTMLElement>(
      "[data-about-heading]"
    );

    const splits: SplitText[] = [];

    headings.forEach((heading) => {
      const split = SplitText.create(heading, {
        type: "words",
        mask: "words",
      });

      splits.push(split);

      gsap.set(split.words, {
        yPercent: 100,
        filter: "blur(20px)",
        opacity: 0,
      });

      gsap.to(split.words, {
        yPercent: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          once: true,
        },
      });
    });

    if (!button.current) return;

    const handleEnter = () => {
      if (status === "sending") return;

      gsap.to(button.current, {
        backgroundColor: "black",
        color: "white",
        borderColor: "white",
        borderWidth: 2,
        borderRadius: "8px",
        boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
        scale: 1.05,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleLeave = () => {
      gsap.to(button.current, {
        backgroundColor: "white",
        color: "black",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: "80px",
        boxShadow: "none",
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    button.current.addEventListener("mouseenter", handleEnter);
    button.current.addEventListener("mouseleave", handleLeave);

    return () => {
      button.current?.removeEventListener("mouseenter", handleEnter);
      button.current?.removeEventListener("mouseleave", handleLeave);

      splits.forEach((split) => split.revert());
    };
  }, [status]);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to send message."
        );
      }

      setStatus("success");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus("error");

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }
  };

  return (
    <section className="relative p-4 md:p-12 mt-10">


        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Video */}
          <video
            src="/video/footer-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-right"
          />

          {/* Top → Bottom Overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/0" />
        </div>


      <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        {/* Left */}
        <div className="w-full p-4 md:p-8 flex flex-col gap-8 md:gap-18">
          {/* Heading */}
          <div className="flex flex-col gap-4">
            <h2
              data-about-heading
              className="text-4xl font-semi text-white md:text-7xl"
            >
              Let's Work Together
            </h2>
          </div>

         
          {/* Local Time + Quote */}
          <div className="flex flex-col md:flex-row gap-5 ">
            {/* Local Clock */}
            <AnalogClockWidget showNumbers={false} size="lg" />

            {/* Closing Quote */}
            <div className="flex items-center">
              <p data-about-heading className="text-md md:text-2xl text-white/75 md:max-w-[40ch]">
                Open to Senior Product Designer and Design Lead roles,
                design systems work, and AI-first teams, remote or
                international.
              </p>
            </div>
          </div>


           {/* Contact */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            {/* Email */}
            <div className="flex flex-col gap-2 md:gap-6 md:w-fit w-full">
              <div className="font-mono text-md uppercase tracking-widest text-white/50">
                Email
              </div>

              <div className="pl-3 pr-1 py-1 rounded-xl border-2 border-white/30">
                <a href="mailto:mehulmewada9@gmail.com">
                  <h2
                    data-about-heading
                    className="text-xl/7 font-semi font-mono text-white md:text-3xl flex flex-row justify-between md:gap-3 items-center"
                  >
                    mehulmewada9@gmail.com

                    <span className="p-3 bg-white/10 rounded-sm w-fit">
                      <Send color="#fff" />
                    </span>
                  </h2>
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-2 md:gap-6 md:w-fit w-full">
              <div className="font-mono text-md uppercase tracking-widest text-white/50">
                Socials
              </div>

              <div className="flex flex-row md:justify-normal justify-between md:gap-1 px-1 py-1 rounded-xl border-2 border-white/30">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.link}
                    className="p-2 rounded-md bg-white/10 w-fit"
                  >
                    <img
                      src={social.IconId}
                      alt={social.title}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Form */}
        <div className="py-9 w-full lg:max-w-2/6">
          <div className="bg-white/10 p-3.5 md:p-8 rounded-md backdrop-blur-2xl flex flex-col gap-9">
            <h2
              data-about-heading
              className="text-xl/7 font-semi text-white md:text-5xl/14"
            >
              Send Message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* Names */}
                <div className="flex flex-row gap-2 w-auto">
                  <div className="flex flex-col gap-1.5 w-full">
                    <label
                      htmlFor="fname"
                      className="font-mono uppercase text-[12px]"
                    >
                      First Name
                    </label>

                    <input
                      id="fname"
                      type="text"
                      name="firstName"
                      placeholder="Your Name"
                      className="input-box"
                      required
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 w-full">
                    <label
                      htmlFor="lname"
                      className="font-mono uppercase text-[12px]"
                    >
                      Last Name
                    </label>

                    <input
                      id="lname"
                      type="text"
                      name="lastName"
                      placeholder="Your Name"
                      className="input-box"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="font-mono uppercase text-[12px]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email"
                    className="input-box"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="font-mono uppercase text-[12px]"
                  >
                    Write Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="input-box"
                    required
                  />
                </div>

                {/* Submit */}
                <div>
                  <button
                    ref={button}
                    type="submit"
                    disabled={status === "sending"}
                    className="
                      bg-white
                      button
                      inline-flex
                      md:gap-12
                      justify-between
                      text-black
                      px-4
                      py-3
                      md:px-6
                      md:py-4
                      items-center
                      rounded-full
                      cursor-pointer
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                      w-full
                      md:w-fit
                    "
                  >
                    {status === "sending"
                      ? "Sending..."
                      : status === "success"
                        ? "Message Sent"
                        : status === "error"
                          ? "Try Again"
                          : "Send Message"}

                    <ArrowRight strokeWidth={1.5} />
                  </button>
                </div>

                {/* Status */}
                {status === "success" && (
                  <p className="font-mono text-sm text-white/60">
                    Thanks! Your message has been sent.
                  </p>
                )}

                {status === "error" && (
                  <p className="font-mono text-sm text-white/60">
                    Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
        
    {/* Giant VISION */}
    <div className="md:block hidden">
      <VisionReveal />
    </div>
      <div className="@container overflow-hidden block md:hidden">

        <h1 className="whitespace-nowrap text-[32cqw] md:text-[29cqw] md:text-white/0 text-[#FFFDD0] font-bold leading-none text-center">
          VISION
        </h1>
      </div>

    </section>
  );
}