import { NavLink } from "react-router-dom";
import scss from "./NavSideBarMain.module.scss";
import MenuIcon from "../icons/MenuIcon";

interface NavSidBarProps {
  title: string;
  link: string;
  icon: React.ElementType;
  isMenu?: boolean;
}

interface NavSid {
  data: NavSidBarProps[];
}

const NavSideBarMain: React.FC<NavSid> = ({ data }) => {
  return (
    <>
      {data.map((item, index) => (
        <NavLink
          key={index}
          to={item.link}
          className={({ isActive }) => (isActive ? scss.activeLink : scss.link)}
        > 
          <item.icon className={scss.icon} />
          <span className={scss.span}>{item.title}</span>
          {item.isMenu && <MenuIcon />}
        </NavLink>
      ))}
    </>
  );
};

export default NavSideBarMain;
