'use client'
import Link from "next/link";
import Image from "next/image";
import { ThemeChange } from "@/components/change-theme";
import { MainDropdownMenu } from "@/components/custom/drop-down-menu";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
export const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "About me",
    href: "#about",
  },
  {
    name: "Get in Touch",
    href: "#mail",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];
const home = () => {
  return (
    <div className="">
      <div className="ralative">
        <nav className="h-[20vh]  flex items-center justify-between mx-10 text-yellow-500 ">
          <div className=" h-20 w-20 rounded-full bg-primary1-normal"></div>
          <div className="md:hidden ">
            <MainDropdownMenu />
          </div>
          <div className="max-md:hidden flex justify-center gap-10">
            {navItems.map((el, i) => {
              return (

                <Link
                  key={i + 1}
                  href={el.href}
                  className="text-xl hover:bg-secondary1-light-active transition-all rounded-md  bg-secondary1-normal max-lg:px-1 max-lg:py-0 max-lg:text-[16px] px-3 py-1 text-black "
                >
                  {el.name}
                </Link>
              );
            })}
            <div className="relative">
              <div className="absolute left-[-10px]  top-[-10px] text-black">
                <ThemeChange />
              </div>
            </div>
          </div>
        </nav>
      </div>
      <main className="">
        <div className="mx-10 mt-20 max-sm:ml-0 max-md:flex-col-reverse ml-0 gap-y-10  flex w-full justify-center items-center md:gap-x-[50px] gap-x-[200px]">
          <div className="md:mx-20  lg:block">
            <h2 className="text-7xl tracking-tight text-text-primary font-semibold max-md:text-6xl">
              TALHA RIAZ
            </h2>
            <p className="text-[22px] max-md:text-start  max-md:mt-5 max-md:ml-2">
              Front end & Backend
              <br className="md:hidden" /> web Developer
            </p>
            <div className="max-md:text-xl flex md:gap-x-10 items-center justify-between max-md:justify-start max-md:gap-x-10 mr-20 mt-[7vh] ml-3">
              <button className="btn border-none  hover:text-white hover:bg-primary1-normal-hover bg-secondary1-normal max-md:px-4 max-md:py-2  text-dark-bg px-3 py-1 rounded text-xl">
                Projects
              </button>
              <button className="btn bg-white text-black hover:text-white border px-3 py-1 max-md:px-4 max-md:py-2 border-black rounded-none">
                Contact
              </button>
            </div>
          </div>
          <div className=" blur-md min-w-[250px] md:mr-20 max-md:hidden">
            <Image
              width={300}
              height={300}
              className="object-contain rounded-full"
              src={"/image.png"}
              alt="My picture  "
            ></Image>
          </div>
        </div>
        <div className="dark:bg-card-bg bg-gray-300 w-full h-20 mt-20 ">
          <InfiniteMovingCards />
        </div>
      </main>
    </div>
  );
};

export default home;
