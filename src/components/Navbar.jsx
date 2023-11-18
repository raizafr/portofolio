const Navbar = () => {
  return (
    <nav className=" pt-4 flex justify-center sticky top-0 hover:isolation-auto z-10">
      <div className="flex items-center space-x-4 px-4 md:px-11 lg:px-14 py-2 rounded-full bg-[#4BB0F8] backdrop-blur-md bg-opacity-40 animate__animated animate__backInDown font-semibold">
        <a href="#about" className="hover:text-blue-400 duration-300">
          About
        </a>
        <div className="h-4 border-l"></div>
        <a href="#skills" className="hover:text-blue-400 duration-300">
          Skills
        </a>
        <div className="h-4 border-l"></div>
        <a href="#portofolio" className="hover:text-blue-400 duration-300">
          Portofolio
        </a>
        <div className="h-4 border-l"></div>
        <a href="#contact" className="hover:text-blue-400 duration-300">
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
