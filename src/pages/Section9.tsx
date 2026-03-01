import bg1 from "../assets/imgs/sec8/bg-6.png";
import pic1 from "../assets/imgs/sec8/pic-11.png";
import icon1 from "../assets/imgs/sec8/icon-4.png";
import title1 from "../assets/imgs/sec8/title-7.png";

import styles from "./Section9.module.scss";

export default function Sec9() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img src={title1} alt="" />
      </section>
      <section className={styles["content"]}>
        <img src={pic1} alt="" />
      </section>
      <section className={styles["footer"]}>
        <img src={icon1} alt="" />
      </section>
    </div>
  );
}
