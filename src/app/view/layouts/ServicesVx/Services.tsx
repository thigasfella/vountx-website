import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin();

const services = [
  {
    id: 1,
    title: "Desenvolvimento Web",
    image: "/images/desenvolvimento.jpg",
    description: "Sites modernos, rápidos e responsivos.",
  },
  {
    id: 2,
    title: "APIs Robustas",
    image: "/images/APIs.png",
    description: "Integrações sólidas e escaláveis.",
  },
  {
    id: 3,
    title: "Sistemas Personalizados",
    image: "/images/personalizado.jpg",
    description: "Sistemas web sob medida para seu negócio.",
  },
];

export default function Services() {
  const refTitle = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

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
      cardRefs.current.map((el, index) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            x: index % 2 == 0 ? -50 : 50,
          },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: el,
              start: "top 60%",
              end: "bottom 90%",
              scrub: 1,
            },
          }
        );
      });
    }, 500);
  }, []);
  useLayoutEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="mx-10 w-[1024px] gap-8 relative flex flex-col items-center">
      <h2
        ref={refTitle}
        className="font-montserrat text-white text-3xl md:text-5xl font-bold uppercase text-center"
      >
        Nossos Serviços
      </h2>

      <div className="flex flex-col gap-6 w-full">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="group relative h-72 rounded-[5px] overflow-hidden shadow-lg border border-blueCard cursor-pointer"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
              <p className="text-white font-poppins text-lg">
                {service.description}
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white text-xl font-semibold font-montserrat">
                {service.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
