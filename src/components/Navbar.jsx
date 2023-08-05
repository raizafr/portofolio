const Navbar = () => {
  return (
    <nav className=" pt-4 flex justify-center sticky top-0 hover:isolation-auto">
      <div className="border space-x-8 px-4 md:px-11 lg:px-14 py-2 rounded-full bg-transparent backdrop-blur-md ">
        <a href="#about" className="font-bold">
          About
        </a>
        <a href="#skills" className="font-bold">
          Skills
        </a>
        <a href="#portofolio" className="font-bold">
          Portofolio
        </a>
        <a href="#contact" className="font-bold">
          Contact
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
