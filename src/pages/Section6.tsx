import { useImperativeHandle, useRef, forwardRef } from "react";
import bg1 from "../assets/imgs/sec5/bg-8.png";
import pic1 from "../assets/imgs/sec5/pic-12.png";

import styles from "./Section6.module.scss";

export interface Sec4Handle {
  scrollIntoView: () => void;
}

const Sec6 = forwardRef<Sec4Handle>((props, ref) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    },
  }));
  return (
    <div className={styles["section"]} ref={sectionRef} id="section6">
      <img src={bg1} alt="" className={styles["bg"]} />
      <section className={styles["header"]}>
        <img src={pic1} alt="" />
        <h2>SKIN AQUA美肌防曬修飾底乳系列</h2>
      </section>
    </div>
  );
});

export default Sec6;
