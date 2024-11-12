interface Props {
  mainText: string;
  topText?: string;
}

const HeadingPlain = ({ mainText, topText }: Props) => {
  return (
    <div className="">
      {topText && (
        <p className="text-gray-color text-[1.6rem] md:text-[2.25rem] mb-[-5px] md:mb-[-10px] top-text">
          Newsfeed
        </p>
      )}
      <h3
        className={`font-[${
          topText ? 600 : 700
        }] text-[1.8rem] md:text-[3.2rem]`}
      >
        {mainText}
      </h3>
    </div>
  );
};

export default HeadingPlain;
