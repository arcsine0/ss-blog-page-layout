import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { IGatsbyImageData } from "gatsby-plugin-image";

export function cn(...inputs: any[]) {
    return twMerge(clsx(inputs))
}

export interface ImageSet {
    image: IGatsbyImageData | undefined,
    path: string
    caption: string
}