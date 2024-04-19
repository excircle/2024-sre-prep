import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-center">
            <hr></hr>
            <footer className="flex justify-center">
                <div className="flex">
                    <span>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer">About</p>
                        </Link>
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer">Contact</p>
                        </Link>
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer">Privacy Policy</p>
                        </Link>
                    </span>
                    <span className="mx-2">|</span>
                    <span>
                        <Link href="#">
                            <p className="text-blue-500 hover:underline cursor-pointer">Terms of service</p>
                        </Link>
                    </span>
                </div>
            </footer>
            <div>
                <p>&copy;Copyright by Alexander Kalaj</p>
            </div>
        </div>
    )
}
