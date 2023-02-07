import CartContext from "@/lib/context/cartContext"
import { currencyFormat } from '@/lib/utils'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, Box, IconButton, Badge, VStack, Text, Skeleton, Spacer, Center, StackDivider } from '@chakra-ui/react'
import { IconShoppingCart } from '@tabler/icons-react'
import { useRef, useContext } from 'react'
import CartCard from './cartCard'
import { useMultipleBookDataSWR } from '@/services/swr'

import cartImage from '@/public/image/cart.png'
import Image from 'next/image'
import LimitationModal from "../limitation"

export default function Cart() {
    const featureLimitation = useDisclosure()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { cart } = useContext(CartContext)
    const btnRef = useRef(null)

    const booksList = Object.keys(cart)
    const count = booksList.length

    const { data, isLoading } = useMultipleBookDataSWR(booksList)

    const totalPrice = data?.map(e => Number(e.price.slice(1)) * cart[e.isbn13]).reduce((a, b) => a + b, 0)

    return (
        <>
            <Box position='relative' ref={btnRef} onClick={onOpen} >
                <IconButton size='sm' aria-label="cart" icon={<IconShoppingCart />} />
                {Boolean(count) &&
                    <Badge
                        position='absolute'
                        colorScheme='blue'
                        bottom='-4px'
                        right='-4px'
                        minW='18px'
                        textAlign='center'
                    >
                        {count}
                    </Badge>
                }
            </Box>
            <Drawer
                size='md'
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Text>Keranjang Kamu</Text>
                        <Text fontSize='sm'>
                            {count ?
                                `${count} item ada dikeranjang` :
                                'Tidak ada buku dalam keranjang'
                            }
                        </Text>
                    </DrawerHeader>
                    <DrawerBody>
                        {count ?
                            <VStack align='stretch' spacing='2' >
                                {booksList.map((isbn13) => (
                                    <CartCard isbn13={isbn13} key={isbn13} />
                                ))}
                            </VStack>
                            :
                            <Center flexDirection='column' textAlign='center' gap='6' py='20'>
                                <Image width={150} alt='Gambar keranjang kosong' src={cartImage} />
                                <Text fontWeight='medium' fontSize='lg'>Belum ada item dikeranjangmu</Text>
                            </Center>
                        }
                    </DrawerBody>
                    <DrawerFooter>
                        {Boolean(count) &&
                            <Box>
                                <Text
                                    as={Skeleton}
                                    isLoaded={!isLoading}
                                    minW='25px' fontSize='lg'
                                    fontWeight='medium'
                                >
                                    Total :  {currencyFormat.format(totalPrice || 0)}</Text>
                                <Text fontSize='sm'>{count} item</Text>
                            </Box>
                        }
                        <Spacer />
                        <Button variant='outline' mr={3} onClick={onClose}> Cancel </Button>
                        {Boolean(count) &&
                            <Button
                                colorScheme='blue'
                                onClick={() => {
                                    onClose()
                                    featureLimitation.onOpen()
                                }}
                            >
                                Checkout
                            </Button>
                        }
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
            <LimitationModal disclosure={featureLimitation} offerToRedirect={data} />
        </>
    )

}