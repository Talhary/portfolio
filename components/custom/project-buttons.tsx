'use client';

import Link from 'next/link';

const ProjectButtons = ({ weblink, githublink }: { weblink: string, githublink: string }) => {
  return (
    <div className="flex mx-3 items-center justify-start gap-x-7 h-20">
      <Link href={weblink} target="_blank" rel="noopener noreferrer">
        <button className="dark:bg-dark-bg dark:text-primary1-normal border hover:scale-[1.05] hover:bg-secondary1-normal transition-all py-1 px-5 border-primary1-normal-hover text-black bg-white">
          Visit
        </button>
      </Link>
      <Link href={githublink} target="_blank" rel="noopener noreferrer">
        <button className="hover:scale-[1.01] bg-secondary1-normal-hover transition-all hover:bg-white hover:border hover:border-black text-black py-1 whitespace-nowrap px-3">
          Source Code
        </button>
      </Link>
    </div>
  );
}

export default ProjectButtons;
