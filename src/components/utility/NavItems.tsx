import { NavLink } from "react-router-dom";


const NavItems = () => {
    return (
      <>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT US</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">DASHBOARD</NavLink>
        </li>
        <li>
          <NavLink to="/our-menu">Our Menu</NavLink>
        </li>
        <li>
          <NavLink to="/our-shop">Our Shop</NavLink>
        </li>
      </>
    );
};

export default NavItems;