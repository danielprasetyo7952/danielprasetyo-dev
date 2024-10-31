type Props = {
    title?: string
    children?: React.ReactNode
}

export default function SectionHeader({
    title,
    children
}: Props) {
    return (
        <div className="flex justify-between mb-8">
            <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold">
                    &gt; {title}
                </h2>
                <div className="w-20 sm:w-40 md:w-80 h-[1px] rounded-sm bg-white"></div>
            </div>
            {children}
        </div>
    )
}