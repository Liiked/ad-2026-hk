import bg1 from "../assets/imgs/sec6/bg-5.png";
import title1 from "../assets/imgs/sec6/title-4.png";
import pic5 from "../assets/imgs/sec6/pic-5.png";
import pic6 from "../assets/imgs/sec6/pic-6.png";
import pic7 from "../assets/imgs/sec6/pic-7.png";

import styles from "./Section7.module.scss";
import classNames from "classnames";

export default function Sec7() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img src={title1} alt="" />
        <h4 className={styles["sub-title"]}>
          不挑個人膚色
          <br />
          自然提亮
        </h4>
        <h2 className={styles["main-title"]}>
          「珍珠白」
          <br />
          全新登場！
        </h2>
      </section>
      <section className={styles["content"]}>
        <img className={styles["pic"]} src={pic5} alt="" />
        <h2>
          SKIN AQUA
          <br />
          美肌防曬修飾底乳系列
        </h2>
        <img
          className={classNames(styles["pic"], styles["smaller"])}
          style={{ marginBottom: "6em" }}
          src={pic6}
          alt=""
        />
        <img
          className={classNames(styles["pic"], styles["bigger"])}
          src={pic7}
          alt=""
        />
      </section>
    </div>
  );
}
