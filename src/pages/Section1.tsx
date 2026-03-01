import bg from "../assets/imgs/sec2/bg-1.png";
import bg2 from "../assets/imgs/sec2/bg-2.png";
import title1 from "../assets/imgs/sec2/title-1.png";
import icon1 from "../assets/imgs/sec2/icon-1.png";
import styles from "./Section1.module.scss";
import classnames from "classnames";

export default function Sec1() {
  return (
    <div className={styles["section"]}>
      <img src={bg} alt="" className={styles["bg"]} />
      <section className={styles["content"]}>
        <img
          className={styles["title"]}
          src={title1}
          style={{ width: "40%" }}
          alt=""
        />
        <section className={styles["location-list"]}>
          <img src={bg2} alt="" className={styles["bg"]} />
          <ul>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 銀座本館
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>MEGA唐吉訶德</strong> 澀谷本店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 秋葉原店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 池袋東口站前店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 新宿東口店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 道頓堀店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 道頓堀御堂筋店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 梅田本店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>MEGA唐吉訶德</strong> 新世界店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 京都Avanti店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 榮本店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 福岡天神本店
            </li>
            <li>
              <img className={styles["icon"]} src={icon1} alt="" />
              <strong>唐吉訶德</strong> 中洲店
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
}
