import { useEffect, useRef } from "react";
import "../App.css";
import styles from "./Main.module.scss";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";
import Section9 from "./Section9";
import type { Sec4Handle } from "./Section4";

export default function Main() {
  const sec4Ref = useRef<Sec4Handle>(null);
  const sec6Ref = useRef<Sec4Handle>(null);

  const scrollToSec4 = () => {
    sec4Ref.current?.scrollIntoView();
  };
  const scrollToSec6 = () => {
    sec6Ref.current?.scrollIntoView();
  };

  useEffect(() => {
    document.title = "活动页";
  }, []);

  return (
    <div className={styles["app"]}>
      <Section3 onScrollToSec4={scrollToSec4} onScrollToSec6={scrollToSec6} />
      <Section1 />
      <Section4 ref={sec4Ref} />
      <Section5 />
      <Section6 ref={sec6Ref} />
      <Section7 />
      <Section8 />
      <Section9 />
    </div>
  );
}
