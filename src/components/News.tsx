import { NewsItem } from "./NewsItem";

const newsData = [
  {
    id: 1,
    title: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 2,
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 3,
    title: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export const News = () => {
  return (
    <div className="my-12 bg-news-veryDarkBlue p-4">
      <h2 className="text-3xl font-bold text-news-softOrange">New</h2>
      <ul className="">
        {newsData.map((newData) => (
          <NewsItem new={newData} key={newData.id} />
        ))}
      </ul>
    </div>
  );
};
