import news from "../data/news.json";

function News() {
  return (
    <div className="space-y-3">
      <h1 className="text-center font-bold">News</h1>
      <div className="flex justify-between">
        {news.map((news, index) => (
          <img
            key={index}
            src={news.image}
            alt=""
            className="w-96 rounded-lg object-cover"
          />
        ))}
      </div>
    </div>
  );
}

export default News;
