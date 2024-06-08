import { useState, useEffect } from "react";
import { FooterArrowIcon } from "../../assets/svgs/footerArrowIcon";
import styles from "./footer.module.css";

const Footer = () => {
  const [time, setTime] = useState("");

  const formatTimeWithOffset = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const timeString = formatter.format(date);

    const timezoneOffset = -date.getTimezoneOffset();
    const offsetHours = String(Math.floor(timezoneOffset / 60)).padStart(
      2,
      "0"
    );
    const offsetMinutes = String(timezoneOffset % 60).padStart(2, "0");
    const offsetSign = timezoneOffset >= 0 ? "+" : "-";

    return `Time ${timeString} (GMT${offsetSign}${offsetHours}:${offsetMinutes} hrs)`;
  };

  useEffect(() => {
    const getFormattedTime = () => {
      const date = new Date();
      return formatTimeWithOffset(date);
    };

    const updateTime = () => {
      setTime(getFormattedTime());
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <footer>
        <div>
          <p>Version Release 5.01.10(240480.2404080)</p>
        </div>
        <div>
          <p>main - official sensitive</p>
        </div>
        <div>
          <p>{time}</p>
          <FooterArrowIcon />
          <FooterArrowIcon />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
