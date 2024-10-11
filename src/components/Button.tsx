const Button = ({ text }: { text: string }) => {
  return (
    <button className="bg-body-color font-[600] text-secondary-color text-[2rem] rounded-xl px-8 py-3">
      {text}
    </button>
  );
};

export default Button;
