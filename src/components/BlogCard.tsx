type BlogCardProps = {
  blog: {
    id: number;
    number: string;
    img: string;
    title: string;
    desc: string;
  };
};

export const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <li className="flex items-center gap-4">
      <img src={blog.img} alt={blog.title} className="w-24 lg:w-40" />
      <span className="flex flex-col justify-between gap-2">
        <span className="text-4xl font-bold text-news-grayishBlue">
          {blog.number}
        </span>

        <h3 className="text-lg font-bold text-news-veryDarkBlue lg:text-2xl">
          {blog.title}
        </h3>
        <p className="text-news-darkGrayishBlue lg:text-lg">{blog.desc}</p>
      </span>
    </li>
  );
};
