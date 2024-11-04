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
        title: 'Version Control',
        skills: ['Git']
    },
    {
        title: 'API',
        skills: ['FastAPI']
    },
    {
        title: 'Machine Learning',
        skills: ['TensorFlow', 'Scikit-Learn', 'PyTorch', 'Streamlit']
    }
]

export default function Skills() {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 col-span-2 gap-4">
            {
                skills.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-2 border m-auto">
                        <h3 className="text-lg bg-slate-600 p-5">{skill.title}</h3>
                        <ul className="list-disc list-inside p-5">
                            {
                                skill.skills.map((s, i) => (
                                    <li key={i}>{s}</li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}