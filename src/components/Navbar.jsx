const Navbar = () => {
  return (
    <nav className=" pt-4 flex justify-center sticky top-0 hover:isolation-auto">
      <div className="border space-x-8 px-6 md:px-11 lg:px-14 py-2 rounded-full bg-porto bg-opacity-80 ">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portofolio">Portofolio</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
export default Navbar;
