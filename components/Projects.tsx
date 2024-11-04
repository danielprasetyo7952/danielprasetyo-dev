import Card from "./ui/Card";

type Props = {
    views?: number;
}

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

export default function Projects({
    views = projects.length
}: Props) {
    const visibleProjects = projects.slice(0, views);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {
                visibleProjects.map((project, index) => (
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
    )
}