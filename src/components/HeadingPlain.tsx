interface Props {
  mainText: string;
  topText?: string;
}

const HeadingPlain = ({ mainText, topText }: Props) => {
  return (
    <div className="lg:mb-10">
      {topText && (
        <p className="text-gray-color text-[2.25rem] mb-[-10px] top-text">
          Newsfeed
        </p>
      )}
      <h3 className={`font-[${topText ? 600 : 700}]`}>{mainText}</h3>;
    </div>
  );
};

export default HeadingPlain;
