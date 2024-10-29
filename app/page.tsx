import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-28 mx-auto max-w-screen-xl flex flex-wrap justify-center">
      <div className="grid grid-col-1 md:grid-cols-2 justify-items-center gap-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">
            Daniel Budi Prasetyo, <span className="text-primary">Fullstack Developer</span> and <span className="text-primary">Machine Learning Enthusiast</span>
          </h2>
          <p>
            I am passionate about building scalable web applications and exploring the latest advancements in machine learning. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences. My journey in tech is driven by curiosity and a commitment to continuous learning.
          </p>
          <div className="border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center ms-0 mb-2 mx-auto">
            <Link href={"mailto:danielbudip789077@gmail.com"}>
              Contact Me
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={"/avatar.png"}
            width={300}
            height={300}
            alt="Avatar"
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px]"/>
          <p className="border p-1 text-center text-sm">
            Currently working at <span className="font-extrabold text-primary">PT. Inti Dunia Sukses</span>
          </p>
        </div>
      </div>
    </main>
  );
}
