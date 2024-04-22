export default function Section({ number, title, content }) {
    return (
        <>
            <p className="text-xl py-2 font-thin font-serif pl-96">{number}.) {title}</p>
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-lg font-thin text-gray-800">
                    {content}
                </p>
            </div>
        </>
    )
}