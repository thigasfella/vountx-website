"use client";
import ReactLenis from "lenis/react";
import TopBar from "./components/topbar/Topbar";
import HomePage from "@/app/view/layouts/Home/HomePage";
import About from "./view/layouts/About/About";
import WhyUs from "./view/layouts/WhyUs/WhyUs";
import Services from "./view/layouts/ServicesVx/Services";
import Footer from "./view/layouts/Footer/Footer";

export default function Home() {
  return (
    <div className="flex relative flex-col min-h-[100vh] w-[100vw] gap-14">
     
      <TopBar />
      <ReactLenis root>
       <div className="absolute animate-pulse rounded-r-full left-0 h-full w-[0] bg-[#21D4FD] shadow-[0_0_60px_2px_#21D4FD]" />
       <div className="absolute animate-pulse rounded-l-full right-5 h-full w-[0] bg-[#21D4FD] shadow-[0_0_60px_2px_#21D4FD]" />
        <section id="inicio" className="bg-primary min-h-[100vh] w-[100vw] flex items-center justify-center">
          <HomePage />
        </section>

        <section
          id="sobre-nos" className="bg-primary min-h-[100vh] w-[100vw] flex items-center justify-center"
        >
          <About/>
        </section>

        <section
          id="servicos" className="bg-primary min-h-[100vh] w-[100vw] flex items-center justify-center"
        >
          <Services/>
        </section>

        <section
          id="porque-nos?" className="bg-primary min-h-[100vh] w-[100vw] flex items-center justify-center"
        >
          <WhyUs/>
        </section>

        <section
          id="contate-nos"
          className="bg-modernBlack min-h-[50vh] w-[100vw] flex items-center justify-center"
        >
          <Footer/>
        </section>
      </ReactLenis>
      </div>
  );
}
