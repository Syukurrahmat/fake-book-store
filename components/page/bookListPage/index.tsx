import { IconBook } from "@tabler/icons-react"
import { Container, HStack, Box, Center, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'
import Image from "next/image"
import SimplePagination from '@/components/common/simplePagination'
import BookList from "@/components/common/bookList"
import { useRouter } from "next/router"
import { useSearchNCategorySWR } from "@/services/swr"

import emptyImage from '@/public/image/empty.png'
import { useRef } from "react"

interface IBookListWithPaginate {
    headingText: string
    query: string
    dataLenghPredict?: number
}

export default function BookListPage({ query, headingText }: IBookListWithPaginate) {
    const router = useRouter()
    const [page, setPage] = useState(Number(router.query.page) || 1)
    const { data, error, isLoading } = useSearchNCategorySWR(query, page)

    if (error) return null

    const fisrtPageNum = (page - 1) * 20 + 1
    const lastPageNum = fisrtPageNum + (data?.books.length || 0) - 1

    const DetailCountBooks = () => (
        <Text color='gray.600' fontSize='sm'>
            {!data ?
                'Memuat daftar buku'
                :
                Number(data.total) ?
                    `Menampilkan ${fisrtPageNum}-${lastPageNum} dari ${data?.total} buku`
                    :
                    'Tidak ditemukan buku dengan kata kunci tersebut'
            }
        </Text>
    )

    return (
        <Container maxW='container.xl' mt='6' minH='calc(100vh - 262px)' >
            <HStack spacing='4' mb='6' >
                <Center bg='blue.100' color='blue.600' p='2' borderRadius='base' >
                    <IconBook size='28' />
                </Center>
                <Box>
                    <Heading size='md'>{headingText}</Heading>
                    <DetailCountBooks />
                </Box>
            </HStack>
            {data?.books.length || isLoading ?
                <BookList data={data?.books} />
                :
                <Center py='16' gap='6' flexDirection={['column', 'row']}>
                    <Image alt='kotak kosong' src={emptyImage} width={90} />
                    <Text fontSize='2xl' fontWeight='medium' maxW='500px' textAlign={['center', 'left']}>
                        Tidak ada buku yang cocok dengan kata kunci "{query}"
                    </Text>

                </Center>
            }
            {Number(data?.total) !== 0 &&
                <HStack justify='end' mt='4' spacing='6'>
                    <DetailCountBooks />
                    <SimplePagination
                        page={page}
                        countPerPage={20}
                        countTotal={Number(data?.total)}
                        setPage={value => {
                            setPage(value)
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }}
                    />
                </HStack>
            }
        </Container>
    )
}