import { useDetailBookSWR } from "@/services/swr"
import { Image, Box, Card, CardBody, Text, HStack, VStack, Skeleton, IconButton, Stack } from "@chakra-ui/react"

import Link from "next/link"
import AddCartButton from "../cart/addCartButton"
import { IconTrash } from "@tabler/icons-react"
import { useContext } from "react"
import FavoritesContext from "@/lib/context/favoritesContext"

interface IFavoriteCard {
    isbn13: string
}

export default function FavoriteCard({ isbn13 }: IFavoriteCard) {
    const { toggleFavorites } = useContext(FavoritesContext)
    const { data, isLoading } = useDetailBookSWR(isbn13)
    const { title, image, price } = data || {}

    return (
        <Card
            as={Skeleton}
            isLoaded={!isLoading}
            size='xs'
            direction='row'
            variant='outline'
            borderRadius='md'
            minH='80px'

        >
            <Box h='full' w='80px' overflow='hidden' boxShadow='xs' my='auto'>
                <Image
                    objectFit='fill'
                    alt={'buku' + title}
                    src={image}
                    transform='scale(1.1)'
                />
            </Box>
            <CardBody p='2' as={VStack} justifyContent='space-between' align='start'>
                <Text fontWeight='medium' as={Link} href={'/book/' + isbn13} noOfLines={2}>{title}</Text>
                <Stack direction={{ base: 'column', md: 'row' }} justify='space-between' w='full'>
                    <Text fontSize='sm' >{price}</Text>
                    <HStack spacing='4' alignSelf='end'>
                        <IconButton
                            aria-label='Hapus dari daftar Favorit'
                            size='xs'
                            colorScheme='red'
                            icon={<IconTrash size='70%' />}
                            onClick={() => toggleFavorites(isbn13)}
                        />
                        <AddCartButton size='xs' isbn13={isbn13} />
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}