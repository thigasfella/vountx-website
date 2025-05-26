"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin();

export default function TopBar() {
  useGSAP(() => {
    const tl = gsap.timeline();
      tl.fromTo(
        "#contentTopBarRef",
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
      <div className="fixed z-10 p-4 w-full min-h-[3rem] flex items-center justify-start bg-[rgba(0, 0, 0, 0.36)] rounded-b-[10px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[8.9px] border border-[rgba(0,0,0,0.3)]">
        <div id="contentTopBarRef" className="flex flex-col items-center justify-between gap-4 rounded-lg w-full h-full md:flex-row md:flex-wrap md:gap-8">
          <div className="flex w-[62%] mx-4 flex-wrap items-center justify-center gap-4 md:justify-start md:gap-8">
            <motion.div
              className="linkTopBar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p
                onClick={() =>
                  document
                    .getElementById("inicio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-poppins font-light text-sm md:text-base text-white cursor-pointer"
              >
                Inicio
              </p>
            </motion.div>
            <motion.div
              className="linkTopBar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p
                onClick={() =>
                  document
                    .getElementById("sobre-nos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-poppins font-light text-sm md:text-base text-white cursor-pointer"
              >
                Sobre nós
              </p>
            </motion.div>
            <motion.div
              className="linkTopBar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p
                onClick={() =>
                  document
                    .getElementById("servicos")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-poppins font-light text-sm md:text-base text-white cursor-pointer"
              >
                Serviços
              </p>
            </motion.div>
            <motion.div
              className="linkTopBar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <p
                onClick={() =>
                  document
                    .getElementById("porque-nos?")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-poppins font-light text-sm md:text-base text-white cursor-pointer"
              >
                Por que nós?
              </p>
            </motion.div>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            id="btnContact"
            className="flex items-center justify-center cursor-pointer rounded-[5px] p-2 bg-modernBlue md:mr-4"
          >
            <Link
              className="text-sm font-montserrat font-light text-white"
              target="_blank"
              href="https://wa.link/7y6h5a"
            >
              FAZER UM ORÇAMENTO
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
