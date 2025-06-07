
const Heading = ({ title }: { title: string }) => {
    return (
        <h1 className="text-5xl font-semibold relative inline-block">
            <span className="relative z-10">{title}</span>
            <span className="absolute bottom-1 right-0 w-[90%] h-3 bg-primary rounded-full -z-10 rotate-[-2deg]"></span>
        </h1>
    )
}

export default Heading