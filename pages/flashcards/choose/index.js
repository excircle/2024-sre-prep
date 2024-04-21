import Link from "next/link";
import { getCategories } from "@/pages/api/flashcardsApi";
import { useEffect, useState } from "react";

export default function Choose() {
    const [categories, setCategories] = useState(null);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        async function generateCategories() {
            const response = await getCategories()
            const data = await response
            setCategories(data.categories)
            setLoading(false)
        }
        generateCategories()
    }, [])

    if (Loading) {
        return <h1 className="text-center text-2xl">LOADING PAGE</h1>
    }

    return (
        <div className="flex justify-center items-center py-8">
            <div className="border border-black border-opacity-25 w-3/4 h-96">
                <p className="text-2xl text-center py-2">This is the Flashcards Choose Page!</p>
                <div className="flex justify-center items-center space-x-4">

                <div className="container mx-auto p-5">
                <ul className="grid grid-cols-2 gap-4 pl-96">
                    {categories.map((item, index) => {
                        return (
                            <li key={index}>
                                <div className="border border-black border-opacity-25 w-32 h-32 flex justify-center items-center">
                                    <Link href={`/flashcards/${item.category}`}>
                                        <p className="text-2xl text-center py-2">{item.category}</p>
                                    </Link>
                                </div>
                            </li>
                        )    
                    })}
                </ul>
            </div>
                </div>
            </div>
        </div>
    );
}