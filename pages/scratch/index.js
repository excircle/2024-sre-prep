import { getCategories } from "../api/flashcardsApi";
import { useEffect, useState } from "react";

export default function Scratch() {
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
        <>
            <p className="text-2xl py-2 text-center">Query results go below this text!</p>
            {categories.map((item, index) => {
                return (
                    <p key={index} className="text-center">{item}</p>
                )
            })}
        </>
    )
}