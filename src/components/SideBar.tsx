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

// const navItems = [
//   { label: "Dashboard", icon: Home },
//   { label: "Flights", icon: Plane },
//   { label: "Wallet", icon: CreditCard },
//   { label: "Reports", icon: FileText },
//   { label: "Statistics", icon: BarChart2 },
//   { label: "Settings", icon: Settings },
// ];

// const Sidebar = () => {
//   const [active, setActive] = useState("Reports");

//   return (
//     <aside className="bg-[#30433E] text-white w-[280px] h-screen rounded-r-[30px] py-6 pl-4 flex flex-col justify-between">
//       {/* Top - Profile */}
//       <div>
//         <div className="flex flex-col items-center mb-8">
//           <div className="w-20 h-20 rounded-full border-2 border-yellow-500 overflow-hidden">
//             <Image
//               src="/john.jpg" // Replace with real image path
//               alt="Profile"
//               width={80}
//               height={80}
//               className="object-cover"
//             />
//           </div>
//           <h2 className="text-md font-bold mt-3">ALEX JOHNSON</h2>
//           <p className="text-sm text-gray-300">alex.johnson@gmail.com</p>
//         </div>

//         {/* Navigation */}
//         <ul className="space-y-3">
//           {navItems.map(({ label, icon: Icon }) => {
//             const isActive = active === label;
//             return (
//               <li
//                 key={label}
//                 className={clsx(
//                   "flex items-center gap-3 px-4 py-2 rounded-l-full  cursor-pointer transition-all",
//                   isActive
//                     ? "bg-[#F4FBF9] text-gray-800"
//                     : "hover:bg-[#3F534D]"
//                 )}
//                 onClick={() => setActive(label)}
//               >
//                 <Icon
//                   size={18}
//                   className={clsx(isActive ? "text-yellow-600" : "text-white")}
//                 />
//                 <span
//                   className={clsx("text-sm font-medium", {
//                     "text-white": !isActive,
//                   })}
//                 >
//                   {label}
//                 </span>
//               </li>
//             );
//           })}
//         </ul>
//       </div>

//       {/* Bottom - Active Users */}
//       <div className="mt-8">
//         <p className="text-xs font-semibold text-yellow-500 mb-2 uppercase tracking-wide">
//           Active Users
//         </p>
//         <div className="flex items-center space-x-[-10px] mb-3">
//           {["/u1.jpg", "/u2.jpg", "/u3.jpg", "/u4.jpg"].map((src, idx) => (
//             <div
//               key={idx}
//               className="w-8 h-8 rounded-full overflow-hidden border-2 border-white"
//             >
//               <Image
//                 src={src} // Replace with valid image paths
//                 alt="User"
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
//             src="/map.png" // Replace with actual image of the map
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

import React, { useState } from "react";
import {
  Home,
  Plane,
  CreditCard,
  FileText,
  BarChart2,
  Settings,
} from "lucide-react";
import Image from "next/image";
import clsx from "clsx";
import { fli } from "@/assets";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", path:"/dashboard", icon: Home },
  { label: "Flights", path:"/dashboard", icon: Plane },
  { label: "Wallet", path:"/dashboard", icon: CreditCard },
  { label: "Reports", path:"/report", icon: FileText },
  { label: "Statistics", path:"/dashboard", icon: BarChart2 },
  { label: "Settings", path:"/dashboard", icon: Settings },
];

const Sidebar = () => {
  const [active, setActive] = useState("Reports");

  return (
    <aside className="bg-[#30433E] text-white w-[260px] h-screen rounded-r-[30px] py-6 pl-4 flex flex-col justify-between">
  
      <div>
        <div className="flex flex-col items-center mb-10">
          <div className="w-20 h-20 rounded-full border-2 border-yellow-500 overflow-hidden">
            <Image
              src={fli} 
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
            const isActive = active === label;
            return (
              <li
                key={label}
                className="relative group"
                onClick={() => setActive(label)}
              >
                <Link
                href={path}
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
                </Link>

                {/* Bubble background shape */}
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
          {["/u1.jpg", "/u2.jpg", "/u3.jpg", "/u4.jpg"].map((src, idx) => (
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
            src="/map.png"
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