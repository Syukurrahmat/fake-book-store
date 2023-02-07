import FavoritesContext from '@/lib/context/favoritesContext'
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, Button, VStack, Text, MenuItem, Center, StackDivider } from '@chakra-ui/react'
import { IconHeart } from '@tabler/icons-react'
import { useContext } from 'react'
import FavoriteCard from './favoriteCard'


import bookImage from '@/public/image/books.png'
import Image from 'next/image'

export default function Favorite() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { favorites } = useContext(FavoritesContext)
    const count = favorites.length

    return (
        <>
            <MenuItem icon={<IconHeart size='18' />} onClick={onOpen}>Favorite</MenuItem>
            <Drawer
                size='md'
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        <Text>Buku Favoritmu</Text>
                        <Text fontSize='sm'>
                            {count ?
                                `${count} buku favoritmu` :
                                'Belum ada buku favorit'
                            }
                        </Text>
                    </DrawerHeader>
                    <DrawerBody>
                        {count ?
                            <VStack align='stretch' spacing='2'>
                                {favorites.map((isbn13) => (
                                    <FavoriteCard isbn13={isbn13} key={isbn13} />
                                ))}
                            </VStack>
                            :
                            <Center flexDirection='column' textAlign='center' gap='6' py='20'>
                                <Image width={150} alt='Gambar keranjang kosong' src={bookImage} />
                                <Text fontWeight='medium' fontSize='lg'>Belum ada buku favorit</Text>
                            </Center>
                        }
                    </DrawerBody>
                    <DrawerFooter>
                        <Button colorScheme='blue' onClick={onClose}>Tutup</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}