import {Container, Box, Heading} from "@chakra-ui/react";

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a full-stack software engineer from Sydney!
      </Box>

      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nam Dao
          </Heading>
          <p>Software Engineer (Loves to socialise - love a good drink - passionate about startups)</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page