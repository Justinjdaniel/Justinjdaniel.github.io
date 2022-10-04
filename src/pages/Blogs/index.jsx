import { Box, Container } from '@chakra-ui/react';
import React from 'react';
import blogs from '../../database/blogs';
import Blockquote from './Blockquote';
import BlogGallery from './BlogGallery';
import BlogHeading from './BlogHeading';
import BlogImage from './BlogImage';
import BlogParagraph from './BlogParagraph';
import HeaderImageCard from './HeaderImageCard';
import SummaryCard from './SummaryCard';

const Blogs = () => {
  return (
    <Container maxW='1000px' p='100px'>
      <article w='full'>
        <HeaderImageCard headerContent={blogs[0].headerContent} />
        <SummaryCard summary={blogs[0].summary} />
        <MainArticle articleContent={blogs[0].articleContent} />
      </article>
    </Container>
  );
};

export default Blogs;

const MainArticle = ({ articleContent }) => {
  const handleContent = (section, element) => {
    if (element.startsWith('heading'))
      return <BlogHeading heading={section[element]} />;
    if (element.startsWith('paragraph'))
      return <BlogParagraph text={section[element]} />;
    if (element.startsWith('image'))
      return <BlogImage image={section[element]} />;
    if (element.startsWith('gallery'))
      return <BlogGallery gallery={section[element]} />;
    if (element.startsWith('blockquote'))
      return <Blockquote content={section[element]} />;
  };

  return (
    <Box w='full' mt='50px' pb='50px' lineHeight='1.75'>
      {articleContent.map((section) => (
        <React.Fragment key={section}>
          {section.stack.map((element) => (
            <React.Fragment key={element}>
              {handleContent(section, element)}
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </Box>
  );
};
