
'use client'

import { navItems } from "@/sections/home";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { ThemeChange } from "../change-theme";

export const MainDropdownMenu = () => {
  const [hide, setHide] = useState(true);

  const handleSummaryClick = (event:any) => {
    event.preventDefault();
    setHide((prevHide) => !prevHide);
  };

  return (
    <div className="dropdown">
      <button className="m-1 btn dark:bg-dark-bg bg-transparent hover:bg-white border-none"  onClick={handleSummaryClick}>
        <CiMenuFries  className="text-black  dark:text-white  " size={30} />
      </button>
      <ul className={`dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 ${hide ? 'hidden' : ''}`}>
        {navItems.map((item, i) => {
          return (
            <li key={i + 1}>
              <a href={item.href} onClick={() => setHide(true)}>
                {item.name}
              </a>
            </li>
          );
        })}
         <li>
              <a href={'/'} onClick={() => setHide(true)} className="my-2">
              <ThemeChange/> 
              </a>
            </li>
      </ul>
    </div>
  );
}

// export function MainDropdownMenu1() {
//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <Button variant="outline" className="border-none ">
//           <CiMenuFries className="text-black dark:text-white " size={30} />
//         </Button>
//       </DropdownMenuTrigger>
//       <DropdownMenuContent className=" flex dark:text-white text-black bg-radial-gradient dark:bg-card-bg flex-start flex-col-reverse ">
//         <DropdownMenuGroup>
//           {navItems.map((item, i) => {
//             return (
//               <DropdownMenuItem key={i+1}>
//                <span>
//                 <Link href={item.href} className="underline">
//                   {item.name}
//                 </Link>
//                 </span>
//               </DropdownMenuItem>
//             );
//           })}
        
//         </DropdownMenuGroup>
//         <DropdownMenuItem className="m-4">
//             <ThemeChange/>     
//           </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
