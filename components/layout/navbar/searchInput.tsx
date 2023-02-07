import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import { IconSearch, IconX } from "@tabler/icons-react"
import { useRouter } from "next/router"
import { useState } from 'react'

export default function SearchInput() {
    const router = useRouter()
    const devaultValue = router.query.keyword ? String(router.query.keyword) : ''
    const [value, setValue] = useState(devaultValue)

    return (
        <InputGroup maxW='lg'>
            <InputLeftElement
                pointerEvents='none'
                color='gray.300'
            >
                <IconSearch />
            </InputLeftElement>
            <Input
                placeholder='Cari buku ...'
                value={value}
                onChange={e => setValue(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter' && value.trim()) router.push('/search/' + value)
                }}
            />
            {value.trim() &&
                <InputRightElement
                    color='gray.300'
                    cursor='pointer'
                    onClick={() => setValue('')}
                >
                    <IconX />
                </InputRightElement>
            }
        </InputGroup>
    )
}