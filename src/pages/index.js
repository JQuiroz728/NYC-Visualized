import React from 'react';

import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const img_set = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    title: 'People',
    desc: 'Who we are. Demographics of the citizens of the greatest city in the world',
    demoLink: 'https://public.flourish.studio/visualisation/2592582/',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    title: 'COVID-19',
    desc: 'Daily Death Tolls in New York City',
    demoLink: 'https://public.flourish.studio/visualisation/2591827/',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    title: 'Neighborhoods',
    desc: 'Think your neighborhood is the best? Check out the most popular neighborhoods by population since 2000',
    demoLink: 'https://public.flourish.studio/visualisation/2291482/',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    title: 'TLC',
    desc: 'A peek into the evolution of taxi service and ride-sharing in New York City',
    demoLink: 'https://public.flourish.studio/visualisation/2594112/',
  },
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    title: 'Boroughs',
    desc: 'Progression of the most popular borough in NYC by population, from 1950 up to 2040 (estimate)',
    demoLink: 'https://public.flourish.studio/visualisation/2290445/',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    title: 'Health',
    desc: 'Want to stay healthy during quarantine? Find a farmers market near you',
    demoLink: 'https://public.flourish.studio/visualisation/2592895/',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    title: 'Meals',
    desc: 'During times like these, being hungry should not be an issue. Find a free meal today',
    demoLink: 'https://public.flourish.studio/visualisation/2593863/',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    title: 'Kids',
    desc: 'The top 3 most popular boy and girl baby names in New York City',
    demoLink: 'https://public.flourish.studio/visualisation/2591389/',
  },
  {
    src: require('../assets/images/fulls/09.jpg'),
    thumbnail: require('../assets/images/thumbs/09.jpg'),
    title: 'Crime',
    desc: 'A look into the crime and arrests this year in New York City',
    demoLink: 'https://public.flourish.studio/visualisation/2593357/',
  },
];
const IndexPage = () => (
  <Layout>
    <Gallery images={img_set} />
  </Layout>
);

export default IndexPage;
