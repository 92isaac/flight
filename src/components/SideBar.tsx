
// "use client";

// import React, { useState } from "react";
// import {
//   Home,
//   Plane,
//   CreditCard,
//   FileText,
//   BarChart2,
//   Settings,
// } from "lucide-react";
// import Image from "next/image";
// import clsx from "clsx";
// import { ani, ben, fli, girl, world } from "@/assets";
// import Link from "next/link";

// const navItems = [
//   { label: "Dashboard", path:"/dashboard", icon: Home },
//   { label: "Flights", path:"/dashboard", icon: Plane },
//   { label: "Wallet", path:"/dashboard", icon: CreditCard },
//   { label: "Reports", path:"/report", icon: FileText },
//   { label: "Statistics", path:"/dashboard", icon: BarChart2 },
//   { label: "Settings", path:"/dashboard", icon: Settings },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Dashboard");

//   return (
//     <aside className="bg-[#30433E] text-white w-[260px] h-screen rounded-r-[30px] py-6 pl-4 flex flex-col justify-between">
  
//       <div>
//         <div className="flex flex-col items-center mb-10">
//           <div className="w-20 h-20 rounded-full border-2 border-yellow-500 overflow-hidden custom-scrollbar">
//             <Image
//               src={girl} 
//               alt="Profile"
//               width={80}
//               height={80}
//               className="object-cover"
//             />
//           </div>
//           <h2 className="text-sm font-semibold mt-3">ALEX JOHNSON</h2>
//           <p className="text-xs text-gray-300">alex.johnson@gmail.com</p>
//         </div>

//         {/* Nav Items */}
//         <ul className="space-y-2 relative">
//           {navItems.map(({ label, path, icon: Icon }) => {
//             const isActive = active === label;
//             return (
//               <li
//                 key={label}
//                 className="relative group"
//                 onClick={() => setActive(label)}
//               >
//                 <Link
//                 href={path}
//                   className={clsx(
//                     "flex items-center gap-3 px-4 py-2 rounded-l-full transition-all cursor-pointer",
//                     isActive
//                       ? "bg-[#F4FBF9] text-gray-800 shadow-sm"
//                       : "hover:bg-[#3F534D]"
//                   )}
//                 >
//                   <Icon
//                     size={18}
//                     className={clsx(
//                       "transition-colors",
//                       isActive ? "text-yellow-600" : "text-yellow-500"
//                     )}
//                   />
//                   <span
//                     className={clsx(
//                       "text-sm font-medium transition-colors",
//                       isActive ? "text-gray-900" : "text-white"
//                     )}
//                   >
//                     {label}
//                   </span>
//                 </Link>

//                 {/* Bubble background shape */}
//                 {isActive && (
//                   <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#F4FBF9] rounded-r-full" />
//                 )}
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       <div className="mt-10">
//         <p className="text-xs font-semibold text-yellow-500 mb-2 uppercase tracking-wide">
//           Active Users
//         </p>
//         <div className="flex items-center space-x-[-10px] mb-3">
//           {[ben, girl, ani, fli].map((src, idx) => (
//             <div
//               key={idx}
//               className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
//             >
//               <Image
//                 src={src}
//                 alt="img"
//                 width={32}
//                 height={32}
//                 className="object-cover"
//               />
//             </div>
//           ))}
//           <div className="w-8 h-8 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
//             +70
//           </div>
//         </div>
//         <div className="w-full">
//           <Image
//             src={world}
//             alt="map"
//             width={180}
//             height={80}
//             className="object-contain"
//           />
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

"use client";

import React from "react";
import {
  Home,
  // Plane,
  // CreditCard,
  FileText,
  // BarChart2,
  // Settings,
} from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { ani, ben, fli, girl, world } from "@/assets";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Dashboard", path: "/dashboard", icon: Home },
  // { label: "Flights", path: "/flights", icon: Plane },
  // { label: "Wallet", path: "/wallet", icon: CreditCard },
  { label: "Reports", path: "/report", icon: FileText },
  // { label: "Statistics", path: "/statistics", icon: BarChart2 },
  // { label: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <aside className="bg-[#30433E] text-white w-[260px] h-screen rounded-r-[30px] py-6 pl-4 flex flex-col justify-between">
      <div>
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full border-2 border-yellow-500 overflow-hidden custom-scrollbar">
            <Image
              src={girl}
              alt="Profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <h2 className="text-sm font-semibold mt-3">ALEX JOHNSON</h2>
          <p className="text-xs text-gray-300">alex.johnson@gmail.com</p>
        </div>

        {/* Nav Items */}
        <ul className="space-y-2 relative">
          {navItems.map(({ label, path, icon: Icon }) => {
            const isActive = pathname === path;

            return (
              <li
                key={label}
                className="relative group"
                onClick={() => handleNavigate(path)}
              >
                <div
                  className={clsx(
                    "flex items-center gap-3 px-4 py-2 rounded-l-full transition-all cursor-pointer",
                    isActive
                      ? "bg-[#F4FBF9] text-gray-800 shadow-sm"
                      : "hover:bg-[#3F534D]"
                  )}
                >
                  <Icon
                    size={18}
                    className={clsx(
                      "transition-colors",
                      isActive ? "text-yellow-600" : "text-yellow-500"
                    )}
                  />
                  <span
                    className={clsx(
                      "text-sm font-medium transition-colors",
                      isActive ? "text-gray-900" : "text-white"
                    )}
                  >
                    {label}
                  </span>
                </div>

                {isActive && (
                  <div className="absolute -right-4 top-0 bottom-0 w-4 bg-[#F4FBF9] rounded-r-full" />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-xs font-semibold text-yellow-500 mb-2 uppercase tracking-wide">
          Active Users
        </p>
        <div className="flex items-center space-x-[-10px] mb-3">
          {[ben, girl, ani, fli].map((src, idx) => (
            <div
              key={idx}
              className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
            >
              <Image
                src={src}
                alt="img"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
          ))}
          <div className="w-8 h-8 bg-yellow-500 text-white text-xs font-bold rounded-full flex items-center justify-center border-2 border-white">
            +70
          </div>
        </div>
        <div className="w-full">
          <Image
            src={world}
            alt="map"
            width={180}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
