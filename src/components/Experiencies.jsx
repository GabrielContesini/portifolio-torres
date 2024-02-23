import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

export default function Experiencies() {

    useEffect(() => {
        AOS.init({duration:1600})
      })

    const list = [

        {
            id: 1,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
            alt: "Html - 5",
            shadow: "shadow-orange-500"
        },
        {
            id: 2,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            alt: "JavaScript",
            shadow: "shadow-yellow-500"
        },
        {
            id: 3,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
            alt: "React",
            shadow: "shadow-blue-500"
        },
        {
            id: 4,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
            alt: "Python",
            shadow: "shadow-yellow-500"
        },
        {
            id: 5,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
            alt: "Laravel",
            shadow: "shadow-red-500"
        },
        {
            id: 6,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
            alt: "PHP",
            shadow: "shadow-purple-500"
        },
        {
            id: 7,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
            alt: "VueJS",
            shadow: "shadow-green-500"
        },
        {
            id: 8,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
            alt: "MySql",
            shadow: "shadow-gray-500"
        },
        {
            id: 9,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
            alt: "NodeJs",
            shadow: "shadow-green-500"
        },
        {
            id: 10,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
            alt: "Docker",
            shadow: "shadow-blue-500"
        },
        {
            id: 11,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg",
            alt: "TailWind",
            shadow: "shadow-blue-500"
        },
        {
            id: 12,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            alt: "TypeScript",
            shadow: "shadow-blue-500"
        },
        {
            id: 13,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
            alt: "Jquery",
            shadow: "shadow-blue-500"
        },
        {
            id: 14,
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
            alt: "AWS",
            shadow: "shadow-yellow-500"
        }

    ]
  return (
    <section name="Experiências" className="bg-gradient-to-b from-[#f0eddd] to-white w-full h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-[#0a181b]">
            <div className="pb-8" data-aos="fade-up" data-aos-anchor-placement="top-center">
                <p className="text-4xl font-bold border-b-4 border-[#0a181b] p-2 inline" >Experiências</p>
                <p className="py-6" data-aos="fade-up">Essas são algumas linguagens de programação que possuo experiência a +1 ano</p>
            </div>
           
           <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8 px-12 sm:px-0">
                
                {
                    list.map(({id, image, alt, shadow}) =>(

                        <div key={id} className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${shadow} bg-[#edede9] cursor-pointer`} data-aos="fade-up" data-aos-anchor-placement="center">
                            <img src={image} alt={alt} className="w-20 mx-auto"/>
                            <p className="mt-4 text-[#0a181b]">{alt}</p>
                        </div>

                    ))
                }
                
                
           </div>
        </div>
        
    </section>
  )
}
