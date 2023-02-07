import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { CATEGORIES } from "@/config"
import BookListPage from '@/components/page/bookListPage'
import Head from 'next/head'

type MyGetStaticProps = GetStaticProps<{ category: string, query: string }, { category: string }>

export const getStaticPaths = () => ({
    paths: CATEGORIES.map(e => ({
        params: {
            category: e.slug
        }
    })),
    fallback: false
})

export const getStaticProps: MyGetStaticProps = async ({ params }) => {
    const category = params?.category
    const categoryInfo = CATEGORIES.filter(e => e.slug === category)[0]

    if (!category) return { notFound: true }
    const { name, query } = categoryInfo
    return {
        props: { category: name, query }
    }
}

type CategoryProps = InferGetStaticPropsType<typeof getStaticProps>

export default function Category({ category, query }: CategoryProps) {
    return (
        <>
            <Head>
                <title>Kategori buku "{category}" | BUKUTI</title>
            </Head>
            <BookListPage
                query={query}
                headingText={'Kategori Buku ' + category}
            />
        </>
    )
}
