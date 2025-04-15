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
