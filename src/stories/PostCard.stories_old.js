// src/components/PostCard.stories.js
import React from 'react';
// import PostCard from './PostCard';

export default {
//   title: 'Components/PostCard',
  component: PostCard,
};

// const Template = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'My WordPress Post Title',
  excerpt: 'This is a sample excerpt from my WordPress post.',
  featuredImage: {
    node: {
      sourceUrl: 'https://example.com/image.jpg',
      altText: 'Sample Image',
    },
  },
};