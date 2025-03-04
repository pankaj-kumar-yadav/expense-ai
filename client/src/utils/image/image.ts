import { CustomImageLoaderProps } from "@/types/utils/image";

export const customImageLoader = ({ src, width, quality }: CustomImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality}`;
};
