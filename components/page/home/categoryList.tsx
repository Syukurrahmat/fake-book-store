import { Flex, Box, Center, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { CATEGORIES } from '@/config'

import style from '@/styles/categoryItem.module.css'

export default function CategoryList() {
    return (
        <Flex flexWrap='wrap' justify='center' gap='10' align='center'>
            {CATEGORIES.map(({ name, image, slug }) => (
                <Center
                    as={Link}
                    href={'/category/' + slug}
                    flexDirection='column'
                    key={slug}
                    className={style.item}
                >
                    <Box borderRadius='md' boxShadow='xs' p='3'  >
                        <Image
                            width={80}
                            height={80}
                            src={image}
                            alt={name}
                        />
                    </Box>
                    <Text mt='2' textAlign='center' fontWeight='medium' >
                        {name}
                    </Text>
                </Center>
            ))}
        </Flex>
    )
}