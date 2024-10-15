const HeadingBorderLg = ({
  mainText,
  classes,
}: {
  mainText: string;
  classes?: string;
}) => {
  return (
    <div className={`inline-flex flex-col ${classes}`}>
      <h2 className="font-[700]">{mainText}</h2>
      <div className="bg-secondary-color w-[75%] border-[3px] border-secondary-color self-end"></div>
    </div>
  );
};

export default HeadingBorderLg;
