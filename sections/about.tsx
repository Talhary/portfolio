import Image from "next/link";
export const About = () => {
  return (
    <div className="text-black text-2xl dark:bg-dark-bg dark:text-white flex items-center  justify-center">
      <div className="flex flex-row max-md:flex-col justify-center items-center w-[100vw] h-screen ">
        <div className="w-[50%] max-md:w-[80%] flex items-center max-md:items-start max-md:mb-10  flex-col">
          <div className="max-sm:hidden">
            <img
              src={"/image.png"}
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col items-start justify-start ">
            <h2 className="text-4xl font-semibold mt-5 max-sm:text-2xl">
              Muhammad Talha
            </h2>
            <p className="mt-2 text-2xl max-sm:text-xl">Web Developer</p>
          </div>
        </div>
        <div className=" max-sm:w-auto text-3xl max-sm:px-5 max-md:text-2xl max-md:w-[80%] max-sm:text-xl w-[45%] max-md:w-[80%] flex items-center max-md:items-start max-md:mb-10  flex-col">
          <p>
            I'm a passionate web developer with a love for creating stunning and
            performant user interfaces. My journey in web development began with
            HTML and CSS, and I've since mastered JavaScript, with a focus on
            frameworks like React and Next.js. I'm a strong advocate for
            accessibility and responsive design, ensuring that the websites I
            build are available to everyone, regardless of their device or
            capabilities.
          </p>
        </div>
      </div>
      <div className="hidden">TODO: ADD SOCIAL MEDIA LOGOS</div>
    </div>
  );
};
