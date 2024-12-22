import Image from "next/image";
import { FirstHeroComponent } from "@/app/[locale]/_component/first-hero-component";

export default function Home() {
  return (
    <div>
      <FirstHeroComponent />
    </div>
  );
}
