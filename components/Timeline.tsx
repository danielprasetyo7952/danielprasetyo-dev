const experiences = [
    {
        title: 'Machine Learning Developer',
        company: 'Bangkit Academy',
        date: 'Feb 2023 - Jul 2023',
        description: 'Bangkit is a Google-led academy that empowers developers to solve real-world problems. I collaborated with a team of developers to build an android apps that can classNameifies images of electronic waste into 15 categories using machine learning model.',
    },
    {
        title: 'Freelance Web Scraper',
        company: 'Fastwork',
        date: 'Sep 2023 - Present',
        description: 'I am a freelance web scraper on Fastwork. I help clients to scrape data from websites and provide them with the data in a structured format. I have worked on various projects ranging from scraping product data from e-commerce websites to scraping comments from social media platforms.',
    },
    {
        title: 'Backend Developer',
        company: 'PT. Inti Dunia Sukses',
        date: 'May 2024 - Present',
        description: 'I am responsible for developing and maintaining the backend services of the company. I work closely with the frontend developers to ensure the seamless integration of the frontend and backend.',
    }
]

export default function Timeline() {
    return (
        <ol className="items-center md:flex">
            {
                experiences.map((experience, index) => (
                    <li className="relative mb-6 sm:mb-0" key={index}>
                        <div className="flex items-center">
                            <div className="z-10 flex items-center justify-center w-6 h-6 bg-gray-700 rounded-full ring-0 ring-background sm:ring-8 shrink-0">
                                <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <div className="hidden md:flex w-full h-0.5 bg-gray-700"></div>
                        </div>
                        <div className="mt-3 sm:pe-8">
                            <h3 className="text-lg font-semibold">{experience.title}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{experience.date} at <span className="font-bold">{experience.company}</span></time>
                            <p className="text-base font-normal text-gray-400">{experience.description}</p>
                        </div>
                    </li>
                ))
            }
        </ol>
    )
}