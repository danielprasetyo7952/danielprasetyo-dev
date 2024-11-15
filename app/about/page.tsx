import Image from "next/image"

{/* Components */ }
import Experiences from "@/components/Experiences"
import FunFact from "@/components/FunFact"
import SectionHeader from "@/components/ui/SectionHeader"
import Skills from "@/components/Skills"

export default function About() {
    return (
        <div className="space-y-8">
            <section>
                <SectionHeader title="About Me" />
                <div className="flex flex-col-reverse md:flex-row items-center gap-4">
                    <p className="text-md md:text-lg">
                        I am a software engineer with a passion for back-end development.
                        I have experience working with React, Next.js, and other web technologies.
                        I also have experience with Python and Machine Learning.
                        I am always looking to learn new things and improve my skills.
                        I am currently working on a few personal projects to showcase my skills and build my portfolio.
                        I am excited to see where my career takes me and what new opportunities come my way.
                    </p>
                    <Image
                        src={"/profile.jpg"}
                        width={300}
                        height={300}
                        alt="Profile Photo" />
                </div>
            </section>

            <section>
                <SectionHeader title="Skills" />
                <Skills />
            </section>

            <section>
                <SectionHeader title="Experience" />
                <Experiences />
            </section>

            <section>
                <SectionHeader title="Fun Fact" />
                <FunFact />
            </section>
        </div>
    )
}