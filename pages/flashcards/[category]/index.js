import { useRouter } from 'next/router';
import { getQuestions } from "@/pages/api/flashcardsApi";
import { useEffect, useState } from "react";
import Flashcard from '@/components/flashcard/flashcard';

export default function Category() {
    const router = useRouter();
    const { category } = router.query;  // Accessing the 'category' parameter from the URL

    const [questions, setQuestions] = useState([]);  // Initialize questions as an empty array
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function generateQuestions() {
            if (!category) {
                return; // If category is not yet available, exit early
            }
            const response = await getQuestions(category);
            const data = await response; 
            console.log(data.questions);
            setQuestions(data.questions || []); // Set to empty array if data.questions is undefined or null
            setLoading(false);
        }

        generateQuestions();
    }, [category]);  // Depend on 'category' to re-run when it changes

    return (
        <>
            <p className="text-2xl py-2 text-center">{category} Flashcards!</p>
            {!loading && questions.length > 0 ? (
        <div className="flex justify-center items-center py-8">
        <div className="border border-black border-opacity-25 w-3/4 p-6">
            <p className="text-2xl text-center py-2">This is the Flashcard Component Page!</p>
            {/* The Flashcard goes below here*/}
            <Flashcard question={questions[count].question} answer={questions[count].answer} description={questions[count].description} count={count} counter={setCount} max={questions.length} />
            {/* The Flashcard ends here */}
        </div>
    </div>
            ) : (
                <p className="text-center">No questions available.</p>
            )}
        </>
    );
}
