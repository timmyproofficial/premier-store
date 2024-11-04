import product1 from '../../assets/arrival4.png';
import product2 from '../../assets/arrival3.png';

const SimilarProduct = () => {
  return (
    <>
      <h4 className="text-[1.8rem] text-gray-color mb-6">Similar Products</h4>

      <div className="flex flex-col gap-20">
        <div className="w-[150px] h-[120px]">
          <img src={product1} alt="Product Image" />
        </div>
        <div className="w-[150px] h-[120px]">
          <img src={product2} alt="Product Image" />
        </div>
      </div>
    </>
  );
};

export default SimilarProduct;
