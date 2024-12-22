"use client";

import DotPattern from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";
import { AnimatedTextTopComponent } from "@/app/[locale]/_component/sub-component/animated-text-top-component";
import { RainbowButton } from "@/components/ui/rainbow-button";


export function FirstHeroComponent() {
    return (
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <AnimatedTextTopComponent />
            <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                UI library for Design Engineers
            </p>
            <RainbowButton>Get Unlimited Access</RainbowButton>
            <DotPattern
                className={cn(
                    "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />
        </div>
    );
}
