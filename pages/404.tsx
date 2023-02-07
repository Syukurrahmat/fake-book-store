import { Box, Center, Container, Text } from "@chakra-ui/react";

import image404 from '@/public/image/404 Error.svg'
import Image from "next/image";

export default function Custom404() {
    return (
        <Container
            maxW='container.xl'
            as={Center}
            flexDirection={['column', 'row']}
            minH='calc(100vh - 272px)'
        >
            <Image src={image404} alt='404 image' width={250} />
            <Box>
                <Text fontSize='2xl' fontWeight='bold'>😱 Opsss...</Text>
                <Text fontSize='xl' fontWeight='medium'>Halaman tidak ditemukan</Text>
            </Box>
        </Container>
    )
}