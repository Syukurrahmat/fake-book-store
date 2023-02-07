import { HStack, IconButton, Input } from '@chakra-ui/react'

import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useState } from 'react'

interface ISimplePagination {
    page: number
    setPage: (page: number) => any
    countPerPage: number
    countTotal: number
}

export default function SimplePagination({ page, setPage, countPerPage, countTotal }: ISimplePagination) {
    const [value, setValue] = useState(page)
    const pageTotal = Math.ceil(countTotal / countPerPage) || 0

    return (
        <HStack>
            <IconButton
                size='sm' aria-label='Halaman Sebelumnya' colorScheme='blue'
                icon={<IconChevronLeft />}
                isDisabled={page == 1}
                onClick={() => {
                    setPage(page - 1)
                    setValue(page - 1)
                }}
            />
            <Input
                fontSize='md' fontWeight='medium' textAlign='center' size='sm'
                borderRadius='md'
                type='number'
                w='60px'
                min={1}
                max={pageTotal}
                value={value}
                onChange={event => {
                    let value = Number(event.target.value)
                    setValue(value <= 1 ? 1 : value >= pageTotal ? pageTotal : value)
                }}
                onKeyDown={event => {
                    if (event.key === 'Enter') setPage(value)
                }}
                onBlur={() => setPage(value)}
            />
            <IconButton
                size='sm' aria-label='Halaman Selanjutnya' colorScheme='blue'
                icon={<IconChevronRight />}
                isDisabled={page === pageTotal}
                onClick={() => {
                    setPage(page + 1)
                    setValue(page + 1)
                }}
            />
        </HStack>
    )
}