import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between items-center pt-10 pb-24 px-40 py-12 mt-10 bg-center bg-cover border-b-2 border-b-secondary-color-2 "
      style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
    >
      <section className="w-[50%] relative pb-10   flex flex-col gap-4 ">
        <div className="flex flex-col gap-2">
          <h5 className=" font-medium text-lg">Hi, I'm</h5>
          <h1 className=" font-poppins  font-semibold text-6xl tracking-widest">
            Farouk.
          </h1>
        </div>
        <div className="relative">
          <p className="  ml-12 py-1 px-2 bg-secondary-color-2 font-semibold w-max rounded-md">
            A Front-end Developer
          </p>
          <p className="mt-2">
            I love turning designs and ideas into cool web experiences and work
            closely with designers and backend developers to bring these ideas
            to life.
          </p>
        </div>
        <Link
          href={"/"}
          className="px-5 py-2 bg-secondary-color font-semibold border-2 border-secondary-color-2  rounded-3xl w-max  mt-8 hover:scale-105  transition-all"
        >
          View Resume
        </Link>
      </section>
      <section
        className="relative flex justify-center items-center w-[50%] h-full bg-right bg-contain bg-no-repeat "
        style={{ backgroundImage: "url('/svgs/profile-bg.svg')" }}
      >
        <div className="relative h-[20rem] w-[20rem]">
          <Image
            alt="profile image"
            src={"/images/profile.jpg"}
            style={{
              borderRadius: "50%",
              filter: "brightness(0.9) contrast(1.1)",
              height: "100%",
              width: "100%",
            }}
            objectFit="cover"
            layout="fill"
          />
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full"
            style={{
              backgroundColor: "#4d1f00",
              mixBlendMode: "multiply",
              backgroundBlendMode: "screen",
              opacity: 0.5,
              zIndex: 20,
            }}
          />
        </div>

        <Link
          href="#message"
          className="p-2 bg-white absolute left-[48%] bottom-[-7%] rounded-[50%] z-20 hover:bg-secondary-color-2 hover:text-white transition-all hover:fill-white"
        >
          <Image
            alt="message"
            src={"/svgs/message-programming.svg"}
            width={25}
            height={25}
          />
        </Link>
      </section>
    </header>
  );
};
export default Header;
