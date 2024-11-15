const funfact = [
    "I am a weeb",
    "I enjoy watching anime, reading manga or light novels in my free time",
    "I playing video games, especially RPGs and hack-and-slash games",
    "I love astronomy and enjoy stargazing whenever I get the chance"
]

export default function FunFact() {
    return (
        <ul className="flex flex-wrap gap-4">
            {
                funfact.map((item, index) => (
                    <li key={index} className="border border-primary text-sm p-3 rounded">
                        {item}
                    </li>
                ))
            }
        </ul>
    )
}