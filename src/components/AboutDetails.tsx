import HeadingBorderLg from './HeadingBorderLg';
import HeadingBorderLink from './HeadingBorderLink';

const AboutDetails = () => {
  return (
    <div className="flex flex-col">
      <HeadingBorderLg mainText="About Our Store" classes="mb-14 self-end" />

      <p className="mb-3">
        Lorem ipsum, this is a dummy test. The primary objective of this project
        is to create a user-friendly website where clients can seamlessly book
        appointments and make secure payments.{' '}
      </p>
      <HeadingBorderLink mainText="Read More" link={'/'} classes="self-start" />
    </div>
  );
};

export default AboutDetails;
