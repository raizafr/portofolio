import {
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import profile from "../assets/mypicture.jpg";

export default function Aboutme() {
  return (
    <section id="portofolio">
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-white animate__animated animate__backInDown"
        data-aos="fade-up"
      >
        ABOUT
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:px-28 gap-5 lg:gap-10">
        <div className="lg:w-1/2 animate__animated animate__backInDown">
          <div className="px-10">
            <img src={profile} alt="" className="rounded-3xl" />
          </div>
          <div className="px-6 -mt-10">
            <div className="bg-black w-full h-[100px] rounded-3xl flex flex-col justify-end">
              <div className="flex items-center px-3 py-5 gap-4">
                <span>Find me on :</span>
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
                <a
                  href="https://wa.me/6282268347830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-2"
                >
                  <AiOutlineWhatsApp className="scale-150" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="lg:w-1/2 space-y-8 px-5 lg:px-0 animate__animated animate__backInUp"
          data-aos="fade-up"
        >
          <h2 className="text-4xl lg:text-6xl ">
            Helo <br /> I’m Raiza Farhan
          </h2>
          <p data-aos="fade-up">
            I am very interested in working as a Front End Web Developer. I have
            expertise in building responsive and attractive websites and web
            applications with HTML, CSS, and JavaScript. I am also an expert in
            using frameworks such as ReactJs, NextJs, Tailwindcss, bootstrap to
            build dynamic and interactive views. In addition, I like to work in
            a team and always try to give the best results. I'm sure with my
            skills, I can make a significant contribution to your company as a
            Front End Web Developer.
          </p>
        </div>
      </div>
    </section>
  );
}
