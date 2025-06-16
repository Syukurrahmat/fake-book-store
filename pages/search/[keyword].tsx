import { GetServerSideProps } from 'next';
import { IconBook } from '@tabler/icons-react';
import BookListPage from '@/components/page/bookListPage';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

type ISearch = { keyword: string };
type MyGetServerSideProps = GetServerSideProps<ISearch, ISearch>;

export const getServerSideProps: MyGetServerSideProps = async ({ params }) => {
	return { props: { keyword: String(params?.keyword) } };
};

export default function Search({ keyword }: ISearch) {
	const url = `https://bukuti.vercel.app/search?q=${encodeURIComponent(
		keyword
	)}`;
	const title = `Hasil pencarian untuk "${keyword}"`;
	const description = `Temukan buku teknologi terbaik yang berhubungan dengan "${keyword}" hanya di BukuTi.`;

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
					images: [
						{
							url: 'https://bukuti.vercel.app/og-default.png',
							width: 1200,
							height: 630,
							alt: 'Hasil pencarian di BukuTi',
						},
					],
				}}
			/>
			<BookListPage
				query={keyword}
				headingText={'Hasil pencairan "' + keyword + '"'}
			/>
		</>
	);
}
