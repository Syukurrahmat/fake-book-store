import { ChakraProvider } from '@chakra-ui/react';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout/layout';
import MyContextProvider from '@/lib/context/myContext';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<DefaultSeo {...SEO} />
			<ChakraProvider>
				<MyContextProvider>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</MyContextProvider>
			</ChakraProvider>
		</>
	);
}
