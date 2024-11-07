const skills = [
    {
        title: 'Frontend',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap']
    },
    {
        title: 'Framework',
        skills: ['Next.js', 'Laravel', 'ASP.NET Core']
    },
    {
        title: 'Database',
        skills: ['MySQL']
    },
    {
        title: 'API',
        skills: ['FastAPI']
    },
    {
        title: 'Version Control',
        skills: ['Git']
    },
    {
        title: 'Machine Learning',
        skills: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'Streamlit']
    }
]

export default function Skills() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 col-span-2 gap-4">
            {
                skills.map((skill, index) => (
                    <div className="border border-foreground my-auto min-w-80 sm:min-w-64 md:min-w-56" key={index}>
                        <div className="">
                            <p className="text-white text-base font-semibold p-2 border-b border-foreground bg-gray-800">{skill.title}</p>
                        </div>
                        <div className="p-2 text-foreground text-base font-normal">
                            <ul>
                                {
                                    skill.skills.map((s, i) => (
                                        <li key={i}> {s}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}