import BookListPage from '@/components/page/bookListPage';
import { CATEGORIES } from '@/config';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
type MyGetStaticProps = GetStaticProps<
	{ category: string; query: string; slug: string },
	{ category: string }
>;

export const getStaticPaths = () => ({
	paths: CATEGORIES.map((e) => ({
		params: {
			category: e.slug,
		},
	})),
	fallback: false,
});

export const getStaticProps: MyGetStaticProps = async ({ params }) => {
	const category = params?.category;
	const categoryInfo = CATEGORIES.filter((e) => e.slug === category)[0];

	if (!category) return { notFound: true };
	const { name, query } = categoryInfo;
	return {
		props: { slug: category, category: name, query },
	};
};

type CategoryProps = InferGetStaticPropsType<typeof getStaticProps>;

export default function Category({ category, query, slug }: CategoryProps) {
	const url = `https://bukuti.vercel.app/category/${slug}`;
	const title = `Kategori ${category}`;
	const description = `Temukan buku teknologi terbaik dalam kategori ${category} hanya di BukuTi.`;

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
					type: 'website',
					locale: 'id_ID',
					images: [
						{
							url: 'https://bukuti.vercel.app/og-default.png',
							width: 1200,
							height: 630,
							alt: `Kategori ${category} - BukuTi`,
						},
					],
				}}
			/>
			<BookListPage
				query={query}
				headingText={'Kategori Buku ' + category}
			/>
		</>
	);
}
