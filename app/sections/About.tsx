import { technologies } from "@/datas/data";

const About = () => {
  return (
    <section
      className="flex flex-col my-0 lg:my-48 mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-bold">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" font-bold text-2xl">01. About Me</span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-2 order-2 lg:order-1">
          <h4 className="font-bold">Technologies i work with</h4>
          <div style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}>
            <ul className="px-8 py-8 flex flex-row  h-auto sm:flex-col gap-4 sm:h-80 lg:gap-2 lg:h-72  flex-wrap w-full">
              {technologies.map((tech) => (
                <li className="  grayscale hover:grayscale-0 flex items-center cursor-pointer gap-5">
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    height={50}
                    width={50}
                  />
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article>
            Farouk Mustapha is a Frontend Developer based in Lagos, Nigeria,
            with 2 years of experience in the field. I have developed web
            applications using JavaScript and TypeScript. Over this period, I
            have worked and interned at startups and companies such as Pathpalz,
            Berrystamp, and JustDoStartUp. <br />
            <br />I have contributed to numerous projects, collaborating with
            product designers, backend developers, DevOps, and other tech
            professionals. I have a strong passion for learning and teaching,
            and am always updated with the latest advancements in technology.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
