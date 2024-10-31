import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-28 mx-auto max-w-screen-xl 2xl:max-w-screen-2xl flex flex-wrap justify-center gap-8">
      {/* Introduction */}
      <div className="grid grid-col-1 md:grid-cols-2 justify-items-center gap-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl">
            Daniel Budi Prasetyo, <span className="text-primary">Fullstack Developer</span> and <span className="text-primary">Machine Learning Enthusiast</span>
          </h2>
          <p>
            I am passionate about building scalable web applications and exploring the latest advancements in machine learning. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences. My journey in tech is driven by curiosity and a commitment to continuous learning.
          </p>
          <div className="border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center ms-0 mb-2 mx-auto">
            <Link href={"mailto:danielbudip789077@gmail.com"}>
              Contact Me
            </Link>
          </div>
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
          <p className="text-2xl italic font-medium">&quot;Code is like humor. When you have to explain it, it’s bad.&quot;</p>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
          <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
            <cite className="text-sm text-gray-400">Daniel Budi Prasetyo</cite>
          </div>
        </figcaption>
      </figure>

      {/* Projects */}
      <div className="">
        &gt; Projects
      </div>

      {/* Skills */}
    </main>
  );
}
