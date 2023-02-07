import { Img, Flex, AspectRatio, Grid, Image, Box, HStack, Heading, Text, Center } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper';
import { IconBooks } from '@tabler/icons-react';
import bgImage from '@/public/image/bg.jpg'

const HEROES_IMAGE = [
    'https://i.postimg.cc/Z51S5SLJ/1.png',
    'https://i.postimg.cc/4xKGGdV8/2.png',
    'https://i.postimg.cc/X71WtFGG/3.png'
]


export default function Hero() {
    return (
        <Grid
            w='full'
            templateColumns={{ base: '1fr', lg: '3fr 1fr' }}
            templateRows={{ base: '6fr 4fr', lg: '1fr' }}
            gap='4'
        >
            <AspectRatio ratio={936 / 340}
                borderRadius='md'
                boxShadow='md'
                overflow='hidden'
            >
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false
                    }}
                    modules={[Autoplay]}

                >
                    {HEROES_IMAGE.map((e, i) => (
                        <SwiperSlide key={i}>
                            <Img  h='full' objectFit='cover' alt='hero image' src={e} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </AspectRatio>
            <Center
                flexDirection='column'
                alignItems='start'
                boxShadow='md'
                bgImg='https://i.postimg.cc/VvxjHHGc/pexels-ann-h-1762851-3-1-1.png'
                bgRepeat='no-repeat'
                bgSize='cover'
                bgPosition='center'
                px='6'
                py='4'
                borderRadius='md'
            >
                <HStack color='blue.600'  >
                    <IconBooks size='40' />
                    <Heading size='lg' >BUKUTI</Heading>
                </HStack>
                <Text color='gray.50' fontWeight='medium'>
                    Cari temukan dan beli dengan mudah dan cerdas
                </Text>
            </Center>
        </Grid>
    )
}