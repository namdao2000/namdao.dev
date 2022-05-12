import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="My Diary">
    <Container>
      <Title>
        Serverless SSO Service <Badge>2022</Badge>
      </Title>
      <P>
        This is a Single sign-on (SSO) OAuth service that allows you to signup,
        login and verify Json Web Tokens (JWT) for your users.
        <br />
        <br />
        Its powered by Bcryptjs for password hashing, Jose for JWT and
        Worktop&apos;s Router for routing HTTP requests. Due to the limitation
        of the worker&apos;s 10ms cpu limit, passwords are only hashed up to 5
        salt rounds (The recommended is 10).
        <br />
        <br />
        Users info are stored in Workers KV, a globally distributed, eventually
        consistent key value store.
        <br />
        <br />
        This costs $0 to maintain, due to Cloudflare&apos;s generous workers
        free teir (100,000 req/day). Noice 😎
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>API Documentation</Meta>
          <Link
            href="https://sso-api-doc.namdao.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sso-api-doc.namdao.dev/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>API Url</Meta>
          <Link
            href="https://sso.namdao.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sso.namdao.dev/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/namdao2000/sso"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/namdao2000/sso
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Any computer device with a browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Cloudflare Workers, Worktop Router</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/sso-eyecatch.png" alt="sso service" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
