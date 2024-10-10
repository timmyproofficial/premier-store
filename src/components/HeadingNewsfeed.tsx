import HeadingBorderSm from './HeadingBorderSm';
import HeadingPlain from './HeadingPlain';

const HeadingNewsfeed = () => {
  return (
    <div className="flex items-center justify-between">
      <HeadingPlain mainText="Follow us on Instagram" topText="Newsfeed" />
      <HeadingBorderSm mainText="Follow for more" link={'/'} />
    </div>
  );
};

export default HeadingNewsfeed;
