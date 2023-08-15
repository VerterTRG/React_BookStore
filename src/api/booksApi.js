import axios from "axios"

const URL = 'https://www.googleapis.com/books/v1/volumes'

export async function getBookBySearchTerm(search, page, limit=10) {
    const startIndex = (page - 1) * limit

    return await axios.get(`${URL}`, {
            params: {
                q: search,
                startIndex: startIndex,
                maxResult: limit
            } 
        });
}

export async function getBookById(bookId) {
    return await axios.get(`${URL}/${bookId}`)
}