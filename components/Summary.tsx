import Image from "next/image"
import Link from "next/link"

{/* Components */ }
import Button from "./ui/Button"

export default function Summary() {
    return (
        <div className="grid grid-col-1 md:grid-cols-2 justify-items-center md:justify-items-end gap-4">
            <div className="flex flex-col justify-center gap-8">
                <h2 className="text-2xl">
                    Daniel Budi Prasetyo, <span className="text-primary">Fullstack Developer</span> and <span className="text-primary">Machine Learning Developer</span>
                </h2>
                <p>
                    I am passionate about building scalable web applications and exploring the latest advancements in machine learning. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences. My journey in tech is driven by curiosity and a commitment to continuous learning.
                </p>
                <div className="flex gap-4">
                    <Button>
                        <Link href={"mailto:danielbudip789077@gmail.com"}>Contact Me</Link>
                    </Button>
                    <Button>
                        <Link href={""}>My Resume</Link>
                    </Button>
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
    )
}