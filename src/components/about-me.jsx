import gsap from "gsap";
import Arrow from "../assets/arrow";
import DoodleItems from "../assets/doodle-items";
import Sleep from "../assets/sleep";
import Space from "./space";
import Title from "./title";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
  const [t, i18n] = useTranslation("global");
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { x: 200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          toggleActions: "play reverse play reverse",
          end: "50%",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { x: -200, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
          trigger: textRef.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      arrowRef.current,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        duration: 1,
        scale: 1,
        delay: 1,
        ease: "elastic.out(0.4,0.15)",
        scrollTrigger: {
          trigger: arrowRef.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);
  return (
    <div id={t("headers.menu.2")} className="flex pt-28">
      <Space />
      <div className="w-6/8">
        <Title text={t("headers.menu.2")} lineWidth="3/6" />
        <div className="grid xl:grid-cols-2 w-full mt-12 gap-12">
          <div className="text-secondary flex flex-col justify-center items-center gap-8">
            <div ref={textRef}>{t("info.about")}</div>
            <div ref={arrowRef}>
              <Arrow />
            </div>
          </div>
          <div
            ref={imgRef}
            className="flex flex-col justify-center items-center w-ull relative"
          >
            <div className="w-full">
              <DoodleItems />
            </div>
            <div className="absolute top-2/4 w-1/2">
              <Sleep />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
