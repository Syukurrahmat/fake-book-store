import {
	AspectRatio,
	Container,
	Heading,
	HStack,
	Image,
	VStack,
	Grid,
	GridItem,
	Center,
} from '@chakra-ui/react';
import { IconBook2 } from '@tabler/icons-react';
import { GetServerSideProps, InferGetStaticPropsType } from 'next';

import BookList from '@/components/common/bookList';

import { getDetailBook, useRelatedBookSWR } from '@/services/swr';
import BookDetail from '@/components/page/book/bookDetail';
import BookInfo from '@/components/page/book/bookInfo';
import { NextSeo } from 'next-seo';

type MyGetServerSideProps = GetServerSideProps<
	{ data: DetailBook; slug: string },
	{ isbn: string }
>;

export const getServerSideProps: MyGetServerSideProps = async ({ params }) => {
	const isbn = String(params?.isbn).split('-').at(-1);

	if (!isbn) return { notFound: true };

	return getDetailBook(isbn)
		.then((data) => ({ props: { data, slug: params!.isbn } }))
		.catch(() => ({ notFound: true }));
};

 
export default function Book({ data, slug }: { data: DetailBook; slug: string }) {
	const { title, image , authors} = data;
	const { data: relateBookData } = useRelatedBookSWR(title);

	const url = `https://bukuti.vercel.app/book/${slug}`;
	const description = `${title} oleh ${authors}`;

	return (
		<>
			<NextSeo
				title={title}
				description={description}
				canonical={url}
				openGraph={{
					title,
					description,
					url,
					site_name: 'BukuTi',
					type: 'book',
					locale: 'id_ID',
					images: [
						{
							url: 'https://bukuti.vercel.app/og-default.png',
							width: 1200,
							height: 630,
							alt: `Buku ${title}`,
						},
					],
				}}
			/>

			<Container
				maxW="container.lg"
				as={Grid}
				gap="8"
				pt="30"
				gridTemplateColumns={{ base: '1fr', md: '2fr 3fr' }}
			>
				<GridItem alignSelf="center" gap="8">
					<AspectRatio
						ratio={6 / 7}
						boxShadow="xs"
						borderRadius="md"
						bgColor="gray.50"
						overflow="hidden"
					>
						<Image
							alt={'Buku' + title}
							src={image}
							objectFit="cover"
							transition="all 200ms"
							_hover={{
								transform: 'scale(1.1)',
							}}
						/>
					</AspectRatio>
				</GridItem>

				<GridItem as={VStack} align="start" spacing="3" py="2">
					<BookInfo data={data} />
					<BookDetail data={data} />
				</GridItem>
			</Container>

			<Container maxW="container.xl" mt="4">
				<HStack spacing="4" mb="4">
					<Center bg="blue.100" color="blue.600" p="2" borderRadius="base">
						<IconBook2 size="28" />
					</Center>
					<Heading size="md">Buku Terkait</Heading>
				</HStack>
				<BookList data={relateBookData?.books} dataLengthPredict={9} />
			</Container>
		</>
	);
}
