import Image from "next/image";
import Link from "next/link";

{/* Components */ }
import Contacts from "@/components/Contacts";
import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";
import Quotes from "@/components/ui/Quotes";
import SectionHeader from "@/components/ui/SectionHeader";
import Skills from "@/components/Skills";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <>
      {/* Introduction */}
      <Summary />

      {/* Quotes */}
      <Quotes
        quote="Code is like humor. When you have to explain it, it's bad."
        author="Cory House" />

      {/* Projects */}
      <section>
        <SectionHeader title="Projects">
          <Link href={"/project"} className="text-primary">
            See All ~~&gt;
          </Link>
        </SectionHeader>
        <Projects views={3}/>
      </section>

      {/* Skills */}
      <section>
        <SectionHeader title="Skills" />
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center items-center">
          <Image
            src={"/abstract.png"}
            width={600}
            height={600}
            alt="Skills"
            className="hidden lg:inline-block lg:w-[500px] lg:h-auto" />
          <Skills views={6} />
        </div>
      </section>

      {/* Experiences */}
      <section>
        <SectionHeader title="Experience" />
        <Experiences />
      </section>

      {/* Contact */}
      <section>
        <SectionHeader title="Contact" />
        <Contacts />
      </section>
    </>
  );
}
