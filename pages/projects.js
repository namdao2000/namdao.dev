import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbMyDiary from '../public/images/projects/my-diary-eyecatch.png';
import thumbDaoOnboarding from '../public/images/projects/dao-onboarding-eyecatch.png';
import cryptoAlerts from '../public/images/projects/crypto-alerts-eyecatch.png';
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
            id="crypto-alerts"
            title="Crypto Alerts"
            thumbnail={cryptoAlerts}
          >
            2.5 Day shippit challenge - a crypto currency alerting tool with
            email/SMS functionality.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="dao-onboarding"
            title="DAO Onboarding"
            thumbnail={thumbDaoOnboarding}
          >
            12 hour challenge - a mockup onboarding platform for DAO
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
            A google doc like diary note-taking web app with publishing and
            auto-save
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from '../components/chakra';
