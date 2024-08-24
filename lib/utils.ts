import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function countWords(paragraph: string): number {

  if (!paragraph) return 0;

  // Split the paragraph into words using whitespace as the delimiter
  const words = paragraph.trim().split(/\s+/);

  // Return the number of words in the array
  return words.length;
}

export const formatNaira = (value: number): string => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2, // Ensures two decimal places
  }).format(value);
};
