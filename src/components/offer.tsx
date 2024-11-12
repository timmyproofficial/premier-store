const Offer = ({ heading, text }: { heading: string; text: string }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-[700] text-white">{heading}</p>
      <small className="text-white-accent text-[1.5rem] md:text-[1.8rem] mt-[-8px]">
        {text}
      </small>
    </div>
  );
};

export default Offer;
