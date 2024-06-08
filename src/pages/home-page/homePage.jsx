import styles from "./homePage.module.css";
import Notifications from "./notifications/notifications";
import Title from "./title/title";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Title />
      <Notifications />
    </div>
  );
};

export default HomePage;
