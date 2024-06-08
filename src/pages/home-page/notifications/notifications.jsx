import { notificationCards } from "../../../data/notificationCards";
import styles from "./notifications.module.css";

const Notifications = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.container__cards}>
        {notificationCards.map((card, i) => {
          return (
            <li key={i} className={styles.card}>
              <div
                className={styles.card__title}
                style={{ background: card.titleColor }}
              >
                <p>{card.title}</p>
              </div>
              <div className={styles.card__icon}>
                <div className={styles.icon}>
                  {card.icon}
                  <div
                    className={styles.counter}
                    style={{ background: card.titleColor }}
                  >
                    <p>{card.total}</p>
                  </div>
                </div>
              </div>
              <div className={styles.card__subject}>
                <p>{card.subject}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Notifications;
