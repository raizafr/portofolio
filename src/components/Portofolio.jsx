import portofolio from "../assets/portofolio.webp";
import todolist from "../assets/todolist.webp";
import cloningTwitter from "../assets/twitterClone.webp";
import slicing from "../assets/slicing.webp";
import thirdSlicing from "../assets/slicing3.webp";

const Card = (props) => {
  return (
    <div className="w-[255px] h-[210px] bg-[#6B7280] hover:-translate-y-2 duration-300 hover:shadow-md hover:shadow-white">
      <div className="flex justify-center">
        <img src={props.image} alt="" className="w-[250px] mt-0.5" />
      </div>
      <div className="mt-1 px-1">
        <div className=" font-bold ">
          {props.title}
          <span className="text-xs font-thin">{props.info}</span>
        </div>
        <div className="space-x-1 text-xs mt-2">
          <a href={props.liveDemoLink} className="button" target="_blank">
            {props.linkTitleDemo}
          </a>
          <a href={props.sourceCodeLink} className="button" target="blank">
            {props.linkTitleCode}
          </a>
        </div>
      </div>
    </div>
  );
};

const Portofolio = () => {
  return (
    <section>
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-gray-500"
        data-aos="fade-up"
      >
        PORTOFOLIO
      </div>
      <div className="container mx-auto lg:px-36 space-y-3 my-4 mb-5 md:px-10">
        <div
          className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-7"
          data-aos="fade-up"
        >
          <Card
            image={slicing}
            title="Slicing "
            liveDemoLink="https://friendly-strudel-923ff0.netlify.app/"
            sourceCodeLink="https://github.com/raizafr/slicing-design-2"
            linkTitleDemo="Live Demo"
            linkTitleCode="Surce Code"
          />
          <Card
            image={thirdSlicing}
            title="Slicing "
            liveDemoLink="https://cosmic-sopapillas-bc7b4f.netlify.app/"
            sourceCodeLink="https://github.com/raizafr/slicing-3"
            linkTitleDemo="Live Demo"
            linkTitleCode="Surce Code"
          />
          <Card
            image={portofolio}
            title="Website Portofolio"
            liveDemoLink="http://raizafarhan.netlify.app/"
            sourceCodeLink="https://github.com/raizafr/portofolio-master"
            linkTitleDemo="Live Demo"
            linkTitleCode="Surce Code"
          />
          <Card
            image={todolist}
            title="Todo List"
            liveDemoLink="#"
            sourceCodeLink="https://github.com/raizafr/todolist"
            linkTitleDemo="Live Belum Tersedia"
            linkTitleCode="Surce Code"
          />
          <Card
            image={cloningTwitter}
            title="Twitter Clone"
            info=" dalam pengerjaan"
            liveDemoLink="#"
            sourceCodeLink="https://github.com/raizafr/twitter-clone"
            linkTitleDemo="Live Belum Tersedia"
            linkTitleCode="Surce Code"
          />
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
