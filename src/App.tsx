import HeadingDiscount from './components/HeadingDiscount';
import { HomePage } from './pages';

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <HeadingDiscount
        mainText="20% Discount For this week only"
        topText="Limited Offer"
      />
    </div>
  );
}

export default App;
