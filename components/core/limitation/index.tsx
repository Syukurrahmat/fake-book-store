import { Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, UseDisclosureReturn, Text, VStack, HStack, Collapse, useDisclosure, UnorderedList, ListItem, ListIcon, List } from '@chakra-ui/react'
import { IconLink } from '@tabler/icons-react'

interface ILimitationModal {
    disclosure: UseDisclosureReturn
    offerToRedirect?: BookData[]
}


export default function LimitationModal({ disclosure, offerToRedirect }: ILimitationModal) {
    const { isOpen, onClose } = disclosure
    const { isOpen: collapseIsOpen, onToggle: collapseOnToggle } = useDisclosure()

    return (
        <Modal isOpen={isOpen} onClose={onClose} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>🚧 Fitur dalam pengembangan</ModalHeader>
                <ModalCloseButton />
                <ModalBody as={VStack} align='start'>
                    <Text>
                        Fitur masih dikembangkan oleh developer,
                        Terima kasih sudah berkunjung dan menjajal Fake Book Store Web App ini.
                        Semoga sehat selalu ya buat kamu 😄.
                    </Text>

                    {offerToRedirect?.length &&
                        <>
                            <Text>
                                Jika kamu membutuhkan fitur ini untuk sekarang,
                                kami dapat mengarahkan anda ke sumber penyedia data kami
                                yakni <Link color='blue.700' href='https://itbook.store/'><b>IT BOOK Store</b></Link>
                            </Text>
                            <Text>
                                Berikut tautan tuk menuju masing-masing buku yang ingin kamu checkout
                            </Text>

                            <List fontSize='sm'>
                                {offerToRedirect.map(book => (
                                    <ListItem key={book.isbn13}>
                                        <ListIcon as={IconLink} color='green.500' />
                                        <Link href={book.url}>{book.title}</Link>
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Tutup
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}
