import { unescapeHtml } from "@/lib/utils";
import { Button, Tab, Table, TableContainer, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Tr, VStack } from "@chakra-ui/react";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export default function BookDetail({ data }: { data: DetailBook }) {
    const { publisher, language, year, isbn10, desc, pdf, isbn13 } = data

    const tableDisplayedText = {
        'Penerbit': publisher,
        'Bahasa': language,
        'Tahun': year,
        'ISBN-10': isbn10,
        'ISBN-13': isbn13
    }

    return (
        <Tabs w='full'>
            <TabList>
                <Tab fontWeight='medium'>Deskripsi</Tab>
                <Tab fontWeight='medium'>Detail Buku</Tab>
                {pdf && <Tab fontWeight='medium'>Download</Tab>}
            </TabList>
            <TabPanels>
                <TabPanel>
                    {unescapeHtml(desc)}
                </TabPanel>
                <TabPanel>
                    <TableContainer >
                        <Table variant='striped' size='md'>
                            <Tbody>
                                {Object.entries(tableDisplayedText).map(([key, value]) => (
                                    <Tr key={key}>
                                        <Td py='2' fontWeight='medium'>{key}</Td>
                                        <Td py='2'>{value}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>

                </TabPanel>
                {pdf && <TabPanel>
                    <VStack align='start'>
                        {Object.entries(pdf).map(([key, value]) => (
                            <Button
                                key={key}
                                as={Link}
                                href={value}
                                size='sm'
                                colorScheme='blue'
                                leftIcon={<IconDownload size='19' />}
                            >
                                {key}
                            </Button>
                        ))}
                    </VStack>
                </TabPanel>}
            </TabPanels>
        </Tabs>
    )
}