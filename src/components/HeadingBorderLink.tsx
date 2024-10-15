import { Link } from 'react-router-dom';

const HeadingBorderLink = ({
  mainText,
  link,
  bold,
  classes,
}: {
  mainText: string;
  link: string;
  bold?: boolean;
  classes?: string;
}) => {
  return (
    <>
      <Link
        to={link!}
        className={`inline-flex flex-col items-start ${classes}`}
      >
        <p
          className={`${
            bold
              ? `font-[500] text-[4rem]`
              : `font-[400] text-[1.6rem] md:text-[2.4rem]`
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

export default HeadingBorderLink;
