interface Props {
  mainText: string;
  topText?: string;
}

const HeadingPlain = ({ mainText, topText }: Props) => {
  return (
    <div>
      {topText && (
        <p className="text-gray-color text-[2.25rem] mb-[-16px] top-text">
          Newsfeed
        </p>
      )}
      <h3 className={`font-[${topText ? 600 : 700}]`}>{mainText}</h3>;
    </div>
  );
};

export default HeadingPlain;
