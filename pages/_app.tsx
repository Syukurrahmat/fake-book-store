import { ChakraProvider } from '@chakra-ui/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/layout'
import MyContextProvider from '@/lib/context/myContext'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <MyContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MyContextProvider>
        </ChakraProvider>
    )
}
