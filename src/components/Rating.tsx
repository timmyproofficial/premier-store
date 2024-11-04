import starIcon from '../assets/star-filled.svg';

const Rating = ({ size, classes }: { size: number; classes?: string }) => {
  return (
    <span className={`flex gap-5 ${classes}`}>
      <img className={`w-${size}`} src={starIcon} alt="Star Icon" />
      <img className={`w-${size}`} src={starIcon} alt="Star Icon" />
      <img className={`w-${size}`} src={starIcon} alt="Star Icon" />
      <img className={`w-${size}`} src={starIcon} alt="Star Icon" />
      <img className={`w-${size}`} src={starIcon} alt="Star Icon" />
    </span>
  );
};

export default Rating;
