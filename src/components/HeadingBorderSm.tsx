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
          className={`${
            bold ? `font-[500] text-[4rem]` : `font-[400] text-[3.6rem]`
          } text-link-color`}
        >
          {mainText}
        </p>
        <div
          className={`${
            bold ? `mt-[-8px]` : `mt-[-5px]`
          } bg-secondary-color w-[82%] border border-link-color self-end`}
        ></div>
      </Link>
    </>
  );
};

export default HeadingBorderSm;
