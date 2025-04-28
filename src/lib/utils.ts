import { ani, ben, fli, girl } from "@/assets";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const imgUrl = "https://dtams-7tm711cw3-dou1.vercel.app/_next/image?url=%2Fimages%2Fagency%2Fope.png&w=32&q=75"


export const formatCurrency = (
  value: number | string,
  currency: string = "USD",
  locale: string = "en-US"
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(Number(value));
};


type LocationOption = {
  code: string;
  city: string;
  label: string; 
};

export const locationOptions: LocationOption[] = [
  { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
  { code: "KAN", city: "Kano", label: "KAN (Kano)" },
  { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
];


export const statusOptions= [
  { value: "departure", label: "Departure" },
  { value: "pending", label: "Pending" },
  { value: "refund", label: "Refund" },
  { value: "expired", label: "Expired" },
];

export const tripData = [
  {
    name: "Jame Dan",
    email: "jame.dan@gmail.com",
    flight: "Lagos",
    members: "R",
    price: "N56k",
    avatar: girl,
    id: "BK7A563429",
    price2: '1572',
    departureDate: "2024-11-05T14:30:00Z",
    arrivalDate: "2024-11-05T18:45:00Z",
    departureLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    arrivalLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    status: "departure",
  },
  {
    name: "Martin Loiness",
    email: "martin_loi@gmail.com",
    flight: "Abuja",
    members: "0",
    price: "N56k",
    avatar: ani,
    id: "BK3B829541",
    price2: '201072',
    departureDate: "2025-01-18T10:00:00Z",
    arrivalDate: "2025-01-18T13:00:00Z",
    departureLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    arrivalLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    status: "pending",
  },
  {
    name: "John Doe",
    email: "john.doe@gmail.com",
    flight: "Port Harcourt",
    members: "R",
    price: "N56k",
    avatar: ben,
    id: "BK9F702183",
    price2: '100872',
    departureDate: "2024-08-21T09:00:00Z",
    arrivalDate: "2024-08-21T11:20:00Z",
    departureLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    arrivalLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    status: "refund",
  },
  {
    name: "Martin Loiness",
    email: "martin.loiness@gmail.com",
    flight: "Kaduna",
    members: "0",
    price: "N56k",
    avatar: fli,
    id: "BK5C138722",
    price2: '100872',
    departureDate: "2025-03-12T16:00:00Z",
    arrivalDate: "2025-03-12T18:30:00Z",
    departureLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    arrivalLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    status: "expired",
  },
  {
    airline: 'Emirates',
    from: 'JFK',
    to: 'BOM',
    departure: '13:00',
    arrival: '14:20',
    duration: '11H 20M',
    stops: 'NON-STOP',
    price: 'N100k',
    price2: '100872',
    airlineName: 'EMIRATES',
    name: "John Doe",
    email: "john.doe@gmail.com",
    flight: "Port Harcourt",
    members: "R",
    avatar: ben,
    id: "BK2E490154",
    departureDate: "2024-07-10T12:00:00Z",
    arrivalDate: "2024-07-11T00:30:00Z",
    departureLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    arrivalLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    status: "departure",
  },
  {
    name: "Sara Ali",
    email: "sara.ali@gmail.com",
    flight: "Lagos",
    members: "2",
    price: "N75k",
    avatar: girl,
    id: "BK6D583911",
    price2: '75450',
    departureDate: "2024-06-10T15:00:00Z",
    arrivalDate: "2024-06-10T17:30:00Z",
    departureLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    arrivalLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    status: "pending",
  },
  {
    name: "Liam King",
    email: "liam.king@gmail.com",
    flight: "Abuja",
    members: "1",
    price: "N60k",
    avatar: ani,
    id: "BK8G920112",
    price2: '60200',
    departureDate: "2024-09-15T09:00:00Z",
    arrivalDate: "2024-09-15T11:00:00Z",
    departureLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    arrivalLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    status: "departure",
  },
  {
    name: "Ella Stewart",
    email: "ella.stewart@gmail.com",
    flight: "Port Harcourt",
    members: "R",
    price: "N58k",
    avatar: ben,
    id: "BK1E489200",
    price2: '58200',
    departureDate: "2024-10-03T13:00:00Z",
    arrivalDate: "2024-10-03T15:10:00Z",
    departureLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    arrivalLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    status: "expired",
  },
  {
    name: "Chris Evans",
    email: "chris.evans@gmail.com",
    flight: "Kaduna",
    members: "0",
    price: "N70k",
    avatar: fli,
    id: "BK4H773211",
    price2: '70200',
    departureDate: "2025-02-10T14:00:00Z",
    arrivalDate: "2025-02-10T16:00:00Z",
    departureLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    arrivalLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    status: "refund",
  },
  {
    name: "Olivia Grace",
    email: "olivia.grace@gmail.com",
    flight: "Lagos",
    members: "R",
    price: "N80k",
    avatar: girl,
    id: "BK5A661299",
    price2: '80200',
    departureDate: "2024-08-22T11:00:00Z",
    arrivalDate: "2024-08-22T13:30:00Z",
    departureLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    arrivalLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    status: "pending",
  },
  {
    name: "William Sharp",
    email: "william.sharp@gmail.com",
    flight: "Port Harcourt",
    members: "1",
    price: "N63k",
    avatar: ani,
    id: "BK9J921155",
    price2: '63200',
    departureDate: "2025-01-05T08:30:00Z",
    arrivalDate: "2025-01-05T10:40:00Z",
    departureLocation: { code: "KAN", city: "Kano", label: "KAN (Kano)" },
    arrivalLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    status: "departure",
  },
  {
    name: "Amelia Brooks",
    email: "amelia.brooks@gmail.com",
    flight: "Kaduna",
    members: "0",
    price: "N62k",
    avatar: ben,
    id: "BK7K812412",
    price2: '62100',
    departureDate: "2024-12-11T17:00:00Z",
    arrivalDate: "2024-12-11T19:30:00Z",
    departureLocation: { code: "ABV", city: "Abuja", label: "ABV (Abuja)" },
    arrivalLocation: { code: "LAG", city: "Lagos", label: "MM1 (LAG)" },
    status: "departure",
  }
];