import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Link from "next/link";

interface CardProps {
  id: number;
  name: string;
  type: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  stacks: Array<string>;
}

const Card = ({
  id,
  name,
  type,
  description,
  image,
  liveLink,
  githubLink,
  stacks,
}: CardProps) => {
  const isEven = id % 2 === 0;
  return (
    <section
      className={`flex flex-col lg:flex-row w-full md:px-12  items-center px-0`}
    >
      <div
        className={`w-full sm:w-[90%] lg:w-[60%] ${
          isEven ? "lg:order-1" : "lg:order-2"
        }`}
      >
        {liveLink ? (
          <Link
            href={liveLink}
            className="w-full"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              alt={`${name} Image`}
              className=" object-contain h-auto lg:object-cover grayscale hover:grayscale-0 transition-all w-full lg:h-[370px] lg:object-left rounded-t-lg lg:rounded-lg shadow-lg"
            />
          </Link>
        ) : (
          <img
            src={image}
            alt={`${name} Image`}
            className=" object-contain h-auto lg:object-cover grayscale hover:grayscale-0 transition-all w-full lg:h-[370px] lg:object-left  rounded-t-lg lg:rounded-lg shadow-lg"
          />
        )}
      </div>

      <div
        className={`bg-[#FBEDDD] p-4 lg:p-0 w-full sm:w-[90%] lg:w-[40%] relative lg:bg-transparent lg:rounded-none rounded-b-lg ${
          isEven ? "lg:order-2 lg:text-right" : "lg:order-1 lg:text-left"
        }`}
      >
        <h6 className="text-lg text-secondary-color-3 font-bold">{type}</h6>
        <h1 className=" text-2xl mt-2 font-semibold ">{name}</h1>
        <div
          className={` px-0 py-0 lg:px-5 lg:py-7 bg-[#FBEDDD] mr-0 ml-0 ${
            isEven ? "lg:-ml-16" : "lg:-mr-16"
          }  mt-2 rounded-md z-10 relative`}
        >
          {description}
        </div>
        <div className=" px-0 lg:text-left mt-2 lg:px-2 flex gap-2 text-secondary-color-3 font-bold flex-wrap">
          {stacks.map((stack) => (
            <span>{stack}</span>
          ))}
        </div>
        <div
          className={`flex gap-4 items-center justify-normal  ${
            isEven ? " lg:justify-end" : " lg:justify-start"
          } `}
        >
          {liveLink && (
            <Link
              href={liveLink}
              className={`mt-2 flex justify-normal ${
                isEven ? " lg:justify-end" : " lg:justify-start"
              }`}
            >
              <FaArrowUpRightFromSquare size={20} className="text-black" />
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              className={`mt-2 flex justify-normal ${
                isEven ? " lg:justify-end" : " lg:justify-start"
              }`}
            >
              <img
                src={"https://cdn.simpleicons.org/github"}
                alt={"github repo"}
                height={20}
                width={20}
              />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
export default Card;
