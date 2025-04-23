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