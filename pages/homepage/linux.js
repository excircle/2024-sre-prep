import Link from "next/link";

export default function Linux() {
    return (
        <div className="py-2">
            <p className="text-2xl pl-96">Linux</p>
            <div class="container mx-auto p-5">
                <ul class="grid grid-cols-3 gap-4 pl-64">
                    <li>
                        <Link href="/linux/linux-internals">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux Internals</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/the-linux-boot-process">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">The Linux Boot Process</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/what-are-inodes-how-do-they-work">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">What are iNodes, how do they work?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/understanding-the-proc-filesystem">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Understanding the proc Filesystem</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/linux-kernel-basics">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux Kernel Basics</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/linux-processes-threads">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux Processes/Threads</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/stacks-heaps">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux Stacks/Heaps</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/linux-system-calls">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux System Calls</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/how-is-a-file-written-to-an-ext4-filesystem">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">How is a File written to an EXT4 Filesystem</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/linux-system-troubleshooting-tools">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux System Troubleshooting & Tools</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/what-is-a-linux-kernel-panic">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">What is a Linux Kernel panic?</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/linux/linux-misc-data">
                            <p className="text-blue-500 hover:underline cursor-pointer font-bold">Linux Misc Data</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}