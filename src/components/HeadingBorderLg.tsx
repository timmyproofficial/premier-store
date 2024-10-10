const HeadingBorderLg = ({ mainText }: { mainText: string }) => {
  return (
    <div className="inline-flex flex-col items-start">
      <h2 className="font-[700]">{mainText}</h2>
      <div className="bg-secondary-color w-[75%] mt-[-10px] border-[6px] border-secondary-color self-end"></div>
    </div>
  );
};

export default HeadingBorderLg;
