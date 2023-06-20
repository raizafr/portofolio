import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
const Contact = () => {
  return (
    <section id="contact">
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 md:py-10 py-5 text-gray-500"
        data-aos="fade-up"
      >
        CONTACT
      </div>
      <div
        className="container mx-auto md:px-6 lg:px-36 space-y-3 my-4 mb-5"
        data-aos="fade-right"
      >
        <div className="w-fit hover:text-[#317bdb]">
          <a
            href="https://wa.me/+6282268347830"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 font-semibold "
          >
            <WhatsAppIcon />
            <div className="">+62-822-6834-2730</div>
          </a>
        </div>
        <div className="w-fit hover:text-[#317bdb]">
          <a
            href="mailto:mhdraizafarhan@gmail.com"
            className="flex items-center space-x-4 font-semibold"
          >
            <EmailIcon />
            <div className="">mhdraizafarhan@gmail.com</div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
