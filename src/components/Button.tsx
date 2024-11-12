const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-body-color font-[600] text-secondary-color text-[2rem] lg:text-[2.8rem] rounded-xl lg:py-4 lg:px-16 px-8 py-3">
      {text}
    </button>
  );
};

export default Button;
