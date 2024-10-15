import BlockWhite from './BlockWhite';
import HeadingPlain from './HeadingPlain';
import NewArrivals from './NewArrivals';

const NewArrivalsBlock = () => {
  return (
    <BlockWhite>
      <HeadingPlain mainText="New Arrivals" />
      <NewArrivals />
    </BlockWhite>
  );
};

export default NewArrivalsBlock;
