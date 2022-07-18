import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta, MobileImage } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="Crypto Alerts">
    <Container>
      <Title>
        Crypto Alerts <Badge>2022</Badge>
      </Title>
      <P>
        While building Crypto accounting software for companies, I`ve built a
        notification system that alerts you when the value of Crypto goes up or
        down a certain threshold. No need to go back and forth to check prices.
        Every info will be delivered via text/email!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://cryptoalerts.coinbooks.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://cryptoalerts.coinbooks.xyz
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Product Hunt</Meta>
          <Link
            href="https://www.producthunt.com/posts/crypto-price-alert-by-coinbooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.producthunt.com/posts/crypto-price-alert-by-coinbooks
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/namdao2000/crypto-alerting.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/namdao2000/crypto-alerting.xyz
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any device with a browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, React, Prisma, MongoDB</span>
        </ListItem>
      </List>
      <WorkImage
        src="/images/projects/crypto-alerts-eyecatch.png"
        alt="crypto-alerts"
      />
      <WorkImage
        src="/images/projects/crypto-alerts-1.png"
        alt="crypto-alerts"
      />
      <SimpleGrid columns={2} spacing={4} mb={4}>
        <MobileImage
          src="/images/projects/crypto-alerts-2.png"
          alt="crypto-alerts"
        />
        <MobileImage
          src="/images/projects/crypto-alerts-3.png"
          alt="crypto-alerts"
        />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
