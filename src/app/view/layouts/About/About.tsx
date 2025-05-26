import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const refTitle = useRef<HTMLDivElement>(null);
  const card1 = useRef<HTMLDivElement>(null);
  const card2 = useRef<HTMLDivElement>(null);
  const card3 = useRef<HTMLDivElement>(null);
  const card4 = useRef<HTMLDivElement>(null);
  const card5 = useRef<HTMLDivElement>(null);
  const card6 = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(
        card6.current,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: card6.current,
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
              Conheça a vountx
            </h1>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
            <div ref={card1} className="w-full min-h-[20rem] rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[15px] border border-[#21d4fd]">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">1.</span> Quem somos nós?
                  </h1>
                </div>
                <div>
                  <span className="text-white font-poppins">
                    A VountX é uma software house criada por pessoas que
                    acreditam que tecnologia deve ser simples, acessível e feita
                    com alma. Nascemos da vontade de criar soluções reais para
                    problemas reais — com um olhar moderno, uma escuta ativa e
                    um cuidado que vai além do código. Trabalhamos para entregar
                    não só sistemas funcionais, mas experiências digitais que
                    geram valor e fazem sentido. Cada projeto é uma parceria, e
                    cada cliente é tratado como parte da nossa equipe.
                  </span>
                </div>
              </div>
            </div>
            <div ref={card2} className="w-full min-h-[15rem] rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[15px] border border-[#21d4fd]">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">2.</span> O que fazemos?
                  </h1>
                </div>
                <div>
                  <span className="text-white font-poppins">
                    Desenvolvemos soluções digitais completas — sistemas web,
                    plataformas personalizadas, sites... Atuamos desde a
                    concepção da ideia até o deploy final, com foco em
                    usabilidade, performance e escalabilidade. A gente não
                    entrega apenas um produto: entregamos uma ferramenta pensada
                    para crescer com o seu negócio e evoluir com o tempo
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between w-full gap-4 md:flex-row">
            <div ref={card3} className="w-full min-h-[15rem] rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[15px] border border-[#21d4fd]">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">3.</span> Nosso
                    diferencial
                  </h1>
                </div>
                <div>
                  <span className="text-white font-poppins">
                    O que nos diferencia é a forma como nos conectamos com cada
                    projeto. Não trabalhamos com pacotes fechados ou fórmulas
                    prontas. Aqui, cada sistema é único, pensado com estratégia
                    e desenvolvido com atenção aos mínimos detalhes. A
                    comunicação é clara, o processo é transparente, e o cliente
                    participa ativamente. Entregamos com agilidade,
                    responsabilidade e qualidade.
                  </span>
                </div>
              </div>
            </div>
            <div ref={card4}  className="w-full min-h-[20rem] rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[15px] border border-[#21d4fd]">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">4.</span> Nossa visão
                  </h1>
                </div>
                <div>
                  <span className="text-white font-poppins">
                    Acreditamos que o futuro pertence a quem tem coragem de
                    inovar. Nossa visão é nos tornarmos referência em tecnologia
                    sob medida, aliando design, performance e acessibilidade em
                    cada projeto que entregamos. Queremos ser reconhecidos não
                    só pela excelência técnica, mas pelo cuidado, pela ética e
                    pela paixão em cada linha de código.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-col  flex items-center justify-between w-full gap-4 md:flex-row">
            <div ref={card5} className="w-full flex flex-col min-h-[20rem] rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[15px] border border-[#21d4fd]">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">5.</span> Nossos valores
                  </h1>
                </div>
                <div>
                  <span className="text-white font-poppins">
                    Ética, responsabilidade, inovação e comprometimento. Na
                    VountX, acreditamos que a base de qualquer solução bem
                    construída está na confiança. Por isso, prezamos pela
                    verdade no processo, pela entrega com excelência e por
                    relações duradouras com nossos clientes. Respeitamos
                    pessoas, ideias e o tempo de cada negócio. Valorizamos o
                    trabalho em equipe, a escuta ativa e o crescimento conjunto.
                  </span>
                </div>
              </div>
            </div>
            <div ref={card6} className="w-full min-h-[15rem] rounded-[5px] shadow-[0_4px_30px_rgba(0,0,0.1)] backdrop-blur-[15px] border border-[#21d4fd]">
              <div className="flex flex-col m-4 gap-6">
                <div className="flex items-center justify-center md:justify-start">
                  <h1 className="text-white font-montserrat font-normal">
                    <span className="font-black mr-2 text-3xl">6.</span> Por que escolher
                    a VountX?
                  </h1>
                </div>
                <div>
                  <span className="text-white font-poppins">
                    Escolher a VountX é ter mais que um fornecedor — é ter um
                    parceiro de verdade. Mergulhamos no seu projeto como se
                    fosse nosso, com foco em resultado, escuta ativa e entrega
                    estratégica. Com a gente, você recebe mais do que técnica:
                    recebe atenção, visão moderna e compromisso real com o seu
                    sucesso digital.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
