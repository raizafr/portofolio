import profile from "../assets/profile.png";
// import instagram from "../aset/instagram.png";
// import linkedin from "../aset/linkedin.png";
// import github from "../aset/github.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <main>
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-gray-500"
        data-aos="fade-right"
      >
        ABOUT
      </div>
      <div className="container mx-auto md:px-6 lg:px-36 md:space-x-9 md:flex">
        <div className="sm:mt-9" data-aos="fade-right">
          <div className="">
            <div className="px-6 flex justify-center">
              <img src={profile} alt="profile" />
            </div>
            <div className="bg-latar-image rounded-3xl -mt-36 sm:mx-24 md:mx-auto">
              <ul className="px-5 pt-40 pb-4 text-sm space-y-1">
                <li className="">
                  Find me on : <hr />
                </li>
                <a
                  href="https://www.instagram.com/_raizafr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-2"
                >
                  <InstagramIcon />
                  <span>_raizafr</span>
                </a>
                <a
                  href="https://github.com/raizafr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex space-x-2"
                >
                  <GitHubIcon />
                  <span>raizafr</span>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-2/3 " data-aos="fade-left">
          <div className="py-3 md:text-4xl text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-800">
            I’m Raiza Farhan. I live in <br /> Padang Indonesia
          </div>
          <div className="space-y-4">
            <p>
              Saya menyukai hal yang berhubungan dengan teknologi dan
              perogramming, walaupun tidak mempunyai latar belakang pendidikan
              di dunia teknologi dan programming.
            </p>
            <p>
              Saat ini saya sedang mencari pekerjaan sebagai web developer, web
              portofolio ini saya sebagai tempat untuk memperlihatkan progress
              saya dalam dunia web development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
