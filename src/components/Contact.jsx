import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

const Card = ({ icon, title, subTitle, link }) => {
  return (
    <div className="bg-[#2C2C6C] border border-[#2C2C6C] py-5 flex flex-col justify-center items-center space-y-2 rounded-lg hover:bg-transparent duration-500">
      {icon}
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-white text-opacity-70 font-semibold text-sm">
        {subTitle}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4BB0F8] text-xs hover:text-[#b1deff] hover:scale-110 duration-300"
      >
        send message
      </a>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="mb-10">
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 md:py-10 py-5 text-white"
        data-aos="fade-up"
      >
        CONTACT
      </div>
      <div
        className="container px-3 mx-auto md:px-6 lg:px-36 md:flex justify-between gap-10 items-center"
        data-aos="fade-up"
      >
        <div className="space-y-5 md:w-1/2 lg:px-28">
          <Card
            icon={<AiOutlineWhatsApp className="scale-[1.4]" />}
            title={"Whatsapp"}
            subTitle={"+62 822-6834-7830"}
            link={"https://wa.me/+6282268347830"}
          />
          <Card
            icon={<AiOutlineMail className="scale-[1.4]" />}
            title={"Email"}
            subTitle={"mhdraizafarhan@gmail.com"}
            link={"mailto:mhdraizafarhan@gmail.com"}
          />
        </div>
        <div className="mt-6 md:mt-0 md:w-1/2">
          <form className="space-y-5">
            <div>
              <input
                type="text"
                className="w-full px-10 py-3 bg-transparent focus:outline-none border border-[#4BB0F8] rounded-lg"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                type="text"
                className="w-full px-10 py-3 bg-transparent focus:outline-none border border-[#4BB0F8] rounded-lg"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Message"
                className="w-full px-10 py-3 bg-transparent focus:outline-none border border-[#4BB0F8] rounded-lg"
              ></textarea>
              {/* <input
                type="text"
                className="w-full px-10 py-3 bg-transparent focus:outline-none border border-[#4BB0F8] rounded-lg"
                placeholder="Message"
              /> */}
            </div>
            <button className="bg-[#4BB0F8] w-full py-3 font-bold rounded-lg hover:bg-[#b7e1ff] hover:text-black duration-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
