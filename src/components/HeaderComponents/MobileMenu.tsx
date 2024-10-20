import { NavBarItems } from "../../data/lists.ts";

interface MobileMenuProps {
  isOpen: boolean; // Define the type for isOpen
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black z-30 flex justify-center items-center
        transition-opacity duration-700 ease-in-out transform ${
          isOpen ? "opacity-90 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
    >
      <ul
        className={`flex flex-col items-center justify-center w-6/12 space-y-5 text-white text-xl transition-transform duration-1000 ease-in-out sm:text-3xl ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {NavBarItems.map((link, index) => (
          <li key={index} className="w-full">
            <a
              href={link.href}
              className="bg-black opacity-100 border-4 block text-center rounded-2xl p-4 transition-transform duration-200 ease-in-out w-full"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
