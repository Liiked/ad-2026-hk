import classNames from "classnames";
import bg1 from "../assets/imgs/sec4/bg-4.png";
import icon from "../assets/imgs/sec4/icon-3.png";
import pic1 from "../assets/imgs/sec4/pic-1.png";
import pic2 from "../assets/imgs/sec4/pic-2.png";
import pic3 from "../assets/imgs/sec4/pic-3.png";
import pic4 from "../assets/imgs/sec4/pic-4.png";
import styles from "./Section5.module.scss";

export default function Sec5() {
  return (
    <div className={styles["section"]}>
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <h2>POINT</h2>
        <p>特點</p>
      </section>
      <section className={styles["content"]}>
        <div className={styles["goods-card"]}>
          <div className={styles["order"]}>
            <img src={icon} alt="" />
            <h5>Point</h5>
            <h2>01</h2>
          </div>
          <h1 className={styles["title"]}>
            高濃度<sup>★</sup>
          </h1>
          <h4 className={styles["subtitle"]}>
            添加3種玻尿酸 <p className={styles["small-text"]}>（保濕成分）</p>
            <br /> 高保水配方！
          </h4>
          <img className={styles["pic"]} src={pic1} alt="" />
          <p className={styles["desc"]}>
            超低分子玻尿酸*深層滲透角質，聯手玻尿酸鈉於表層強力鎖水；
            <br />
            搭配肌膚吸附型玻尿酸**緊緊抓水，讓潤澤長效停留。
          </p>
          <div className={styles["tips"]}>
            <p className={styles["tip"]}>
              <sup>★</sup> 在 SKIN AQUA 系列產品中
            </p>
            <p className={styles["tip"]}>* 加水分解玻尿酸鈉</p>
            <p className={styles["tip"]}>**羥丙基三甲基銨玻尿酸</p>
          </div>
        </div>
        <div className={styles["goods-card"]}>
          <div className={styles["order"]}>
            <img src={icon} alt="" />
            <h5>Point</h5>
            <h2>02</h2>
          </div>
          <h1 className={classNames(styles["title"], styles["small"])}>
            專為敏弱肌打造
          </h1>
          <img className={styles["pic"]} src={pic2} alt="" />
          <h4
            className={classNames(styles["subtitle"], styles["small"])}
            style={{ marginBottom: "1em" }}
          >
            以護膚為出發點！貼心呵護肌膚
          </h4>
          <h4
            className={classNames(
              styles["subtitle"],
              styles["small"],
              styles["bold"],
            )}
            style={{ marginBottom: "1em" }}
          >
            零酒精（乙醇）添加 無粉末配方
          </h4>
          <p className={styles["desc"]}>
            隔絕花粉、PM2.5、灰塵等空氣髒污，可 使用日常清潔產品卸除。
            <br />
            通過肌膚過敏測試
          </p>

          <div className={styles["tips"]}>
            <p className={styles["tip"]}>(並非所有人都完全不會產生過敏反應)</p>
          </div>
        </div>
        <div className={styles["goods-card"]}>
          <div className={styles["order"]}>
            <img src={icon} alt="" />
            <h5>Point</h5>
            <h2>03</h2>
          </div>
          <h1
            className={classNames(
              styles["title"],
              styles["small"],
              styles["overflow-bottom-line"],
            )}
          >
            採用「肌膚解放感」配方！
          </h1>
          <h4
            className={classNames(styles["subtitle"], styles["small"])}
            style={{ marginBottom: "2em" }}
          >
            質地水潤清爽、完美告別黏膩
            <br />
            追求零負擔的親膚使用感受
          </h4>
          <img className={styles["pic"]} src={pic3} alt="" />
        </div>
        <div className={styles["goods-card"]}>
          <div className={styles["order"]}>
            <img src={icon} alt="" />
            <h5>Point</h5>
            <h2>04</h2>
          </div>
          <h1
            className={classNames(
              styles["title"],
              styles["small"],
              styles["no-bottom-line"],
            )}
            style={{ marginBottom: "2.6em", letterSpacing: "0.1em" }}
          >
            追求好用順手的瓶身設計
          </h1>
          <img className={styles["pic"]} src={pic4} alt="" />
        </div>
      </section>
    </div>
  );
}
