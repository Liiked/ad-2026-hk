import bg1 from "../assets/imgs/sec7/bg-7.png";
import title1 from "../assets/imgs/sec7/title-5.png";
import title2 from "../assets/imgs/sec7/title-6.png";
import pic8 from "../assets/imgs/sec7/pic-8.png";
import pic9 from "../assets/imgs/sec7/pic-9.png";
import pic10 from "../assets/imgs/sec7/pic-10.png";

import styles from "./Section8.module.scss";
import classNames from "classnames";

export default function Sec8() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img
          className={classNames(styles["pic"], styles["smaller"])}
          src={title1}
          alt=""
          style={{ marginBottom: "6em" }}
        />
        <img className={styles["pic"]} src={title2} alt="" />
      </section>
      <section className={styles["content"]}>
        <div className={styles["hanging-text"]}>
          <img className={styles["pic"]} src={pic8} alt="" />
          <div className={classNames(styles["text-block"], styles["text1"])}>
            <h2>
              添加耐汗耐水的包覆成分
              <br />
              讓剛塗抹後的提亮效果*不易脫落、
              <br />
              更加持久!
            </h2>
            <p>（與系列既有產品相比／經公司內部測試）＊指彩妝修飾效果</p>
          </div>
        </div>
        <div className={styles["hanging-text"]}>
          <img
            className={classNames(styles["pic"])}
            style={{ marginBottom: "6em" }}
            src={pic9}
            alt=""
          />
        </div>
        <div className={styles["hanging-text"]}>
          <img
            className={classNames(styles["pic"])}
            style={{ marginBottom: "6em" }}
            src={pic10}
            alt=""
          />
          <div className={classNames(styles["text-block"], styles["text2"])}>
            <h2 className={styles["contact"]}>在阻隔紫外線的同時</h2>
            <h2 className={classNames(styles["contact"], styles["highlight"])}>
              打造透明感* 的防曬飾底乳
            </h2>
            <h2 className={styles["contact"]} style={{ marginBottom: "0.8em" }}>
              還添加了保濕美容的成分！
            </h2>
            <p>＊指彩妝修飾效果</p>
          </div>
          <div className={classNames(styles["text-block"], styles["text3"])}>
            <p>※添加維他命C誘導體（抗壞血酸磷酸鎂）</p>
            <p style={{ marginLeft: "-1.6em" }}>
              ★可使用肥皂、洗面乳、沐浴乳等卸除
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
