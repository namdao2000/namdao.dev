import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="DAO Onboarding">
    <Container>
      <Title>
        DAO Onboarding <Badge>2022</Badge>
      </Title>
      <P>
        This was a 12 hour challenge, to build a mockup onboarding platform for
        DAO organization
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://dao-onboarding.namdao.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dao-onboarding.namdao.dev
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/namdao2000/dao-onboarding"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/namdao2000/dao-onboarding
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any computer device with a browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Express, React</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/projects/dao-onboarding-1.png"
        alt="dao-onboarding"
      />
      <WorkImage
        src="/images/projects/dao-onboarding-eyecatch.png"
        alt="dao-onboarding"
      />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
