import Image from 'next/image';
import Link from 'next/link';

export const About = () => {
  return (
    <div className="text-black dark:bg-dark-bg dark:text-white flex items-center justify-center h-screen w-full">
      <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-screen-lg mx-auto p-5">
        <div className="flex flex-col lg:flex-col lg:gap-y-20 md:flex-row items-center md:w-1/2 w-full mb-10 md:mb-0">
          <div className="sm:mr-5  mb-5 sm:mb-0">
            <Image
              src="/image.png"
              width={250}
              height={250}
              className="rounded-full"
              alt="Profile Picture"
            />
          </div>
          <div className="flex flex-col items-center md:items-start mt-5 md:mt-0">
            <h2 className="text-4xl font-semibold max-sm:text-2xl">Muhammad Talha</h2>
            <p className="mt-2 text-2xl max-sm:text-xl">Web Developer</p>
          </div>
        </div>
        <div className="text-3xl md:w-1/2 w-full text-center md:text-left max-sm:text-xl">
          <p>
            I'm a passionate web developer with a love for creating stunning and performant user interfaces. My journey in web development began with HTML and CSS, and I've since mastered JavaScript, with a focus on frameworks like React and Next.js. I'm a strong advocate for accessibility and responsive design, ensuring that the websites I build are available to everyone, regardless of their device or capabilities.
          </p>
        </div>
      </div>
      <div className="hidden">TODO: ADD SOCIAL MEDIA LOGOS</div>
    </div>
  );
};
