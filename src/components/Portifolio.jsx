import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import project1 from "../assets/project1.jpg";


export default function Portifolio() {

  useEffect(() => {
    AOS.init({duration:1600})
  })

  return (
    <section name="Projetos" className="bg-gradient-to-b from-[#f0eddd] to-white text-[#0a181b] w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-up" data-aos-anchor-placement="top-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#0a181b]">Projetos</p>
          <p className="py-6">Veja o repositório de alguns projetos que realizei</p>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0" data-aos="fade-up" data-aos-anchor-placement="center">
            <div className="shadow-md shadow-[#0a181b] rounded-lg">
            <img src={project1} alt="" className="rounded-md duration-200 hover:scale-110"/>
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110"> <a href="https://github.com/GabrielContesini/SinglePageDev" target="_blank">Código</a></button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
