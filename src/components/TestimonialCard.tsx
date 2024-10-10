import userIcon from '../assets/user.svg';
import starIcon from '../assets/star-filled.svg';

const TestimonialCard = () => {
  return (
    <div className="bg-gray-accent rounded-[30px] border border-secondary-color p-12 m-28 max-w-[300px] flex flex-col gap-12">
      <div className="flex justify-between items-center">
        <span className="bg-white-color w-[50px] h-[50px] rounded-full flex justify-center items-center">
          <img className="w-[25px] h-[25px]" src={userIcon} alt="User Icon" />
        </span>

        <div className="flex items-center gap-2">
          <span className="text-2xl">5</span>
          <img className="w-8 h-8" src={starIcon} alt="Star Icon" />
        </div>
      </div>
      <p className="text-2xl">
        Lorem ipsum, this is a dummy test. The primary objective of this project
        is to create a user-friendly website where clients can seamlessly book
        appointments and make secure payments.
      </p>
      <p className="text-2xl font-[600] text-black border-l-[3px] border-primary-color px-4 py-1">
        John Doe
      </p>
    </div>
  );
};

export default TestimonialCard;
