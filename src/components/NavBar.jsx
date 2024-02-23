import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Início",
    },
    {
      id: 2,
      link: "Sobre",
    },
    {
      id: 3,
      link: "Projetos",
    },
    {
      id: 4,
      link: "Experiências",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#0a181b] bg-[#f1eedf] fixed z-20">
      <div>
        <h1 className="text-5xl font-signature ml-2 font-bold">Torres</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize text-[#0a181b] hover:scale-105 duration-200 hover:font-bold hover:underline"
          >
           <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#d1cfc0] to-white text-[#0a181b]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
