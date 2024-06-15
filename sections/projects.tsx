import ProjectButtons from "@/components/custom/project-buttons";
import Link from "next/link";
const projcts = [
  {
    name:'NEXT Authentication APP',
    weblink: "https://next-auth-v5-by-talhary.vercel.app/",
    githublink: "https://github.com/Talhary/NextJs-Authentication-App",
    imglink:'/next-auth.png' ,
    stack: ["Next.js",'TailwindCss','Typescript.js','NextAuth.js','Prisma'],
  },
  {
    name:'Personal Gallery App',
    weblink: "https://t3gallay.vercel.app/",
    githublink: "https://github.com/Talhary/t3gallay",
    imglink:'/gallary-app.png' ,
    stack: ["Next.js", "Drizzle", "TypeScript", "TailwindCss", "Clerk.io",'Sentry'],
  }
];
export const Projects = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[20vh] text-xl dark:text-white  text-black text-center">
        <h2 className="font-semibold text-3xl mb-3">Featured Project</h2>
        <p>Check out Some of my Recent Projects</p>
      </div>
      <div className="flex gap-x-10 mx-10 overflow-scroll">
        {projcts.map((project, i) => {
          return (
            <div key={i + 1} className="max-w-[250px] dark:bg-card-bg   bg-primary1-light-hover rounded-xl">
              <div className=" p-2">
                <img className="rounded-[20px]" src={project.imglink} height={300} width={250} alt={project.name}/>
              </div>
              <h2 className=" dark:text-white text-black mt-4 mx-3 font-semibold">{project.name}</h2>
              <div className="flex flex-wrap mx-2 mt-5 gap-y-1">
                {project.stack.map((el, i) => {
                  return (
                    <div className="text-sm dark:bg-dark-bg dark:text-white bg-white border border-primary1-normal rounded-full odd:border-tertiary-normal text-primary1-darker  px-2 py-1 m-1" key={i + 1}>
                      <span >{el}</span>
                    </div>
                  );
                })}
              </div>
              <div className="">
                <ProjectButtons githublink={project.githublink} weblink={project.weblink}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
