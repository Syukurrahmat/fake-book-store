import { AspectRatio, Card, CardBody, CardProps, HStack, Image, Skeleton, SkeletonText, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import ToogleFavoriteButton from "../core/favorite/toogleFavoriteButton"
import AddCartButton from "../core/cart/addCartButton"

import bookCardStyles from '@/styles/bookCard.module.css'

interface IBookCard extends CardProps {
    data: BookData
}

export default function BookCard({ data }: IBookCard) {
    const { title, isbn13, price, image } = data

    return (
        <Card
            className={bookCardStyles.bookCard}
            size='sm'
            borderRadius='md'
            boxShadow='none'
            h='max-content'
            maxW='220px'
        >
            <AspectRatio
                as={Link}
                href={'/book/' + isbn13}
                ratio={6 / 7}
                boxShadow='xs'
                borderRadius='md'
                bgColor='gray.50'
                overflow='hidden'
            >
                <Image
                    alt={'Buku' + title}
                    src={image}
                    objectFit='cover'
                    transform='scale(1.15)'
                    fallbackSrc='https://i.ibb.co/dpRvXkQ/image-placeholder.png'
                />
            </AspectRatio>

            <CardBody fontSize='sm'>
                <Text
                    as={Link}
                    href={'/book/' + isbn13}
                    mb='2'
                    fontWeight='medium'
                    noOfLines={3}
                >
                    {title}
                </Text>
                <Stack
                    direction={['column', 'row']}
                    spacing='2'
                    justify='space-between'
                    align={['initial', 'center']}
                >
                    <Text fontWeight='medium' color='gray.500'>
                        {price === "$0.00" ? 'Gratis' : price}
                    </Text>
                    <HStack justify='end'>
                        <ToogleFavoriteButton isbn13={isbn13} />
                        <AddCartButton isbn13={isbn13} />
                    </HStack>
                </Stack>
            </CardBody>
        </Card>
    )
}

export function BookCardSkeleton() {

    return (
        <Card
            border='1ox solid salmon'
            size='sm' borderRadius='md' boxShadow='none' h='max-content'
            maxW='220px'
        >
            <AspectRatio ratio={6 / 7} boxShadow='xs' borderRadius='md'>
                <Skeleton />
            </AspectRatio>

            <CardBody fontSize='sm'>
                <SkeletonText mb='2' noOfLines={2} spacing='2' skeletonHeight='18' />
                <HStack w='full'>
                    <SkeletonText noOfLines={1} skeletonHeight='18' w='40%' />
                </HStack>
            </CardBody>
        </Card>
    )
}