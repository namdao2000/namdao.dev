import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbMyDiary from '../public/images/projects/my-diary-eyecatch.png';
import thumbDaoOnboarding from '../public/images/projects/dao-onboarding-eyecatch.png';
import thumbSSO from '../public/images/projects/sso-eyecatch.png';

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="dao-onboarding"
            title="DAO Onboarding"
            thumbnail={thumbDaoOnboarding}
          >
            12 hours challenge - a mockup onboarding platform for DAO
            organization
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="sso" title="SSO" thumbnail={thumbSSO}>
            Serverless Single Sign-on (SSO) service implemented using CloudFlare
            workers
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="my-diary" title="My Diary" thumbnail={thumbMyDiary}>
            A diary note-taking web app with live publishing, live update and is
            always online
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from '../components/chakra';
