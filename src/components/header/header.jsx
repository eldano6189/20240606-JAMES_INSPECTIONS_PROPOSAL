import styles from "./header.module.css";
import HeaderTop from "./header-top/headerTop";
import HeaderBottom from "./header-bottom/headerBottom";

const Header = () => {
  return (
    <header className={styles.header}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
