import useSWR from 'swr'
const BASE_API = 'https://api.itbook.store/1.0'

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
}

interface MultipleArgsFetcher<T> {
    (obj: { baseUrl: string, query: string, page: number, isbnList: string[] }): Promise<T>
}

const multpleSearchFetcher: MultipleArgsFetcher<Bookslist> = async ({ baseUrl, query, page }) => {
    const firstPage = 1 + (page - 1) * 2
    const secondPage = firstPage + 1

    const [firstResponse, secondResponse] = await Promise.all([
        fetcher(baseUrl + "/" + query + "/" + firstPage),
        fetcher(baseUrl + "/" + query + "/" + secondPage),
    ])

    return { ...firstResponse, books: firstResponse.books.concat(secondResponse.books) }
}

const multpleBooksFetcher: MultipleArgsFetcher<BookData[]> = async ({ baseUrl, isbnList }) => {

    const responses: DetailBook[] = await Promise.all(isbnList.map(isbn => fetcher(baseUrl + '/' + isbn)))

    return responses.map(({ title, subtitle, isbn13, price, image, url }) => (
        { title, subtitle, isbn13, price, image, url }
    ))
}

const relatedBookFetcher: MultipleArgsFetcher<Bookslist> = async ({ baseUrl, query }) => {
    const resp = await fetcher(baseUrl + '/' + query)
    resp.books = resp.books.filter((book: BookData) => book.title !== query)
    return resp
}

export const getDetailBook = (isbn: string): Promise<DetailBook> => fetcher(`${BASE_API}/books/${isbn}`)

export const useDetailBookSWR = (isbn: string,) => (
    useSWR<DetailBook>(isbn, getDetailBook)
)
export const useNewBookSWR = () => (
    useSWR<Bookslist>(`${BASE_API}/new`, fetcher)
)

export const useSearchNCategorySWR = (query: string, page: number = 1) => (
    useSWR<Bookslist>({ baseUrl: `${BASE_API}/search`, query, page }, multpleSearchFetcher)
)

export const useRelatedBookSWR = (query: string) => (
    useSWR<Bookslist>({ baseUrl: `${BASE_API}/search`, query }, relatedBookFetcher)
)

export const useMultipleBookDataSWR = (isbnList: string[]) => (
    useSWR<BookData[]>({ baseUrl: `${BASE_API}/books`, isbnList }, multpleBooksFetcher)
)