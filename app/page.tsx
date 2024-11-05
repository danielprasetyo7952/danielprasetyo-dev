import Image from "next/image";
import Link from "next/link";

{/* Components */ }
import Button from "@/components/ui/Button";
import Contacts from "@/components/Contacts";
import Projects from "@/components/Projects";
import Quotes from "@/components/ui/Quotes";
import SectionHeader from "@/components/ui/SectionHeader";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <>
      {/* Introduction */}
      <div className="grid grid-col-1 md:grid-cols-2 justify-items-center gap-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">
            Daniel Budi Prasetyo, <span className="text-primary">Fullstack Developer</span> and <span className="text-primary">Machine Learning Developer</span>
          </h2>
          <p>
            I am passionate about building scalable web applications and exploring the latest advancements in machine learning. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences. My journey in tech is driven by curiosity and a commitment to continuous learning.
          </p>
          <Button>
            <Link href={"mailto:danielbudip789077@gmail.com"}>Contact Me</Link>
          </Button>
        </div>
        <div>
          <Image
            src={"/avatar.png"}
            width={400}
            height={400}
            alt="Avatar" />
          <p className="border p-1 text-center text-sm">
            Currently working at <span className="font-extrabold text-primary">PT. Inti Dunia Sukses</span>
          </p>
        </div>
      </div>

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
          <Skills />
        </div>
      </section>

      {/* Experience */}
      <section>
        <SectionHeader title="Experience" />
        <Timeline />
      </section>

      {/* Contact */}
      <section>
        <SectionHeader title="Contact" />
        <Contacts />
      </section>
    </>
  );
}
