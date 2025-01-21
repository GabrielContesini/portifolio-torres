import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1600 });
  });

  return (
    <section
      name="Sobre"
      className="w-full h-screen bg-gradient-to-b from-[#f0eddd] to-white text-[#0a181b] scroll-smooth"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p
            className="text-4xl font-bold inline border-b-4 border-[#0a181b]"
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
          >
            Sobre
          </p>
        </div>

        <p
          className="text-xl mt-20"
          data-aos="fade-up"
          data-aos-anchor-placement="top"
        >
          Como desenvolvedor há mais de um ano, combino habilidades em
          linguagens de programação tradicionais com o conhecimento de
          plataformas no-code. Isso me permite explorar o melhor de ambos os
          mundos: escrever código personalizado quando necessário e aproveitar
          ferramentas de baixo código para agilizar o processo de
          desenvolvimento. Tenho experiência em diversas linguagens de
          programação, além de familiaridade com plataformas no-code como Bubble
          e NodeRed.
        </p>

        <br />

        <p
          className="text-xl"
          data-aos="fade-up"
          data-aos-anchor-placement="center"
        >
          Minha abordagem inovadora me permite identificar
          oportunidades para otimizar processos e economizar tempo. Trabalho bem
          em equipe, colaborando com outros desenvolvedores, designers e partes
          interessadas para criar soluções que atendam às necessidades do
          cliente. Estou sempre buscando aprender e me manter atualizado com as
          últimas tendências e tecnologias, garantindo que possa oferecer
          soluções de alta qualidade de forma eficiente e ágil.
        </p>
      </div>
    </section>
  );
}

