import { NavLink } from "react-router-dom";

import "./navMenu.scss";

const NavMenu = () => {
  return (
    <nav className="Nav-menu d-flex flex-column flex-shrink-0 p-3 text-white bg-dark">
      <div className="Nav-profile d-flex mb-4">
        <img
          src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
          alt="Profile picture"
          className="Profile-pic"
        />
      </div>
      <ul className="Nav-list nav nav-pills flex-column mb-auto">
        <li className="Nav-li my-2 h3">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#28a745" : "inherit",
            })}
            to="/Orders"
          >
            Orders
          </NavLink>
        </li>
        <li className="Nav-li my-2 h3">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#28a745" : "inherit",
            })}
            to="/Products"
          >
            Products
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
