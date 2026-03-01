// import bg1 from "../assets/newImgs/sec3/back1.png";
// import featureTitle from "../assets/newImgs/sec3/1.png";
// import pic1 from "../assets/newImgs/sec3/2.png";
// import pic2 from "../assets/newImgs/sec3/4.png";
// import pic3 from "../assets/newImgs/sec3/6.png";
// import pic4 from "../assets/newImgs/sec3/8.png";

import scroll1 from "../assets/imgs/sec1/1-1.jpg";
import scroll2 from "../assets/imgs/sec1/1-2.jpg";

// 导入Swiper库
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import styles from "./Section3.module.scss";
import classNames from "classnames";
import { useEffect, useRef } from "react";

const PlayInterval = 2000; // 自动轮播间隔时间（毫秒）

interface Sec3Props {
  onScrollToSec4?: () => void;
  onScrollToSec6?: () => void;
}

export default function Sec3({ onScrollToSec4, onScrollToSec6 }: Sec3Props) {
  const swiperRef = useRef<any>(null);
  const observerRef = useRef<HTMLDivElement>(null);

  // 根据可见性控制自动轮播
  useEffect(() => {
    if (swiperRef.current) {
      // ts-ignore
      const swiper = (swiperRef.current as any).swiper;
      swiper.autoplay.start();
      // swiper.autoplay.stop();
    }
  }, []);

  // TODO: 轮播图点击事件，跳转到对应链接
  const onClickBanner1 = () => {
    handleScrollToSec4();
  };
  const onClickBanner2 = () => {
    handleScrollToSec6();
  };

  const handleScrollToSec4 = () => {
    if (onScrollToSec4) {
      onScrollToSec4();
    } else {
      // 备用方案：直接使用DOM滚动（仅用于测试）
      const sec4 = document.getElementById("section4");
      sec4?.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollToSec6 = () => {
    if (onScrollToSec6) {
      onScrollToSec6();
    } else {
      // 备用方案：直接使用DOM滚动（仅用于测试）
      const sec6 = document.getElementById("section6");
      sec6?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles["section"]}>
      <section className={styles["content"]}>
        <div ref={observerRef}>
          <div className={styles["scroll"]}>
            <Swiper
              ref={swiperRef}
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: PlayInterval,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              className={styles["swiper-container"]}
            >
              <SwiperSlide className={styles["swiper-slide"]}>
                <img
                  className={classNames(
                    styles["scroll-item"],
                    styles["scroll-item-1"],
                  )}
                  onClick={onClickBanner1}
                  src={scroll1}
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide className={styles["swiper-slide"]}>
                <img
                  className={classNames(
                    styles["scroll-item"],
                    styles["scroll-item-2"],
                  )}
                  onClick={onClickBanner2}
                  src={scroll2}
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
