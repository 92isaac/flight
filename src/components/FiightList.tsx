import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { Button } from './ui/button';
import { emirate, Lufthansa, qatar } from '@/assets';
import { formatCurrency } from '@/lib/utils';

interface FlightCardProps {
  airline: string;
  logo: StaticImageData;
  from: string;
  to: string;
  departure: string;
  arrival: string;
  duration: string;
  stops: string;
  price: string;
  airlineName: string;
}

const flights: FlightCardProps[] = [
  {
    airline: 'Emirates',
    logo: emirate,
    from: 'JFK',
    to: 'BOM',
    departure: '13:00',
    arrival: '14:20',
    duration: '11H 20M',
    stops: 'NON-STOP',
    price: '1572',
    airlineName: 'EMIRATES'
  },
  {
    airline: 'QATAR',
    logo: qatar,
    from: 'JFK',
    to: 'BOM',
    departure: '13:00',
    arrival: '14:20',
    duration: '11H 20M',
    stops: 'NON-STOP',
    price: '201072',
    airlineName: 'QATAR AIRWAYS'
  },
  {
    airline: 'Lufthansa',
    logo: Lufthansa,
    from: 'JFK',
    to: 'BOM',
    departure: '13:00',
    arrival: '14:20',
    duration: '11H 20M',
    stops: 'NON-STOP',
    price: '100872',
    airlineName: 'LUFTHANSA'
  },
  {
    airline: 'Emirates',
    logo: emirate,
    from: 'JFK',
    to: 'BOM',
    departure: '13:00',
    arrival: '14:20',
    duration: '11H 20M',
    stops: 'NON-STOP',
    price: '100872',
    airlineName: 'EMIRATES'
  },
  {
    airline: 'Emirates',
    logo: emirate,
    from: 'JFK',
    to: 'BOM',
    departure: '13:00',
    arrival: '14:20',
    duration: '11H 20M',
    stops: 'NON-STOP',
    price: '100872',
    airlineName: 'EMIRATES'
  },
];

const FlightCard: React.FC<FlightCardProps> = ({ logo, airline, from, to, departure, arrival, duration, stops, price, airlineName }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded-2xl shadow-sm border-t border-b border-gray-200">
      <div className="flex items-center gap-4 w-full md:w-1/4">
        <Image src={logo} alt={airline} width={50} height={50} className="object-contain" />
        <div className="text-sm font-semibold text-gray-700">{airline}</div>
      </div>

      <div className="flex items-center justify-between w-full md:w-3/4 text-sm mt-4 md:mt-0">
        <div className="text-center">
          <div className="text-lg font-semibold text-gray-700">{from}</div>
          <div className="text-xs text-gray-500">{departure}</div>
        </div>

        <div className="text-center">
          <div className="text-xs font-medium text-gray-500 uppercase">{airlineName}</div>
          <div className="text-yellow-600 font-bold text-sm">{duration}</div>
          <div className="text-xs text-gray-500">{stops}</div>
        </div>

        <div className="text-center">
          <div className="text-lg font-semibold text-gray-700">{to}</div>
          <div className="text-xs text-gray-500">{arrival}</div>
        </div>

        <div className="text-right">
          <div className="text-md font-semibold text-gray-700">{formatCurrency(price, "NGN", "en-NG")}</div>
          <Button className="bg-yellow-600 text-white rounded-full px-4 py-1 text-sm mt-2 hover:bg-yellow-700">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

const FlightList = () => {
  return (
    <div className="w-full h-[460px] overflow-y-auto custom-scrollbar mx-auto bg-[#eaf3f2] p-4 space-y-1 rounded-3xl">
      {flights.map((flight, index) => (
        <FlightCard key={index} {...flight} />
      ))}
    </div>
  );
};

export default FlightList;