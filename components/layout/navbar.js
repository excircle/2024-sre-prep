import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="flex ">
                <div>
                    <p className="font-bold text-xl">SRE Prep | </p>
                </div>
                <div>
                    <Link className="px-2 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/">Home</Link>
                    <Link className="px-2 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/flashcards">Flashcards</Link>
                    <Link className="px-2 text-xl text-blue-500 hover:underline cursor-pointer font-bold" href="/checklist">Interview Checklist</Link>
                </div>
            </nav>
            <hr></hr>
        </>
    )
}