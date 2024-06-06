import styles from "./headerTop.module.css";
import { Link } from "react-router-dom";

import { user } from "../../../data/user";
import { topNav } from "../../../data/topNav";

import { MODLogo } from "../../../assets/svgs/modLogo";
import { DesLogo } from "../../../assets/svgs/desLogo";
import { JamesLogo } from "../../../assets/svgs/jamesLogo";
import { LockheedLogo } from "../../../assets/svgs/lockheedLogo";

const HeaderTop = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.container__logos}>
          <MODLogo />
          <DesLogo />
          <JamesLogo />
          <LockheedLogo />
        </div>
        <div className={styles.container__nav}>
          <div className={styles.user}>
            <p>
              <span>{user.number}</span> of <span>{user.location}</span> User
              Role <span>{user.role}</span>
            </p>
          </div>
          <nav className={styles.nav}>
            <ul>
              {topNav.map((item, i) => {
                return (
                  <li key={i}>
                    <Link to={item.link}>{item.icon}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
