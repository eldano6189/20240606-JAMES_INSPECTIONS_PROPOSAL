import { useState } from "react";
import { bottomNav } from "../../../data/bottomNav";
import styles from "./headerBottom.module.css";

const HeaderBottom = () => {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div>
      <div className={styles.container}>
        <nav>
          <ul>
            {bottomNav.map((item, i) => {
              return (
                <li
                  key={i}
                  onClick={() => setActiveLink(i)}
                  style={{
                    background:
                      activeLink === i ? "var(--clr-purple-dark)" : null,
                  }}
                >
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
