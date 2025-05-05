// Page-level metadata to hide from sidebar
export const metadata = {
  title: "Thrivext", // Title displayed in browser tab
  display: "hidden", // Hides this page from sidebar
};

import Hero from "@/components/HeroSection";
import { TechStack } from "@/components/TechStack";
import Contribution from "@/components/Contribution";

export default function Docs() {
  return (
    <div className="min-h-screen w-full   sm:mt-14 md:mt-20  lg:mt-24">
      <Hero />
      <TechStack />
      <Contribution />
    </div>
  );
}

// This will prevent the layout from being applied globally if you need a custom layout
export const useLayout = () => null;
