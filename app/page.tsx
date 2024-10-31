import Image from "next/image";
import Link from "next/link";

{/* Components */ }
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import SectionHeader from "@/components/ui/SectionHeader";

const projects = [
  {
    title: "Project 1",
    description: "Description 1",
    image: "/cover.jpg",
    repoLink: "",
    liveLink: ""
  },
  {
    title: "Project 2",
    description: "Description 2",
    image: "/cover.jpg",
    repoLink: "",
    liveLink: ""
  },
  {
    title: "Project 3",
    description: "Description 3",
    image: "/cover.jpg",
    repoLink: "",
    liveLink: ""
  },
  {
    title: "Project 4",
    description: "Description 4",
    image: "/cover.jpg",
    repoLink: "",
    liveLink: "/"
  }
]

export default function Home() {
  return (
    <main className="my-28 px-4 md:mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-col justify-center gap-12">
      {/* Introduction */}
      <div className="grid grid-col-1 md:grid-cols-2 justify-items-center gap-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">
            Daniel Budi Prasetyo, <span className="text-primary">Fullstack Developer</span> and <span className="text-primary">Machine Learning Enthusiast</span>
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
      <figure className="max-w-screen-md mx-auto text-center">
        <svg className="w-8 h-8 mx-auto mb-3 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>
        <blockquote>
          <p className="text-2xl italic font-medium">&quot;Code is like humor. When you have to explain it, it&apos;s bad.&quot;</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
            <cite className="text-sm text-gray-400">Daniel Budi Prasetyo</cite>
          </div>
        </figcaption>
      </figure>

      {/* Projects */}
      <section>
        <SectionHeader title="Projects">
          <Link href={"/project"} className="text-primary">
            See All ~~&gt;
          </Link>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
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
      </section>
    </main>
  );
}
