import { newsFeed } from '../constants';

const NewsFeed = () => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {newsFeed.map((news) => (
        <div key={news.id}>
          <img src={news.img} alt="News Image" />
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
