import NewArrivals from '../components/NewArrivals';
import ShopSidebar from '../components/shop/ShopSidebar';

import ShopContainer from '../components/ShopContainer';

const ShopPage = () => {
  return (
    <section className="grid grid-cols-[300px_1fr]">
      <ShopSidebar />
      <ShopContainer>
        <NewArrivals />
      </ShopContainer>
    </section>
  );
};

export default ShopPage;
