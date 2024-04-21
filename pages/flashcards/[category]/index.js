import { useRouter } from 'next/router';
import { getQuestions } from "@/pages/api/flashcardsApi";
import { useEffect, useState } from "react";

export default function Category() {
    const router = useRouter();
    const { category } = router.query;  // Accessing the 'category' parameter from the URL

    const [questions, setQuestions] = useState(null);
    const [Loading, setLoading] = useState(true);

    useEffect(() => {
        async function generateQuestions() {
            const response = await getQuestions(category)
            const data = await response
            console.log(data.questions)
            setQuestions(data.questions)
            setLoading(false)
        }
        generateQuestions()
    }, [])

    return (
        <>
            <p className="text-2xl py-2 text-center">{category.charAt(0).toUpperCase() + category.slice(1)} Flashcards!</p>
            {questions.map((item, index) => {
                return (
                    <p key={index} className="text-center">Question: '{item.question}', Answer: '{item.answer}', Desc: '{item.description}'</p>
                )
            })}
        </>
    );
}
