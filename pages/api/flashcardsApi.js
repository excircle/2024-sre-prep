import { handleResponse, handleError } from "./apiUtils";

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export function getCategories() {
    console.log(baseUrl)
    return fetch(baseUrl + "flashcards/categories")
        .then(handleResponse)
        .catch(handleError);
}

export function getQuestions(categories) {
    console.log(baseUrl)
    console.log(categories)
    return fetch(baseUrl + "flashcards/questions/" + categories)
        .then(handleResponse)
        .catch(handleError);
}