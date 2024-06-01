import MyButton from "./my.button";
import downloadIcon from "../assets/download.svg";
import { ThreeDCardDemo } from "./threeD.card";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import cv from "../assets/cv/CV_MAJ.pdf";

gsap.registerPlugin(ScrollTrigger);

const arr = "< ";
const arrClose = "/ >";

export default function Hero() {
  const [t, i18n] = useTranslation("global");
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imgRef.current,
          toggleActions: "play reverse play reverse",
        },
      }
    );
    gsap.fromTo(
      textRef.current,
      { y: -200, opacity: 0 },
      {
        y: 0,
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
    <div
      id={t("headers.menu.1")}
      className="grid xl:grid-cols-2 grid-cols-1 w-6/8 mt-16 pb-14 ml-1/8 gap-8"
    >
      <div className="flex flex-row items-center justify-center gap-8">
        <div
          ref={textRef}
          className="w-full flex-col flex items-start justify-center"
        >
          <div className="ml-2">{t("body.pres")}</div>
          <div className="font-semibold md:text-8xl text-6xl">
            {t("info.fname1")}{" "}
            <span className="text-primary">
              {t("info.fname2")} <br className="xl:hidden block" />{" "}
              {t("info.lname")}
            </span>
          </div>
          <div className="font-semibold text-primary mt-4">
            {arr} {t("info.job")} {arrClose}
          </div>
          <div className="text-secondary my-8">
            {t("body.desc1")}
            <br />
            {t("body.desc2")}
          </div>
          <div className="flex gap-8">
            <a href={`#${t("headers.menu.5")}`}>
              <MyButton
                borderColor="primary"
                bg="background"
                textColor="foreground"
                text={t("btn.contact_me")}
              />
            </a>
            <a href={cv} download>
              <MyButton
                borderColor="primary"
                bg="primary"
                textColor="background"
                text={t("btn.download_cv")}
                img={downloadIcon}
              />
            </a>
          </div>
        </div>
        <div className="hidden xl:block rotate-180" ref={arrowRef}>
          {item}
        </div>
      </div>
      <div
        className="w-full flex flex-row items-center xl:justify-end justify-center"
        ref={imgRef}
      >
        <ThreeDCardDemo />
      </div>
    </div>
  );
}

const item = (
  <svg
    width="79"
    height="235"
    viewBox="0 0 79 235"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M75.7998 3.19806C50.1843 3.91647 54.9044 2.94458 34.1801 22.898C29.4468 27.4551 22.2901 32.9978 20.6682 41.0942C18.2748 53.042 32.9256 89.1888 42.5174 75.8854C48.7163 67.2878 47.5223 52.5204 38.0924 48.6148C22.6279 42.2098 10.1944 61.1468 5.38686 77.5103C0.0940138 95.5256 4.53909 115.234 17.0132 127.263C22.7118 132.758 31.9039 130.27 26.8618 118.599C16.4911 94.596 4.49663 123.714 6.12058 139.661C9.04561 168.385 33.7168 206.119 56.799 200.135C64.0159 198.264 61.657 194.09 58.6284 191.002C55.5553 187.869 47.8279 176.427 49.9025 180.772C53.5294 188.367 58.1307 191.423 63.2708 195.883C69.9006 201.635 55.68 214.205 51.5604 218.692C49.3978 221.047 46.2555 226.322 45.6706 230.164C44.5155 237.748 52.8538 217.931 54.346 210.482"
      stroke="#00ADB5"
      strokeOpacity="0.2"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
