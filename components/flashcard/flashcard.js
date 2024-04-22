import { useState } from 'react';

export default function Flashcard({ question, answer, description, count, counter, max }) {
    const [showAnswer, setShowAnswer] = useState(false);  // simplified state to toggle visibility

    const handleShowAnswer = () => {
        setShowAnswer(!showAnswer);  // toggle the state for showing answer
    }

    const handleNext = () => {
        setShowAnswer(false)
        if (count + 1 >= max) {
            counter(0);
        } else {
            counter(count + 1);
        }
    }

    const handlePrev = () => {
        setShowAnswer(false)
        if (count > 0) {
            counter(count - 1);
        }
    }

    return (
        <>
            <div className="flex justify-center items-center space-x-4">
                <div className="border border-black border-opacity-25 flex justify-center items-center flex-col p-8">
                    <div className="py-2">
                        <div className="font-thin text-center border border-black border-opacity-25 p-4">{question}</div>
                        {/* Toggleable Answer and Description */}
                        {showAnswer && (
                            <>
                                <div className="py-2">
                                    <div className="font-bold text-center border border-black border-opacity-25 p-4">{answer}</div>
                                </div>
                                <div className="py-2">
                                    <div className="font-thin text-center border border-black border-opacity-25 p-4">
                                        <p className="text-center underline font-thin italic">Description</p>
                                        {description}
                                    </div>
                                </div>
                            </>
                        )}
                        {/* Button Layer */}
                        <div className="flex justify-center items-center space-x-4 py-4">
                            <button onClick={handleShowAnswer} className="border border-black border-opacity-25 p-2">Show Answer</button>
                        </div>
                        <div className="flex justify-center items-center space-x-4 p-4">
                            <button onClick={handlePrev} className="border border-black border-opacity-25 p-2">Prev</button>
                            <button onClick={handleNext} className="border border-black border-opacity-25 p-2">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
