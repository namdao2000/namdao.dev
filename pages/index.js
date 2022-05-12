import NextLink from 'next/link';
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Paragraph from '../components/paragraph';
import { BioSection, BioYear } from '../components/bio';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io5';
import Image from 'next/image';

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
});

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Passionate web developer from Sydney, Australia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nam Dao
          </Heading>
          <p>Full-Stack Software Engineer at Eucalyptus</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/nam.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Hi, I&apos;m Nam, from Vietnam. I am currently living in Sydney
          Australia, working on improving the telehealth scene in Australia at
          Eucalyptus.
          <br />
          But who am I? I am a tech-savvy software engineer with a flair of
          leadership. At heart, I have a passion for building things - web apps,
          APIs, automated CI pipeline ... if it&apos;s tech, you name it! And
          I&apos;ll deliver. With a plethora of experience in the full-stack
          development space, I am always down to build cool new things 🚀
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2000</BioYear>
          Born in Hanoi, Vietnam
        </BioSection>
        <BioSection>
          <BioYear>2004</BioYear>
          Relocated to Japan, Kusatsu (草津町)
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Relocated to Australia, Gold Coast
        </BioSection>
        <BioSection>
          <BioYear>2015</BioYear>
          Started Risen Network, a gaming community based in Los Angeles and
          Sydney for Unturned. Eventually, I grew it to 3400 members on the{' '}
          <Link
            href="https://discord.gg/RXcGyWd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discord
          </Link>{' '}
          and raised $50k via the e-commerce site.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Worked at Supercool Asia Pacific
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Telstra
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Dropped out of The University of Sydney after perusing my Bachelors of
          Advanced Computing (Software Development) for 3 years.
        </BioSection>
        <BioSection>
          <BioYear>2021 to present</BioYear>
          Working at Eucalyptus
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Things I ♥
        </Heading>
        <Paragraph>
          Music, Netflix, Gym, Walking my dog, Any pets, Nightout in the city
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link
              href="https://github.com/namdao2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @namdao2000
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/namdao-au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @namdao-au
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
);

export default Home;
export { getServerSideProps } from '../components/chakra';
