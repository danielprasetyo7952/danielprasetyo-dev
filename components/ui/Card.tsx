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
        <div className="max-w-md border border-gray-200 rounded-lg shadow">
            <Image
                src={image}
                alt=""
                width={400}
                height={300}
                className="rounded-t-lg" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
                <p className="mb-3 font-normal text-gray-400">{description}</p>
                <div className="flex flex-row gap-4">
                    <Button>
                        <Image
                            src={"/icons/github.svg"}
                            alt="GitHub"
                            width={20}
                            height={20}
                            className="me-2" />
                        <Link href={repoLink} className="text-sm">
                            Repo
                        </Link>
                    </Button>
                    {liveLink && (
                        <Button>
                            <Link href={liveLink} className="text-sm">
                                &#128279; Live
                            </Link>
                        </Button>
                    )}
                </div>
            </div>
        </div >

    )
}