import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HomeIcon, Phone, Smile, Wrench } from "lucide-react";

import { Link } from "react-router-dom";

const DropdownNav = () => {
  return (
    <div className=" ">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-[#663366] rounded-full text-white w-10 h-10 outline-none   ">
        {/* fixed top-6 right-9 md:top-10 */}
          ⌘
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-44  text-gray-500 font-inter-medium ">
          <DropdownMenuLabel className="text-center">Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to={`/`}>
            <DropdownMenuItem>
              <HomeIcon className="w-4 h-4 mr-2" />
              Home
            </DropdownMenuItem>
          </Link>
          <Link to={`/about`}>
            <DropdownMenuItem>
              <Smile className="w-4 h-4 mr-2" />
              About
            </DropdownMenuItem>
          </Link>
          <Link to={`/projects`}>
            <DropdownMenuItem>
              <Wrench className="w-4 h-4 mr-2" />
              Projects
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>
            <Phone className="w-4 h-4 mr-2" />
            Contact
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropdownNav;
