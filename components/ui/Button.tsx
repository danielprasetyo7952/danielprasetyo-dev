type Props = {
    onClick?: () => void
    type?: "button" | "submit"
    disabled?: boolean
    children?: React.ReactNode
}

export default function Button({
    onClick,
    type = "button",
    disabled = false,
    children
}: Props) {
    return (
        <div>
            <button onClick={onClick} type={type} className="relative inline-flex h-12 overflow-hidden p-[1px]" disabled={disabled}>
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F9F7F7_0%,#3F72AF_50%,#F9F7F7_100%)]"></span>
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center bg-background py-2 px-4 text-base font-medium backdrop-blur-3xl hover:text-[#ABB2BF]">
                    {children}
                </span>
            </button>
        </div>
    )
}