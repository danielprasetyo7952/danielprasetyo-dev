import SocialProfiles from './ui/SocialProfiles'

export default function Contacts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
                <p>
                    I&apos;m open to any inquiries, feedback, collaboration opportunities, or freelance work.
                    Feel free to reach out if you&apos;d like to connect and explore new possibilities in web development and technology.
                </p>
                <p>
                    I value your feedback as it helps me improve and provide better solutions.
                    If you need a dedicated and skilled full-stack developer or machine learning developer for your team or project, feel free to contact me.
                    Let&apos;s collaborate to create innovative and impactful digital experiences.
                </p>
            </div>
            <div className="border p-5 m-auto md:me-0">
                <p className="mb-3 text-lg font-semibold">Message me here</p>
                <SocialProfiles type="vertical" exclude={["GitHub"]} username={true} />
            </div>
        </div>
    )
}