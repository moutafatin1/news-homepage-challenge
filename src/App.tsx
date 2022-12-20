import Web3Desktop from "./assets/images/image-web-3-desktop.jpg";
import Web3Mobile from "./assets/images/image-web-3-mobile.jpg";
import { Navbar } from "./components";
import { Blogs } from "./components/Blogs";
import { News } from "./components/News";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="p-4 font-inter">
        <div className="space-y-4">
          <picture>
            <source srcSet={Web3Desktop} media="(min-width: 1024px)" />
            <img src={Web3Mobile} alt="web 3 image" />
          </picture>
          <h1 className="text-5xl font-bold text-news-veryDarkBlue">
            The Bright Future of Web 3.0?
          </h1>
          <p className="text-news-darkGrayishBlue">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="bg-news-softRef px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-news-offWhite">
            Read more
          </button>
        </div>
        <News />
        <Blogs />
      </main>
    </>
  );
};

export default App;
