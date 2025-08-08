import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "./Button";

function Header() {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "FORM", link: "/form" },
    { name: "LOCATION", link: "/location" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-50 w-screen shadow-md ">
      <div className="items-center justify-between bg-white bg-grey-400 px-7 py-4 md:flex md:px-10">
        <div className="flex cursor-pointer items-center text-2xl font-bold">
          <img className="h-10" src="/BRTA logo.png" alt="BRTA" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-0 cursor-pointer text-5xl md:hidden"
        >
          //here will be an icon of menu
        </div>
        <ul
          className={`absolute left-0 z-[-1] w-full bg-white pb-12 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "top-15" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 md:my-0 md:ml-8">
              <Link
                className="text-grey-800 hover:text-grey-400 duration-500"
                to={link.link}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Button to="/login" StyleType="login">LOGIN</Button>
        </ul>
      </div>
    </div>
  );
}
export default Header;
