import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, WorkImage, Meta } from '../../components/work';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Work = () => (
  <Layout title="My Diary">
    <Container>
      <Title>
        My Diary <Badge>2021</Badge>
      </Title>
      <P>
        A Diary note-taking web app with live publish, live update and always
        online
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href="https://diary.namdao.dev/public/diary"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://diary.namdao.dev
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Github</Meta>
          <Link
            href="https://github.com/namdao2000/my-diary"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/namdao2000/my-diary
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

      <WorkImage src="/images/projects/my-diary-eyecatch.png" alt="my-diary" />
      <WorkImage src="/images/projects/my-diary-1.png" alt="my-diary" />
    </Container>
  </Layout>
);

export default Work;
export { getServerSideProps } from '../../components/chakra';
