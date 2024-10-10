interface Props {
  mainText: string;
}

const HeadingPlain = ({ mainText }: Props) => {
  return <h3 className="font-[700]">{mainText}</h3>;
};

export default HeadingPlain;
