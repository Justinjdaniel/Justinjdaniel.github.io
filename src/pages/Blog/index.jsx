import { Box, Button, Container, Icon } from '@chakra-ui/react';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';
import Blockquote from './Blockquote';
import BlogGallery from './BlogGallery';
import BlogHeading from './BlogHeading';
import BlogImage from './BlogImage';
import BlogParagraph from './BlogParagraph';
import HeaderImageCard from './HeaderImageCard';
import SummaryCard from './SummaryCard';

const Blogs = () => {
  const location = useLocation();
  const blog = location.state;

  return (
    <Container maxW='1000px' px='100px' py='25px'>
      <Button
        as={Link}
        to='/blogs'
        mb='2'
        alignItems='center'
        gap='2'
        variant='link'
      >
        <Icon as={IoArrowBack} />
        Back
      </Button>
      <article w='full'>
        <HeaderImageCard headerContent={blog.headerContent} />
        <SummaryCard summary={blog.summary} />
        <MainArticle articleContent={blog.articleContent} />
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
