import { testimonies } from '../constants';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div className="grid gap-y-12 md:gap-10 lg:gap-32 md:grid-cols-3">
      {testimonies.map((test) => (
        <TestimonialCard
          key={test.id}
          username={test.username}
          msg={test.msg}
          rating={test.rating}
        />
      ))}
    </div>
  );
};

export default Testimonials;
