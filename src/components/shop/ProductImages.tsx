import { useState } from 'react';
import arrival1 from '../../assets/arrival1.png';
import arrival2 from '../../assets/arrival2.png';
import arrival3 from '../../assets/arrival3.png';

interface Image {
  src: string;
  alt: string;
}

const images = [
  { src: arrival1, alt: 'Arrival 1' },
  { src: arrival2, alt: 'Arrival 2' },
  { src: arrival3, alt: 'Arrival 3' },
];

const ProductImages = () => {
  const [mainImg, setMainImg] = useState(images[0]);

  const handleImgClick = (img: Image) => {
    setMainImg(img);
  };
  return (
    <div className="flex flex-col gap-6">
      <div className="w-[350px] h-[350px]">
        <img src={mainImg.src} alt={mainImg.alt} />
      </div>
      <div className="flex gap-6 self-center">
        <div className="w-[90px] h-[90px]">
          <img
            src={images[0].src}
            alt={images[0].alt}
            onClick={() => handleImgClick(images[0])}
            className="cursor-pointer"
          />
        </div>
        <div className="w-[90px] h-[90px]">
          <img
            src={images[1].src}
            alt={images[1].alt}
            onClick={() => handleImgClick(images[1])}
            className="cursor-pointer"
          />
        </div>
        <div className="w-[90px] h-[90px]">
          <img
            src={images[2].src}
            alt={images[2].alt}
            onClick={() => handleImgClick(images[2])}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImages;
