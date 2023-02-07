import { Button, Heading, HStack, Text, useDisclosure, VStack } from "@chakra-ui/react"
import AddCartButton from "@/components/core/cart/addCartButton"
import ToogleFavoriteButton from "@/components/core/favorite/toogleFavoriteButton"
import LimitationModal from "@/components/core/limitation"

export default function BookInfo({ data }: { data: DetailBook }) {
    const { title, subtitle, price, authors, isbn13 } = data
    const featureLimitation = useDisclosure()

    return (
        <VStack align='start' spacing='3' w='full'>
            <VStack align='start' spacing='1' fontWeight='medium' w='full'>
                <HStack justify='space-between' w='full'>
                    <Text color='gray.600'>{authors}</Text>
                    <ToogleFavoriteButton isbn13={isbn13} aria-label="Tambah ke favorit" />
                </HStack>

                <Heading size='lg' >{title}</Heading>
                {subtitle && <Text color='gray.600'>{subtitle}</Text>}
            </VStack>

            <Text fontWeight='medium' color='blue.600' fontSize='3xl'>
                {price === "$0.00" ? 'Gratis' : price}
            </Text>

            <HStack spacing='4'>
                <AddCartButton size='md' colorScheme='gray' isbn13={isbn13} />
                <Button colorScheme='blue' onClick={featureLimitation.onOpen} >Beli Serakang</Button>
            </HStack>
            <LimitationModal disclosure={featureLimitation} offerToRedirect={[data]}/>
        </VStack>

    )
}