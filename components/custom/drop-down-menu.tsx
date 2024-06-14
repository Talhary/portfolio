

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from 'next/link'
import { navItems } from "@/sections/home";
import { CiMenuFries, CiMenuKebab } from "react-icons/ci";
import { ModeToggle } from "./dark-mode-button";
import { ThemeChange } from "../change-theme";

export function MainDropdownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-none ">
          <CiMenuFries className="text-black dark:text-white " size={30} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" flex dark:text-white text-black bg-radial-gradient dark:bg-card-bg flex-start flex-col-reverse ">
        <DropdownMenuGroup>
          {navItems.map((item, i) => {
            return (
              <DropdownMenuItem key={i+1}>
                <Link href={item.href} className="underline">
                  <span>{item.name}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        
        </DropdownMenuGroup>
        <DropdownMenuItem className="m-4">
            <ThemeChange/>     
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
