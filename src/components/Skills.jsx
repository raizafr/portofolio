import { HiOutlineBadgeCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <section id="skills">
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-white"
        data-aos="fade-up"
      >
        SKILLS
      </div>
      <div className="container mx-auto px-3 md:px-6 lg:px-36 grid md:grid-cols-2 gap-10">
        <div
          className="bg-[#2C2C6C] p-10 rounded-lg border border-[#2C2C6C] hover:bg-transparent duration-500"
          data-aos="fade-right"
        >
          <h2 className="text-center text-xl font-semibold text-[#4BB0F8] ">
            Front End
          </h2>
          <ul className="grid grid-cols-2 gap-7 mt-10">
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              HTML
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              CSS
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Javascript
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Bootsatrap
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Tailwindcss
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Typescript
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              ReactJS
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              NextJs
            </li>
          </ul>
        </div>
        <div
          className="bg-[#2C2C6C] p-10 rounded-lg border border-[#2C2C6C] hover:bg-transparent duration-500"
          data-aos="fade-left"
        >
          <h2 className="text-center text-xl font-semibold text-[#4BB0F8] ">
            Other
          </h2>
          <ul className="grid grid-cols-2 gap-7 mt-10">
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              NodeJs
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              ExpressJs
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Canva
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Mysql
            </li>
            <li className="flex font-semibold items-center gap-4">
              <HiOutlineBadgeCheck className="scale-[1.4]" />
              Git and github
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
