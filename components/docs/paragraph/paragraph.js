export default function Paragraph({ content, buffer }) {
    return (
        <>
            <div className={buffer ? "max-w-6xl mx-auto px-4 py-2" : "max-w-6xl mx-auto px-4"}>
                <p className="text-lg font-thin text-gray-800">
                    {content}
                </p>
            </div>
        </>
    )
}