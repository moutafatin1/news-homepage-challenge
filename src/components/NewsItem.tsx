type NewItemProps = {
  new: {
    id: number;
    title: string;
    desc: string;
  };
};

export const NewsItem = ({ new: { desc, title } }: NewItemProps) => {
  return (
    <li className="flex flex-col gap-2 border-b border-news-darkGrayishBlue py-6 last:border-none">
      <h3 className="text-xl font-bold text-news-offWhite">{title}</h3>
      <p className="text-news-grayishBlue">{desc}</p>
    </li>
  );
};
