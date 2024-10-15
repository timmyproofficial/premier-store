import HeadingBorderLink from './HeadingBorderLink';

interface Props {
  mainText: string;
  topText?: string;
}

const HeadingDiscount = ({ mainText, topText }: Props) => {
  return (
    <div>
      <div className="text-right">
        {topText && (
          <p className="text-gray-color text-[2.25rem] top-text">{topText}</p>
        )}
        <h1 className={`font-[${topText ? 600 : 700}] uppercase`}>
          {mainText}
        </h1>
        <HeadingBorderLink mainText="Grab it Now" link={'/'} />
      </div>
    </div>
  );
};

export default HeadingDiscount;
