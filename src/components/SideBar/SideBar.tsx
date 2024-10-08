import styles from "./Sidebar.module.scss";
import { Profile } from "./Profile";
import NavSideBarMain from "./NavSideBarMain";
import { FooterData, NavBarData } from "../../constants/NavBarData";
import NavSideBarFooter from "./NavSideBarFooter";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div>
        <div className={styles.userProfile}>
          <Profile />
        </div>

        <nav className={styles.navMenu}>
          <NavSideBarMain data={NavBarData} />
        </nav>
      </div>
      <div className={styles.footerMenu}>
        <NavSideBarFooter data={FooterData} />
      </div>
    </div>
  );
};

export default Sidebar;
