import GamingGrowth from "../assets/images/image-gaming-growth.jpg";
import RetroPc from "../assets/images/image-retro-pcs.jpg";
import TopLaptops from "../assets/images/image-top-laptops.jpg";
import { BlogCard } from "./BlogCard";

const blogs = [
  {
    id: 1,
    img: RetroPc,
    number: "01",

    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
  },
  {
    id: 2,
    number: "02",

    img: TopLaptops,
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
  },
  {
    id: 1,
    number: "03",
    img: GamingGrowth,
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities",
  },
];

export const Blogs = () => {
  return (
    <ul className="col-span-3 my-12 flex flex-col gap-8 lg:my-0 lg:flex-row">
      {blogs.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </ul>
  );
};
