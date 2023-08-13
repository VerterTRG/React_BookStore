import axios from "axios"

const URL = 'https://www.googleapis.com/books/v1/volumes'

export async function getBookBySearchTerm(search) {
    return await axios.get(`${URL}?q=${search}`)
}

export async function getBookById(bookId) {
    return await axios.get(`${URL}/${bookId}`)
}