import { Link } from 'react-router-dom';

const HeadingBorderSm = ({
  mainText,
  link,
  bold,
}: {
  mainText: string;
  link?: string;
  bold?: boolean;
}) => {
  return (
    <>
      <Link to={link!} className="inline-flex flex-col items-start">
        <p
          className={`font-[${bold ? 500 : 400}] text-[${
            bold ? '2.5rem' : '2.25rem'
          }] text-link-color`}
        >
          {mainText}
        </p>
        <div
          className={`bg-secondary-color w-[82%] mt-[${
            bold ? '-8px' : '-5px'
          }] border border-link-color self-end`}
        ></div>
      </Link>
    </>
  );
};

export default HeadingBorderSm;
