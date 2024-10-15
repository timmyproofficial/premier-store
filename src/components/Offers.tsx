import { offers } from '../constants';
import Offer from './offer';

const Offers = () => {
  return (
    <div className="bg-primary-color grid gap-y-20 md:grid-cols-2 lg:grid-cols-4 items-end px-24 py-6 min-h-[160px]">
      {offers.map((offer) => (
        <Offer key={offer.id} heading={offer.heading} text={offer.text} />
      ))}
    </div>
  );
};

export default Offers;
