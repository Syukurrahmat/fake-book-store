declare type BookData = {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string
}

declare type Bookslist = {
    error: boolean,
    total: number,
    page: number,
    books: BookData[]
}

declare type DetailBook = {
    error: string,
    title: string,
    subtitle: string,
    authors: string,
    publisher: string,
    language: string,
    isbn10: string,
    isbn13: string,
    pages: string,
    year: string,
    rating: string,
    desc: string,
    price: string,
    image: string,
    url: string,
    pdf: {
        [key: string]: string
    }
}

declare type ChildrenProp = {
    children: React.ReactNode 
}