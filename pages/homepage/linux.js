import Link from "next/link";

export default function Linux() {
    return (
        <>
            <p className="text-2xl pl-96">Linux</p>
            <div class="container mx-auto p-5">
                <ul class="grid grid-cols-3 gap-4 pl-64">
                    <li>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux internals</p>
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
        </>
    )
}