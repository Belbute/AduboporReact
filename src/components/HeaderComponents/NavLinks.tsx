import { NavBarItems } from "../../data/lists";

const NavLinks = () => {
  return (
    <ul className="hidden ml-8 lg:flex space-x-8 text-white text-lg">
      {NavBarItems.map((link, index) => (
        <li key={index} className="hover:scale-110 transition-transform duration-300 ease-in-out">
          <a
            href={link.href}
            className="rounded-2xl hover:bg-app-3 hover:text-white transform pl-3 pr-3 pt-1 pb-1"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
