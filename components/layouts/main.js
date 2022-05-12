import Head from 'next/head';
import dynamic from 'next/dynamic';
import { Box, Container } from '@chakra-ui/react';
import Footer from '../footer';
import VoxelDogLoader from '../voxel-dog-loader';
import Navbar from '../navbar';

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />,
});

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Nam Dao's homepage" />
        <meta name="author" content="Nam Dao" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Takuya Matsuyama" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.namdao.dev/card.png" />
        <meta property="og:site_name" content="Nam Dao" />
        <meta name="og:title" content="Nam Dao" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.namdao.dev/card.png" />
        <title>Nam Dao - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <LazyVoxelDog />

        {children}

        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
