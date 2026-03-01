import bg1 from "../assets/imgs/sec5/bg-8.png";
import pic1 from "../assets/imgs/sec5/pic-12.png";

import styles from "./Section6.module.scss";

export default function Sec6() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img src={pic1} alt="" />
        <h2>SKIN AQUA美肌防曬修飾底乳系列</h2>
      </section>
    </div>
  );
}
