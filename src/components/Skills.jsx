const Skills = () => {
  return (
    <section id="skills">
      <div
        className="text-5xl md:text-6xl lg:text-8xl font-bold lg:px-52 sm:px-20 py-10 text-gray-500"
        data-aos="fade-up"
      >
        SKILLS
      </div>
      <div className="container mx-auto md:px-6 lg:px-36 text-sm">
        <div data-aos="fade-right">
          <div className="font-semibold my-4">
            <div className="mb-2">Markup Language</div>
            <hr />
          </div>
          <div className="flex space-x-4">
            <div>
              <div className="bg-html text-center w-20 rounded-full py-0">
                HTML
              </div>
            </div>
            <div>
              <div className="bg-css text-center w-20 rounded-full py-0">
                CSS
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="font-semibold my-4">
            <div className="mb-2">Programming Language</div>
            <hr />
          </div>
          <div className="flex space-x-4">
            <div>
              <div className="bg-[#e8dd13] text-center w-28 rounded-full py-0">
                JAVASCRIPT
              </div>
            </div>
            <div>
              <div className="bg-[#10b34f] text-center w-28 rounded-full py-0">
                NODE JS
              </div>
            </div>
            <div>
              <div className="bg-php text-center w-20 rounded-full py-0">
                PHP
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="font-semibold my-4">
            <div className="mb-2">DBMS</div>
            <hr />
          </div>
          <div className="flex space-x-4">
            <div>
              <div className="bg-[#e88f13] text-center w-28 rounded-full py-0">
                MY SQL
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="font-semibold my-4">
            <div className="mb-2">Framework</div>
            <hr />
          </div>
          <div className="flex space-x-4 flex-wrap">
            <div>
              <div className="bg-bootstrap text-center w-24 rounded-full py-0">
                BOOTSTRAP
              </div>
            </div>
            <div>
              <div className="bg-tailwindcss text-center w-28 rounded-full py-0">
                TAILWINDCSS
              </div>
            </div>
            <div>
              <div className="bg-reactjs text-center w-20 rounded-full py-0">
                REACTJS
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-right">
          <div className="font-semibold my-4">
            <div className="mb-2">Other</div>
            <hr />
          </div>
          <div className="flex space-x-4">
            <div>
              <div className="bg-figma text-center w-28 rounded-full py-0">
                FIGMA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
