import HeadingBorderLg from './HeadingBorderLg';
import HeadingBorderLink from './HeadingBorderLink';

const AboutDetails = () => {
  return (
    <div className="flex flex-col">
      <HeadingBorderLg
        mainText="About Our Store"
        classes="mb-14 self-end md:self-start lg:self-end"
      />

      <p className="text-[1.8rem] mb-5">
        Lorem ipsum, this is a dummy test. The primary objective of this project
        is to create a user-friendly Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Nulla, molestiae reiciendis eligendi officiis quidem
        laborum eaque placeat rerum uouou website where clients can seamlessly
        book appointments and make secure payments.{' '}
      </p>
      <HeadingBorderLink
        mainText="Read More"
        link={'/'}
        classes="self-start md:self-end lg:self-start"
      />
    </div>
  );
};

export default AboutDetails;
