import profile from "../assets/mypicture.jpg";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
const About = () => {
  return (
    <section id="about">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-white">
        ABOUT
      </h1>
      <div className="container px-3 mx-auto md:px-6 lg:px-36 md:space-x-9 md:flex items-center">
        <div className="sm:mt-9" data-aos="fade-right">
          <div className="">
            <div className="px-6 flex justify-center md:w-96 w-full">
              <img src={profile} alt="profile" className="rounded-xl w-full" />
            </div>
            <div className="bg-latar-image rounded-3xl -mt-36 sm:mx-24 md:mx-auto">
              <ul className="px-5 pt-40 pb-4 text-sm space-y-1 flex justify-start items-center gap-2">
                <li className="">
                  Find me on : <hr />
                </li>
                <a
                  href="https://www.instagram.com/_raizafr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-2"
                >
                  <AiOutlineInstagram className="scale-150" />
                </a>
                <a
                  href="https://github.com/raizafr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-2"
                >
                  <AiFillGithub className="scale-150" />
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 " data-aos="fade-left">
          <div className="py-3 md:text-4xl text-3xl font-semibold bg-clip-text text-transparent bg-[#4BB0F8]">
            I’m Raiza Farhan. I live in <br /> Padang Indonesia
          </div>
          <div className="space-y-4">
            <p>
              I am very interested in working as a Front End Web Developer. I
              have expertise in building responsive and attractive websites and
              web applications with HTML, CSS, and JavaScript. I am also an
              expert in using frameworks such as ReactJs, NextJs, Tailwindcss,
              bootstrap to build dynamic and interactive views. In addition, I
              like to work in a team and always try to give the best results.
              I'm sure with my skills, I can make a significant contribution to
              your company as a Front End Web Developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
