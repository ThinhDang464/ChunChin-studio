import { NavLink } from "react-router-dom";
import placeholder from "../assets/placeholder.png";
const NavBar = () => {
  const leftLinks = [
    { path: "/about", name: "About us" },
    { path: "/services", name: "Service" },
    { path: "/portfolio", name: "Portfolio" },
  ];

  const rightLinks = [
    { path: "/journal", name: "Journal" },
    { path: "/faq", name: "FAQs" },
    { path: "/inquire", name: "Inquire" },
  ];
  return (
    <div className="">
      <nav className="flex items-center justify-center border-b pt-10 text-lg">
        {/*Left Navigation */}
        <div className="flex items-center gap-10 w-2/5 justify-end">
          {leftLinks.map((link, index) => (
            <NavLink key={index} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </div>

        {/*Center Logo */}
        <div className="flex justify-center w-[15%]">
          <NavLink to={"/"}>
            <img className="w-25" src={placeholder} alt="" />
          </NavLink>
        </div>

        {/*Right Navigation */}
        <div className="flex items-center gap-10 w-2/5 justify-start">
          {rightLinks.map((link, index) => (
            <NavLink key={index} to={link.path}>
              {link.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
