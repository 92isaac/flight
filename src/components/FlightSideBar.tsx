import React from 'react';
// import { MapPin } from 'lucide-react';
import Image from 'next/image';
import { world } from '@/assets';

const FlightSidebar: React.FC = () => {
  return (
    <div className="bg-[#36514C] rounded-[30px] h-[460px] text-white p-6 w-full max-w-xs mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between text-center text-sm font-semibold">
        <div>
          <p className="text-xs">FROM</p>
          <p className="text-xl font-bold">JFK</p>
        </div>
        <div className="flex items-center justify-center text-xs">NON-STOP</div>
        <div>
          <p className="text-xs">TO</p>
          <p className="text-xl font-bold">BOM</p>
        </div>
      </div>

      {/* Map Image with flight path */}
      <div className="relative">
        <Image
          src={world}
          alt="Flight path"
          width={300}
          height={200}
          className="mx-auto"
        />
        <div className="absolute top-[25%] left-[20%] text-xs font-semibold text-white">NEW YORK</div>
        <div className="absolute top-[25%] right-[10%] text-xs font-semibold text-white">MUMBAI</div>
        <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2">
          {/* <Image src="/plane-path.png" alt="Flight" width={100} height={40} /> */}
        </div>
      </div>

      {/* Filter section */}
      <div className="bg-[#2B3F3B] rounded-xl p-4 space-y-4">
        {/* Stop buttons */}
        <div className="flex justify-between text-xs font-semibold">
          <button className="bg-[#F2C66D] text-[#2B3F3B] px-4 py-1 rounded-full">NON STOP</button>
          <button className="text-white">ONE STOP</button>
          <button className="text-white">MORE STOP</button>
        </div>

        {/* Price sliders */}
        <div className="text-xs space-y-2">
          <p>PRICE</p>
          <div className="flex justify-between items-center">
            <div className="relative w-4 h-4 bg-[#F2C66D] rounded-full z-10"></div>
            <div className="flex-1 h-0.5 bg-white mx-2"></div>
            <div className="relative w-4 h-4 bg-[#F2C66D] rounded-full z-10"></div>
          </div>
          <div className="flex justify-between text-[#F2C66D] font-bold">
            <span>$500</span>
            <span>$2500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightSidebar;
