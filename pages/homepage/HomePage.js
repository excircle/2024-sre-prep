import Basics from "./basics";
import Linux
 from "./linux";
export default function HomePage() {
    return (
        <>
            <p className="text-3xl text-center underline py-2">Study Topics</p>
            <Basics />
            <Linux />
        </>
    )
}