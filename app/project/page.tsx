{/* Components */ }
import SectionHeader from "@/components/ui/SectionHeader"
import Projects from "@/components/Projects"

export default function Project() {
    return (
        <div>
            <SectionHeader title="Projects" />
            <p className="mb-8 lg:mb-16 font-light sm:text-lg">
                Here are some of the projects I have worked on.
                I am always looking to learn new things and improve my skills.
                I am excited to see where my career takes me and what new opportunities come my way.
            </p>
            <Projects />
        </div>
    )
}