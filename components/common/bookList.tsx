import BookCard, { BookCardSkeleton } from "./bookCard"
import { SimpleGrid } from '@chakra-ui/react'

interface IBookList {
    data: BookData[] | undefined
    dataLengthPredict?: number
}

export default function BookList({ data, dataLengthPredict = 20 }: IBookList) {
    return (
        <SimpleGrid gap='4' minChildWidth={['140px', '165px']} >
            {data ?
                data.map((book, i) => (
                    <BookCard data={book} key={i} />
                ))
                :
                Array(dataLengthPredict).fill(null).map((_, i) => <BookCardSkeleton key={i} />)
            }
        </SimpleGrid>
    )
}