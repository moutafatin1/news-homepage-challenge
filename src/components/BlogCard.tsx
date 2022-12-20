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
      <img src={blog.img} alt={blog.title} className="w-24" />
      <span className="flex flex-col gap-2">
        <span className="text-3xl font-bold text-news-grayishBlue">
          {blog.number}
        </span>

        <h3 className="text-lg font-bold text-news-veryDarkBlue">
          {blog.title}
        </h3>
        <p className="text-news-darkGrayishBlue">{blog.desc}</p>
      </span>
    </li>
  );
};
