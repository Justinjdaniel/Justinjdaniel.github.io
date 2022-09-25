import HeaderImage from '../assets/sparrow.avif';

export const blogContent = {
  blogId: 1,
  description:
    'Lorem ipsum dolor sit amet, consectetur elit. Vivamus imperdiet ut quam sit amet vehicula.',
  headerContent: {
    coverImage: HeaderImage,
    type: 'article',
    publishedDate: '9/25/2022',
    tags: ['nature', 'animals'],
    title: 'Birds, Birds, Birds!',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur elit. Vivamus imperdiet ut quam sit amet vehicula.',
  },
  summary: [
    {
      title: 'Reading Time',
      value: 6,
      unit: 'mins',
    },
    {
      title: 'View',
      value: 1200,
      unit: 'views',
    },
    {
      title: 'Publish Date',
      value: 'Sep 25,',
      unit: '2022',
    },
  ],
  articleContent: [
    {
      stack: [
        'heading',
        'paragraph1',
        'image',
        'paragraph2',
        'blockquote',
        'paragraph3',
        'gallery',
        'paragraph4',
      ],
      heading: 'Heading One',
      paragraph1:
        'This is paragraph 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam. Integer mollis, urna accumsan tempor hendrerit, risus neque tincidunt neque, in aliquam elit eros quis tortor. ',
      image: {
        src: HeaderImage,
        alt: 'dummy',
        figCaption: 'Image caption',
      },
      blockquote:
        '"Be like the bird who, pausing in her flight awhile on boughs too slight, feels them give way beneath her, and yet sings, knowing she hath wings." -- Victor Hugo',
      paragraph2:
        'This is paragraph 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam. Integer mollis, urna accumsan tempor hendrerit, risus neque tincidunt neque, in aliquam elit eros quis tortor. ',
      gallery: [
        { src: HeaderImage, alt: 'Alt Image 1' },
        { src: HeaderImage, alt: 'Alt Image 2' },
        { src: HeaderImage, alt: 'Alt Image 3' },
        { src: HeaderImage, alt: 'Alt Image 4' },
      ],

      paragraph3:
        'This is paragraph 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam. Integer mollis, urna accumsan tempor hendrerit, risus neque tincidunt neque, in aliquam elit eros quis tortor. ',
      paragraph4:
        'This is paragraph 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet ut quam sit amet vehicula. Donec sit amet facilisis quam. Integer mollis, urna accumsan tempor hendrerit, risus neque tincidunt neque, in aliquam elit eros quis tortor. ',
    },
  ],
};
