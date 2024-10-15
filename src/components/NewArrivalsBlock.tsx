import BlockWhite from './BlockWhite';
import HeadingPlain from './HeadingPlain';
import NewArrivals from './NewArrivals';

const NewArrivalsBlock = () => {
  return (
    <BlockWhite>
      <div className="pt-32">
        <HeadingPlain mainText="New Arrivals" />
        <NewArrivals />
      </div>
    </BlockWhite>
  );
};

export default NewArrivalsBlock;
