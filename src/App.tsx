import Web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import Web3Mobile from "./assets/images/image-web-3-mobile.jpg";
import { Navbar } from "./components";
import { Blogs } from "./components/Blogs";
import { News } from "./components/News";

const App = () => {
  return (
    <div className="my-6">
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col items-center gap-12 p-4  font-inter lg:grid lg:grid-cols-[repeat(3,auto)] lg:grid-rows-[repeat(3,auto)] lg:items-stretch">
        <div className="flex flex-col items-center text-center lg:col-span-2 lg:row-span-2 lg:block lg:text-left">
          <picture>
            <source srcSet={Web3Desktop} media="(min-width: 1024px)" />
            <img src={Web3Mobile} alt="web 3 image" />
          </picture>
          <div className="mt-4 lg:flex">
            <h1 className="text-5xl font-bold text-news-veryDarkBlue">
              The Bright Future of Web 3.0?
            </h1>
            <div className="space-y-4">
              <p className="text-news-darkGrayishBlue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-news-softRef px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-news-offWhite">
                Read more
              </button>
            </div>
          </div>
        </div>
        <News />
        <Blogs />
      </main>
    </div>
  );
};

export default App;
