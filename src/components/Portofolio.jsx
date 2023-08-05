import pictureAuazadigital from "../assets/picture-auazadigital.webp";
import pictureFoodRecepi from "../assets/picture-foodrecipe.webp";
import picturePortofolio from "../assets/picture-portofolio.webp";
import pictureSlicing from "../assets/picture-slicing-design.webp";
import pictureBacaQuran from "../assets/picture-website-baca-quran.webp";

const Card = ({ image, title, description, linkSourceCode, linkWebsite }) => {
  return (
    <div
      className="bg-[#2C2C6C] p-5 flex flex-col gap-2 hover:bg-transparent rounded-lg border border-[#2C2C6C] duration-300"
      data-aos="fade-up"
    >
      <img src={image} alt={title} className="rounded-lg" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <h3>{description}</h3>
      <div className="flex gap-2 mt-6">
        <a
          href={linkSourceCode}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          Code
        </a>
        <a
          href={linkWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="button-link"
        >
          Visit
        </a>
      </div>
    </div>
  );
};

const Portofolio = () => {
  return (
    <section id="portofolio">
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-white"
        data-aos="fade-up"
      >
        PORTOFOLIO
      </div>
      <div className="container mx-auto px-3 md:px-6 lg:px-36 grid lg:grid-cols-3 gap-5 md:grid-cols-2 ">
        <Card
          image={picturePortofolio}
          title={"Website Portofolio"}
          description={"ReactJs || Tailwindcss || NodeJs || ExpressJs"}
          linkSourceCode={"https://github.com/raizafr/portofolio"}
          linkWebsite={"#"}
        />
        <Card
          image={pictureAuazadigital}
          title={"Auazadigital"}
          description={
            "ReactJs || Tailwindcss || NodeJs || ExpressJs || MySQL || Sequelize"
          }
          linkSourceCode={
            "https://github.com/raizafr/web-user-interface-toko-product-digital"
          }
          linkWebsite={"https://auazadigital.com/"}
        />
        <Card
          image={pictureFoodRecepi}
          title={"Food Recipe"}
          description={"ReactJs || Tailwindcss || DaisyUi"}
          linkSourceCode={"https://github.com/raizafr/food-website"}
          linkWebsite={"https://food-website-gold.vercel.app/"}
        />
        <Card
          image={pictureSlicing}
          title={"Slicing"}
          description={"ReactJs || Tailwindcss"}
          linkSourceCode={
            "https://github.com/raizafr/slicing-landing-page-easyback"
          }
          linkWebsite={"https://landingpage-easybank-123.vercel.app/"}
        />
        <Card
          image={pictureBacaQuran}
          title={"Website Baca Qur'an"}
          description={"ReactJs || Tailwindcss || Fake API"}
          linkSourceCode={
            "https://github.com/raizafr/website-baca-quran-with-public-api"
          }
          linkWebsite={"https://website-baca-quran-with-public-api.vercel.app/"}
        />
      </div>
    </section>
  );
};

export default Portofolio;
