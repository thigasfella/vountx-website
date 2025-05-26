"use client";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
gsap.registerPlugin();
export default function HomePage() {
    useGSAP(() => {
      const tl = gsap.timeline();
        tl.fromTo(
          "#contentRef",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 4,
          }
        );
    }, []);

  return (
    <>
      <div className="flex items-center justify-center mx-10 w-[1024px] h-full">
        <div id="contentRef" className="absolute w-full">
          <div className="relative flex gap-8 flex-col items-center justify-center w-full">
            <div>
              <Image
                src={"/images/logoTrsp.png"}
                width={500}
                height={500}
                quality={100}
                alt="logo"
                priority={true}
                className="w-[250px] h-[250px] md:w-[500px] md:h-[500px]"
              />
            </div>
            <div className="absolute top-[48%] md:top-[56%] w-full text-center">
              <h1 className="text-white font-montserrat text-2xl md:text-4xl font-thin uppercase mx-4">
                Conectando negócios à inovação!
              </h1>
            </div>
            <div className="flex items-center justify-center flex-col">
              <svg
                onClick={() =>
                  document
                    .getElementById("sobre-nos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="animate-bounce cursor-pointer w-12 h-12 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0.5"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <p
                onClick={() =>
                  document
                    .getElementById("sobre-nos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-white mt-2 font-montserrat font-extralight cursor-pointer"
              >
                Role a página
              </p>
            </div>
          </div>
        </div>
        <div className="w-[20%] h-[190px] rounded-full bg-gradient-to-br from-[#21D4FD] to-[#0A0B12] blur-3xl opacity-60 animate-pulse shadow-[0_0_60px_20px_#21D4FD]" />
      </div>
    </>
  );
}
