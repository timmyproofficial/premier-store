import BlockWhite from './BlockWhite';
import HeadingNewsfeed from './HeadingNewsfeed';
import NewsFeed from './NewsFeed';

const NewsFeedBlock = () => {
  return (
    <BlockWhite>
      <HeadingNewsfeed />
      <NewsFeed />
    </BlockWhite>
  );
};

export default NewsFeedBlock;
