import { useState } from "react";
import IconMenuClose from "../assets/images/icon-menu-close.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import Logo from "../assets/images/logo.svg";
import { fn } from "../utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
      <img src={Logo} alt="Logo" />
      <button className="" onClick={() => setIsOpen(true)}>
        <img src={IconMenu} alt="Icon Menu" />
      </button>
      <div
        className={fn(
          "absolute inset-0 -z-10 bg-black/60 opacity-0 transition-opacity lg:hidden",
          isOpen && "z-10 opacity-100"
        )}
      >
        <div
          className={fn(
            "fixed inset-y-0 right-0 z-10 flex w-72 translate-x-full flex-col bg-white opacity-0 transition-all duration-300",
            isOpen && "translate-x-0 opacity-100"
          )}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="m-6 ml-auto h-10 w-10 rounded-lg p-1 transition-opacity hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-news-veryDarkBlue"
          >
            <img src={IconMenuClose} alt="Icon Menu Close" />
          </button>
          <ul className="space-y-4 p-6 text-lg font-medium text-news-veryDarkBlue">
            <li>
              <a
                href="#"
                className="transition-colors hover:text-news-veryDarkBlue/60"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors hover:text-news-veryDarkBlue/60"
              >
                New
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors hover:text-news-veryDarkBlue/60"
              >
                Popular
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors hover:text-news-veryDarkBlue/60"
              >
                Trending
              </a>
            </li>
            <li>
              <a
                href="#"
                className="transition-colors hover:text-news-veryDarkBlue/60"
              >
                Categories
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
