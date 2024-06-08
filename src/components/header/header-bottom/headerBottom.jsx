import { bottomNav } from "../../../data/bottomNav";
import styles from "./headerBottom.module.css";

const HeaderBottom = () => {
  return (
    <div>
      <div className={styles.container}>
        <nav>
          <ul>
            {bottomNav.map((item, i) => {
              return (
                <li key={i}>
                  {item.icon}
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderBottom;
