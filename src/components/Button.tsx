const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-body-color font-[600] text-secondary-color text-[2rem] lg:text-[3.2rem] rounded-xl lg:py-8 lg:px-16 px-8 py-3">
      {text}
    </button>
  );
};

export default Button;
