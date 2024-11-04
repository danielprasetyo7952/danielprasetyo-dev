import Image from "next/image";
import Link from "next/link";

{/* Components */ }
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";
import SocialProfiles from "@/components/SocialProfiles";
import Quotes from "@/components/ui/Quotes";

const projects = [
  {
    title: "BDC Competition",
    description: "An archive of data and notebook from the BDC Competition.",
    image: "/project/satria-data.png",
    repoLink: "https://github.com/danielprasetyo7952/satria-data-2023",
    liveLink: ""
  },
  {
    title: "E-Waste Classification",
    description: "A machine learning model that classifies images of electronic waste into 15 categories.",
    image: "/project/techwaste.png",
    repoLink: "https://github.com/Techwaste/develop-model",
    liveLink: "https://techwas-ml-preview.streamlit.app/"
  },
  {
    title: "Forex Forecasting",
    description: "A machine learning model that predicts the future price of a currency pair based on historical data.",
    image: "/project/forex-forecasting.png",
    repoLink: "https://github.com/danielprasetyo7952/Tugas-Akhir",
    liveLink: "https://tugas-akhir-preview.streamlit.app/"
  }
]

export default function Home() {
  return (
    <main className="my-28 px-4 md:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col justify-center gap-12">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
          {
            projects.map((project, index) => (
              <Card
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                repoLink={project.repoLink}
                liveLink={project.liveLink}>
              </Card>
            ))
          }
        </div>
      </section>

      {/* Skills */}
      <section>
        <SectionHeader title="Skills" />
      </section>

      {/* Experience */}
      <section>
        <SectionHeader title="Experience" />
      </section>

      {/* Contact */}
      <section>
        <SectionHeader title="Contact" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <p>
              I&apos;m open to any inquiries, feedback, collaboration opportunities, or freelance work. Feel free to reach out if you&apos;d like to connect and explore new possibilities in web development and technology.
            </p>
            <p>
              I value your feedback as it helps me improve and provide better solutions. If you need a dedicated and skilled full-stack developer or machine learning developer for your team or project, feel free to contact me. Let&apos;s collaborate to create innovative and impactful digital experiences.
            </p>
          </div>
          <div className="border p-5 m-auto md:me-0">
            <p className="mb-3 text-lg font-semibold">Message me here</p>
            <SocialProfiles type="vertical" exclude={["GitHub"]} username={true} />
          </div>
        </div>
      </section>
    </main>
  );
}
