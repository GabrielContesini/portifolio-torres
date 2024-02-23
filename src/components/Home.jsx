import { useEffect } from "react"
import HeroImage from "../assets/HeroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css"
import { Link } from 'react-scroll';

const Home = () => {

  useEffect(() => {
    AOS.init({duration:1600})
  })

  return (
    <section name="Início" className="flex h-screen w-full bg-gradient-to-b from-[#f0eddd] to-white text-[#0a181b] scroll-smooth">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2 className="text-4xl sm:text-7xl font-bold text-[#0f2a2f]">
           FullStack & No-Code
          </h2>
          <p className="text-[#1b4c55] py-4 max-w-md">
          Desenvolvedor Fullstack e No Code experiente em criar soluções digitais completas, combinando habilidades de programação tradicional com ferramentas No Code como Webflow e Bubble. <br /> Capaz de desenvolver projetos robustos e escaláveis, além de protótipos e MVPs de forma rápida e eficiente. <br /> Sempre atualizado com as últimas tecnologias e tendências do mercado.
          </p>

          <div>
            <Link to="Projetos" className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-[#1b4c55] to-[#0a1e21] cursor-pointer">
                Portifólio
              <span className="group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>

        <div>
            <img src={HeroImage} alt="homeImage" className="rounded-2xl mx-auto w-2/3 md:w-full overflow-auto" data-aos="fade-up" data-aos-anchor-placement="top-bottom"/>
        </div>
      </div>
    </section>
  );
};

export default Home;