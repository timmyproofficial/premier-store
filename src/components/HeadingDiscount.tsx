import HeadingBorderLink from './HeadingBorderLink';

interface Props {
  mainText: string;
  topText?: string;
}

const HeadingDiscount = ({ mainText, topText }: Props) => {
  return (
    <div className="flex flex-col gap-8 items-end">
      {topText && (
        <p className="text-gray-color text-[2.25rem] top-text">{topText}</p>
      )}
      <h1
        className={`font-[${
          topText ? 600 : 700
        }] text-[4rem] md:text-[6rem] uppercase`}
      >
        {mainText}
      </h1>
      <HeadingBorderLink mainText="Grab it Now" link={'/'} />
    </div>
  );
};

export default HeadingDiscount;
