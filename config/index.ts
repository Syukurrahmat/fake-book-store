import programmingImage from '@/public/image/category/programming.png'
import aiImage from '@/public/image/category/ai.png'
import cloudComputingImage from '@/public/image/category/cloud-computing.png'
import dataScienceImage from '@/public/image/category/data-science.png'
import itBussinesImage from '@/public/image/category/it-bussines.png'
import databaseImage from '@/public/image/category/database.png'


export const CATEGORIES = [
    {
        name: 'Pemrograman',
        image: programmingImage,
        slug: 'pemrograman',
        query : 'programming'
    },
    {
        name: 'Database',
        image: databaseImage,
        slug: 'database',
        query : 'database'
    },
    {
        name: 'AI',
        image: aiImage,
        slug: 'AI',
        query : 'artificial intelligence'
    },
    {
        name: 'Bisnis dan IT',
        image: itBussinesImage,
        slug: 'bisnis-dan-IT',
        query : 'it bussiness'
    },
    {
        name: 'Komputasi Awan',
        image: cloudComputingImage,
        slug: 'komputasi-awan',
        query : 'cloud computing'
    },
    {
        name: 'Data Science',
        image: dataScienceImage,
        slug: 'data-science',
        query : 'data science'
    },

]
