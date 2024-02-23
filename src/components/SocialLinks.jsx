import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] rounded-t-md hover:ml-[-10px] hover:rounded-md bg-[#b7c0c1]" 
            }
          >
            <a
              href="https://www.linkedin.com/in/gabriel-contesini-603588210/"
              target="_blank"
              className="flex justify-between items-center w-full text-[#0f2a2f]"
            >
              <>
                LinkedIn <FaLinkedin />
              </>
            </a>
          </li>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md bg-[#b7c0c1]" 
            }
          >
            <a
              href="https://github.com/GabrielContesini"
              target="_blank"
              className="flex justify-between items-center w-full text-[#0f2a2f]"
            >
              <>
                GitHub <FaGithub />
              </>
            </a>
          </li>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] hover:ml-[-10px] hover:rounded-md bg-[#b7c0c1]" 
            }
          >
            <a
              href="mailto:gabrielct.moraes@gmail.com"
              target="_blank"
              className="flex justify-between items-center w-full text-[#0f2a2f]"
            >
              <>
                Contato <CiMail />
              </>
            </a>
          </li>
          <li
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-110px] rounded-b-md hover:ml-[-10px] hover:rounded-md bg-[#b7c0c1]" 
            }
          >
            <a
              href="/"
              target="_blank"
              className="flex justify-between items-center w-full text-[#0f2a2f]"

            >
              <>
                Currículo <BsFillPersonLinesFill />
              </>
            </a>
          </li>
      </ul>
    </div>

  );
};

export default SocialLinks;
