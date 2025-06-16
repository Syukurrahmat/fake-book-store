import { Container, VStack } from '@chakra-ui/react';

import Hero from '@/components/page/home/hero';
import CategoryList from '@/components/page/home/categoryList';
import NewReleaseBooks from '@/components/page/home/newReleaseBooks';
import Head from 'next/head';

export default function Home() {
	return (
		<Container
			maxW="container.xl"
			mt="6"
			as={VStack}
			spacing="10"
			minH="100vh"
		>
			<Hero />
			<CategoryList />
			<NewReleaseBooks />
		</Container>
	);
}
