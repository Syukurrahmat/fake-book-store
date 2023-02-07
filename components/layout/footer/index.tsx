import { Box, Container, Divider, Heading, HStack, IconButton, Stack, Text, VStack } from "@chakra-ui/react";
import { IconBooks, IconBrandFacebook, IconBrandInstagram, IconBrandTwitter, IconMail } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <Container maxW='full' bg='blue.500' color='white' mt='8'>
                <Container
                    maxW='container.xl'
                    py='8'
                    as={Stack}
                    justifyContent='space-between'
                    direction={['column', 'row']}
                    spacing='6'
                >
                    <Box>
                        <HStack mb='2' as={Link} href='/' maxW='max-content'>
                            <IconBooks size='30' />
                            <Heading size='md'>BUKUTI</Heading>
                        </HStack>
                        <Text > Cari, Temukan, dan Beli dengan budah dan cerdas </Text>
                    </Box>
                    <Box>
                        <Heading size='md' mb='3'>Kontak Kami</Heading>
                        <HStack color='blue.600' spacing='4'>
                            <IconButton
                                icon={<IconBrandInstagram />}
                                aria-label='Instagram'
                                as={Link}
                                size='sm'
                                href='/'
                            />
                            <IconButton
                                icon={<IconBrandTwitter />}
                                aria-label='Tweeter'
                                as={Link}
                                size='sm'
                                href='/'
                            />
                            <IconButton
                                icon={<IconBrandFacebook />}
                                aria-label='Facebook'
                                as={Link}
                                size='sm'
                                href='/'
                            />
                            <IconButton
                                icon={<IconMail />}
                                aria-label='Email'
                                as={Link}
                                size='sm'
                                href='/'
                            />
                        </HStack>
                    </Box>
                </Container>
            </Container>
            <Container maxW='full' bg='blue.600'>
                <Container maxW='container.xl' py='4'>
                    <Text fontSize='md' color='white' textAlign='center'>
                        © {new Date().getFullYear()} Copyright: BUKUTI
                    </Text>
                </Container>
            </Container>
        </>
    )
}