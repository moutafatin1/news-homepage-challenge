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
      <a
        href="#"
        className="cursor-pointer text-xl font-bold text-news-offWhite transition-colors hover:text-news-softOrange"
      >
        {title}
      </a>
      <p className="text-news-grayishBlue">{desc}</p>
    </li>
  );
};
