import { ChevronDown } from "lucide-react";
import {   DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  // DropdownMenuSeparator,
  DropdownMenuTrigger, } from "./ui/dropdown-menu";

const ResultsHeader = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 w-full flex-wrap gap-3">
      <h2 className="text-sm font-medium tracking-wide text-[#2E3D3D]">
        RESULT <span className="font-semibold">(25)</span>
      </h2>

      <div className="flex items-center gap-3">
        <button className="bg-white rounded-full px-5 py-2 text-sm font-semibold text-[#2E3D3D]">
          FILTER
        </button>

       
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer">
            <button className="bg-white rounded-full px-5 py-2 text-sm font-semibold text-[#2E3D3D] flex items-center gap-2">
          TICKET OF CLASS
          <ChevronDown size={16} className="text-[#2E3D3D]" />
        </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56 z-[10000000] font-rubik font-normal"
              align="end"
              forceMount
            >
              <DropdownMenuGroup>
                <DropdownMenuItem
                  className="font-semibold"
               
                >
             First Class
                </DropdownMenuItem>
                {/* <DropdownMenuSeparator /> */}
                <DropdownMenuItem>
                Business Class
                </DropdownMenuItem>
                <DropdownMenuItem>
                Economy Class
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>
    </div>
  );
};

export default ResultsHeader;
