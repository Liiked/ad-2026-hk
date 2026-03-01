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
import { useEffect, useRef, useState } from "react";

const PlayInterval = 2000; // 自动轮播间隔时间（毫秒）

export default function Sec3() {
  const swiperRef = useRef<any>(null);
  const observerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 检测轮播区域是否进入视口
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 当50%的元素进入视口时触发
        rootMargin: "0px 0px -100px 0px", // 微调触发区域
      },
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  // 根据可见性控制自动轮播
  useEffect(() => {
    if (swiperRef.current) {
      // ts-ignore
      const swiper = (swiperRef.current as any).swiper;
      if (isVisible) {
        swiper.autoplay.start();
      } else {
        swiper.autoplay.stop();
      }
    }
  }, [isVisible]);

  // TODO: 轮播图点击事件，跳转到对应链接
  const onClickBanner1 = () => {
    window.open("https://www.kao.com/jp/curel/lineup/facewash/", "_blank");
  };
  const onClickBanner2 = () => {
    window.open("https://www.kao.com/jp/curel/lineup/facewash/", "_blank");
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
