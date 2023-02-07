import { Box, Container, Heading, HStack, Spacer } from "@chakra-ui/layout"
import { IconBooks } from '@tabler/icons-react'
import SearchInput from "./searchInput"
import Cart from "../../core/cart"
import ProfileMenu from "../../page/home/profileMenu/profileMenu"
import Link from "next/link"

export default function Navbar() {

    return (
        <>
            <Container
                maxW='full'
                bg='white'
                zIndex={100}
                boxShadow='md'
                h='14'
                position='fixed'
                top={0}
                p='0'
            >
                <Container maxW='container.xl' as={HStack} spacing={['3', '6']} h='full'>
                    <HStack as={Link} href='/' color='blue.600'>
                        <IconBooks size='30' />
                        <Heading display={['none', 'initial']} size='md'>BUKUTI</Heading>
                    </HStack>
                    <Spacer />
                    <SearchInput />
                    <Cart />
                    <ProfileMenu />
                </Container>
            </Container>
            <Box h='14' />
        </>

    )

}