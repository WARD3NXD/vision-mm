"use client";

import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Footer() {
  const button = useRef<HTMLButtonElement>(null);

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
    };
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
        throw new Error(result.error || "Failed to send message.");
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
    <section className="relative h-[85svh] md:h-svh p-4 md:p-12">

      {/* Background */}
      <div className="absolute bottom-0 left-0 w-full h-[inherit] -z-10">
        <div className="absolute bottom-0 left-0 w-full h-[inherit] bg-linear-to-b from-[#0a0a0a] via-[#0a0a0a]/10 to-[#0a0a0a]/0" />

        <video
          src="/video/footer-bg.mp4"
          autoPlay
          muted
          loop
          className="w-full h-full object-cover object-right"
        />
      </div>

      {/* Form */}
      <div className="py-9">

          <div className="bg-white/10 p-3.5 md:p-8 rounded-md backdrop-blur-2xl md:max-w-2/7 flex flex-col gap-9">

            <h2 data-about-heading className="w-full text-xl/7 font-semi text-white md:w-[60%] md:text-5xl/14">
                Send Message
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* Names */}
                <div className="flex flex-row gap-2 w-auto">
                  <div className="flex flex-col gap-1.5 w-full">
                    <label
                      htmlFor="fname"
                      className="font-mono uppercase  text-[12px]"
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
                {/* Status message */}
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

      <div className="@container overflow-hidden">
          <h1 className="whitespace-nowrap text-[32cqw] md:text-[29cqw] text-white/10 font-bold leading-none text-center">
            VISION
          </h1>
      </div>
    </section>
  );
}