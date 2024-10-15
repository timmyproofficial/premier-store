import userIcon from '../assets/user.svg';
import starIcon from '../assets/star-filled.svg';

interface Props {
  username: string;
  msg: string;
  rating: number;
}

const TestimonialCard = ({ username, msg, rating }: Props) => {
  return (
    <div className="bg-gray-accent rounded-[30px] border border-secondary-color p-12 flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <span className="bg-white-color w-[50px] h-[50px] rounded-full flex justify-center items-center">
          <img className="w-[25px] h-[25px]" src={userIcon} alt="User Icon" />
        </span>

        <div className="flex items-center gap-2">
          <span className="text-2xl">{rating}</span>
          <img className="w-8 h-8" src={starIcon} alt="Star Icon" />
        </div>
      </div>
      <p className="text-2xl">{msg}</p>
      <p className="text-2xl font-[600] text-black border-l-[3px] border-primary-color px-4 py-1">
        {username}
      </p>
    </div>
  );
};

export default TestimonialCard;
