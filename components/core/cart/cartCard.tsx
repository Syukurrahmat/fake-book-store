import CartContext from "@/lib/context/cartContext"
import { useDetailBookSWR } from "@/services/swr"

import { currencyFormat } from "@/lib/utils"
import { Image, Box, Card, CardBody, Text, HStack, VStack, Button, Input, IconButton, Skeleton, Stack } from "@chakra-ui/react"
import { IconTrash } from "@tabler/icons-react"
import Link from "next/link"
import { useContext } from "react"

interface ICartCard {
    isbn13: string
}

export default function CartCard({ isbn13 }: ICartCard) {
    const { cart, setCart } = useContext(CartContext)
    const { data, isLoading } = useDetailBookSWR(isbn13)
    const { title, image, price } = data || {}
    const count = cart[isbn13]
    const totalPrice = parseFloat(String(price?.slice(1))) * count

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
                    w='80px'
                    objectFit='fill'
                    alt={'buku' + title}
                    src={image}
                    transform='scale(1.1)'
                />
            </Box>
            <CardBody p='2' as={VStack} justifyContent='space-between' align='start'>
                <Text fontWeight='medium' as={Link} href={'/book/' + isbn13} noOfLines={2}>{title}</Text>
                <Stack direction={{base : 'column', md : 'row'}} justify='space-between' w='full'>
                    <Text fontSize='sm' >{price} × {count} = <strong>{currencyFormat.format(totalPrice)}</strong></Text>
                    <HStack alignSelf='end'>
                        <IconButton
                            aria-label='Hapus dari keranjang'
                            size='xs'
                            colorScheme='red'
                            icon={<IconTrash size='16' />}
                            onClick={() => setCart(isbn13, 0)}
                        />
                        {count > 1 &&
                            <Button
                                size='xs'
                                colorScheme='blue'
                                onClick={() => setCart(isbn13, e => e - 1)}
                            >
                                - 
                            </Button>
                        }
                        <Input
                            textAlign='center'
                            w='40px'
                            size='xs'
                            min={0}
                            type='number'
                            value={count}
                            onChange={e => {
                                const value = Number(e.target.value)
                                if (value > 0) setCart(isbn13, value)
                            }}
                        />
                        <Button
                            size='xs'
                            colorScheme='blue'
                            onClick={() => setCart(isbn13, e => e + 1)}
                        >
                            +
                        </Button>

                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}