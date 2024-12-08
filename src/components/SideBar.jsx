import styles from './Sidebar.module.css';
import Logo from './Logo';
import AppNav from './AppNav';
import SideBarFooter from './SideBarFooter';
import { Outlet } from 'react-router-dom';
const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet/>
      <SideBarFooter className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </SideBarFooter>
    </div>
  );
};

export default SideBar;
