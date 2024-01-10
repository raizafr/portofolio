import { HiOutlineBadgeCheck } from "react-icons/hi";

export default function Skill() {
  return (
    <section id="portofolio">
      <div className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-white">
        SKILLS
      </div>
      <div className="container mx-auto px-3 md:px-6 lg:px-36">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-[#2C2C6C] md:p-10 p-3 rounded-lg border border-[#2C2C6C] hover:bg-transparent duration-500">
            <h2 className="text-center text-xl font-semibold text-[#4BB0F8] ">
              Front End
            </h2>
            <ul
              className={`grid grid-cols-2 gap-7 mt-10 mb-5 justify-items-center lg:px-10`}
            >
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                HTML
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                CSS
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Javascript
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                <p>Bootsatrap</p>
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Tailwindcss
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Typescript
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                ReactJS
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                NextJs
              </li>
            </ul>
          </div>
          <div
            className="bg-[#2C2C6C] md:p-10 p-3 rounded-lg border border-[#2C2C6C] hover:bg-transparent duration-500"
            data-aos="fade-right"
          >
            <h2 className="text-center text-xl font-semibold text-[#4BB0F8] ">
              Back End
            </h2>
            <ul
              className={`grid grid-cols-2 gap-7 mt-10 mb-5 justify-items-center lg:px-10`}
            >
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                NodeJs
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                MySQL
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                ExpressJs
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                PostgreSQL
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                MongoDB
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                RestAPI
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                JWT
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Firebase
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10">
          <div className="bg-[#2C2C6C] md:p-10 p-3 rounded-lg border border-[#2C2C6C] hover:bg-transparent duration-500">
            <h2 className="text-center text-xl font-semibold text-[#4BB0F8] ">
              Other
            </h2>
            <ul
              className={`grid lg:grid-cols-4 grid-cols-2 gap-7 mt-10 mb-5 justify-items-center lg:px-10`}
            >
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Figma
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Postman
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Git & github
              </li>
              <li className="flex font-semibold items-center gap-4 w-full">
                <HiOutlineBadgeCheck className="scale-[1.4]" />
                Vercel
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
