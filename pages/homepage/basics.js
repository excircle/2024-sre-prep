import Link from "next/link";

export default function Basics() {
    return (
        <div className="py-2">
            <p className="text-2xl pl-96">Basics</p>
            <div className="container mx-auto p-5">
                <ul className="grid grid-cols-3 gap-4 pl-64">
                    <li>
                        <Link href="/basics/how-does-a-browser-query-work">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">How does a browser query work?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">How does TCP work?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">How does SSL work?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">How does a DNS query work?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">What does the SSO workflow look like?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">What a basic ML Model Training looks like</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}