import { Hero } from "@/components/sections/Hero";
import { GuestLogos } from "@/components/sections/GuestLogos";
import { About } from "@/components/sections/About";
import { Statement } from "@/components/sections/Statement";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { Who } from "@/components/sections/Who";
import { Gallery } from "@/components/sections/Gallery";
import { Partners } from "@/components/sections/Partners";
import { Apply } from "@/components/sections/Apply";
import { Dinners } from "@/components/sections/Dinners";

export default function Page() {
  return (
    <main>
      <Hero />
      <GuestLogos />
      <About />
      <Statement />
      <WhyJoin />
      <Who />
      <Gallery />
      <Partners />
      <Apply />
      <Dinners />
    </main>
  );
}
