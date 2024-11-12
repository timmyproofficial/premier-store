import HeadingBorderLink from './HeadingBorderLink';
import HeadingPlain from './HeadingPlain';

const HeadingNewsfeed = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <HeadingPlain mainText="Follow us on Instagram" topText="Newsfeed" />
      <HeadingBorderLink mainText="Follow for more" link={'/'} />
    </div>
  );
};

export default HeadingNewsfeed;
