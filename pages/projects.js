import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import thumbInkdrop from '../public/images/projects/inkdrop_eyecatch.png';

const Projects = () => (
  <Layout title="Projects">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        {/*<Section>*/}
        {/*  <WorkGridItem*/}
        {/*    id="walknote"*/}
        {/*    title="walknote"*/}
        {/*    thumbnail={thumbWalknote}*/}
        {/*  >*/}
        {/*    Music recommendation app for iOS*/}
        {/*  </WorkGridItem>*/}
        {/*</Section>*/}
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Projects;
export { getServerSideProps } from '../components/chakra';
