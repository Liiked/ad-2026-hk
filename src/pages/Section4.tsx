import bg1 from "../assets/imgs/sec3/bg-3.png";
import title1 from "../assets/imgs/sec3/title-2.png";
import title2 from "../assets/imgs/sec3/title-3.png";
import icon from "../assets/imgs/sec3/icon-2.png";

import styles from "./Section4.module.scss";
import { forwardRef, useImperativeHandle, useRef } from "react";
// import classNames from "classnames";

export interface Sec4Handle {
  scrollIntoView: () => void;
}

const Sec4 = forwardRef<Sec4Handle>((_props, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));

  return (
    <div className={styles["section"]} ref={sectionRef} id="section4">
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <h2>
          \ 一抹注入玻尿酸<sup>※1</sup> /
        </h2>
        <h1>24H長效潤澤</h1>
        <img src={title1} alt="" />
      </section>
      <section className={styles["content"]}>
        <div className={styles["recommend-card"]}>
          <img className={styles["recommend-icon"]} src={title2} alt="" />
          <h4>推薦給這樣的人！</h4>
          <ul>
            <li>
              <img className={styles["icon"]} src={icon} alt="" />
              討厭悶厚黏的防曬新手
            </li>
            <li>
              <img className={styles["icon"]} src={icon} alt="" />
              察覺肌膚「變化」預警 *
            </li>
            <li>
              <img className={styles["icon"]} src={icon} alt="" />
              日間肌膚易缺水緊繃
            </li>
            <li>
              <img className={styles["icon"]} src={icon} alt="" />
              偏好「低刺激、零酒精」的安心防曬
            </li>
          </ul>
          <p className={styles["tip"]}>*指因乾燥引起的肌膚變化</p>
        </div>
      </section>
      <section className={styles["footer"]}>
        <div className={styles["tips"]}>
          <p>
            ※1
            重復補擦含玻尿酸（保濕成分）的防曬產品，可為肌膚補充玻尿酸（保濕成分）
          </p>
          <p>※2 通過勤加、均勻補擦防曬，可防止紫外線造成的肌膚傷害</p>
          <p>※3 在 SKIN AQUA系列產品中</p>
          <p>※4 玻尿酸鈉、羥丙基三甲基銨玻尿酸、加水分解玻尿酸鈉</p>
        </div>
      </section>
    </div>
  );
});

export default Sec4;
