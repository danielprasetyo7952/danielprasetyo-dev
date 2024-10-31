import Image from "next/image"
import Link from "next/link"

{/* Components */ }
import Button from "@/components/ui/Button"

type Props = {
    image?: string
    title?: string
    description?: string
    repoLink?: string
    liveLink?: string
}

export default function Card({
    image = "/cover.jpg",
    title,
    description,
    repoLink = "",
    liveLink = ""
}: Props) {
    return (
        <div className="flex flex-col max-w-md border border-gray-200 rounded-lg shadow hover:transform hover:scale-105 hover:transition-transform">
            <Image
                src={image}
                alt=""
                width={400}
                height={300}
                className="w-auto rounded-t-lg" />
            <div className="p-5 flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
                <p className="mb-3 font-normal text-gray-400">{description}</p>
            </div>
            <div className="p-5 flex flex-row gap-4">
                <Link href={repoLink} target="_blank" className="text-sm flex items-center">
                    <Button>
                        Repo -&gt;
                    </Button>
                </Link>
                {liveLink && (
                    <Link href={liveLink} target="_blank" className="text-sm flex items-center">
                        <Button>
                            Live -&gt;
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    )
}