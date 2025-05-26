import { faListCheck, faMessage, faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons/faHandshake';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlassChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const refTitle = useRef<HTMLDivElement>(null);
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);
  const card4 = useRef<HTMLDivElement>(null);
  const card5 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    setTimeout(() => {
      gsap.fromTo(
        refTitle.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: refTitle.current,
            start: "top 80%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        card1.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card1.current,
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        card2.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card2.current,
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        card3.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card3.current,
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        card4.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card4.current,
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        card5.current,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card5.current,
            start: "top 60%",
            end: "bottom 90%",
            scrub: 1,
          },
        }
      );

      }, 500);
    }, [])
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, [])

  return (
    <>
      <div className="w-[1024px] relative mx-10 h-full flex gap-8 justify-center items-center flex-col">
        <div className="w-full h-full">
          <div className="w-full h-full text-center">
            <h1 ref={refTitle} className="text-white font-montserrat text-3xl md:text-5xl font-black uppercase mx-4">
              Por que nós?
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full">

          {/* 1. Compromisso real */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
            
              <div ref={card1} className="flex flex-col m-4 gap-6">
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <div className='text-modernBlue text-5xl'><FontAwesomeIcon icon={faHandshake} /></div>
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">1.</span> Compromisso real
                  </h1>
                </div>
                <div className='text-justify'>
                  <span className="text-white font-poppins">
                    A gente veste a camisa do seu projeto. Mergulhamos fundo,
                    entendemos o seu objetivo e só sossegamos quando tudo está
                    rodando do jeito certo — bonito, funcional e estável.
                  </span>
                </div>
              </div>

            {/* 2. Soluções sob medida */}
              <div ref={card2} className="flex flex-col m-4 gap-6">
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <div className='text-modernBlue text-5xl'><FontAwesomeIcon icon={faPuzzlePiece} /></div>
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">2.</span> Soluções sob medida
                  </h1>
                </div>
                <div className='text-justify'>
                  <span className="text-white font-poppins">
                    Não trabalhamos com fórmula pronta. Cada sistema é pensado do
                    zero pra atender a real necessidade do seu negócio, com
                    personalização, performance e escalabilidade.
                  </span>
                </div>
              </div>
          </div>

          {/* 3. Comunicação direta */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
           
              <div ref={card3} className="flex flex-col m-4 gap-6">
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <div className='text-modernBlue text-5xl'><FontAwesomeIcon icon={faMessage} /></div>
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">3.</span> Comunicação direta
                  </h1>
                </div>
                <div className='text-justify'>
                  <span className="text-white font-poppins">
                    Fale com quem faz. Nada de intermediários ou respostas
                    genéricas. Aqui, o diálogo é claro, rápido e com gente que
                    realmente entende do que está fazendo.
                  </span>
                </div>
            </div>

            {/* 4. Qualidade acima de tudo */}
              <div ref={card4} className="flex flex-col m-4 gap-6">
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <div className='text-modernBlue text-5xl'><FontAwesomeIcon icon={faMagnifyingGlassChart} /></div>
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">4.</span> Qualidade acima de tudo
                  </h1>
                </div>
                <div className='text-justify'>
                  <span className="text-white font-poppins">
                    Somos detalhistas. Valorizamos código limpo, design funcional,
                    boa performance e testes. Cada entrega é feita como se fosse
                    pra nós mesmos.
                  </span>
                </div>
              </div>
          </div>

          {/* 5. Transparência no processo */}
          <div ref={card5} className="flex flex-col md:flex-row items-center justify-center w-full">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex gap-4 items-center justify-center md:justify-start">
                  <div className='text-modernBlue text-5xl'><FontAwesomeIcon icon={faListCheck} /></div>
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">5.</span> Transparência no processo
                  </h1>
                </div>
                <div className='text-justify'>
                  <span className="text-white font-poppins">
                    Desde o início, você acompanha tudo: etapas, decisões e
                    prazos. A gente joga limpo, porque parceria de verdade se
                    constrói com confiança.
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
    </>
  );
}
