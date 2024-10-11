import AboutDetails from './AboutDetails';
import AboutImgCard from './AboutImgCard';
import BlockWhite from './BlockWhite';

const AboutBlock = () => {
  return (
    <BlockWhite>
      <div className="grid gap-32 md:grid-cols-2">
        <AboutImgCard />
        <AboutDetails />
      </div>
    </BlockWhite>
  );
};

export default AboutBlock;
