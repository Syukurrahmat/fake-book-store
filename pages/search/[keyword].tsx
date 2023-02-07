import { GetServerSideProps } from 'next'
import { IconBook } from '@tabler/icons-react'
import BookListPage from '@/components/page/bookListPage'
import Head from 'next/head'

type ISearch = { keyword: string }
type MyGetServerSideProps = GetServerSideProps<ISearch, ISearch>

export const getServerSideProps: MyGetServerSideProps = async ({ params }) => {
    return { props: { keyword: String(params?.keyword) } }
}

export default function Search({ keyword }: ISearch) {

    return (
        <>
            <Head>
                <title>Pencarian "{keyword}" | BUKUTI</title>
            </Head>
            <BookListPage
                query={keyword}
                headingText={'Hasil pencairan "' + keyword + '"'}
            />
        </>
    )
}