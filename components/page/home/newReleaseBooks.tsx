import { useNewBookSWR } from '@/services/swr'
import { HStack, Box, Center, Heading } from '@chakra-ui/react'
import { IconBook } from '@tabler/icons-react'
import BookList from '@/components/common/bookList'

export default function NewReleaseBooks() {
    const { data, error, isLoading } = useNewBookSWR()

    return (
        <Box w='full'>
            <HStack spacing='4' mb='4'>
                <Center bg='blue.100' color='blue.600' p='2' borderRadius='base'>
                    <IconBook size='28' />
                </Center>
                <Heading size='lg'>Buku Terbaru</Heading>
            </HStack>
            <BookList data={data?.books} />
        </Box>
    )
}