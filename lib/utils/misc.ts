import { twMerge } from "tailwind-merge";
import { cva as _cva } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(...inputs));

export const cva = _cva;