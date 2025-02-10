import { useEffect, useRef } from "react";
import gsap from "gsap";
import Space from "./space";
import Title from "./title";
import WorkBox from "./work.box";
import p1 from "../assets/images/Capture.png";
import smmec from "../assets/images/smmec.png";
import sal from "../assets/images/sal.png";
import aceem from "../assets/images/aceem.png";
import port from "../assets/images/portfolio.png";
import { useTranslation } from "react-i18next";

export default function Works() {
  const [t, i18n] = useTranslation("global");
  const workBoxRefs = useRef([]);

  useEffect(() => {
    workBoxRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, x: 200 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          delay: index * 0.5,
          scrollTrigger: {
            trigger: ref,
            start: "top bottom", // Adjust as needed
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
  }, []);

  const workBoxes = [
    {
      image: port,
      technologies: t("works.1.technologies"),
      title: t("works.1.title"),
      description: t("works.1.description"),
      link : "https://github.com/Raly04/porfolio"
    },
    {
      image: p1,
      technologies: t("works.2.technologies"),
      title: t("works.2.title"),
      description: t("works.2.description"),
      link : "https://github.com/Raly04/novice-immersion"
    },
    {
      image: smmec,
      technologies: t("works.3.technologies"),
      title: t("works.3.title"),
      description: t("works.3.description"),
      isSecret: true,
    },
    {
      image: sal,
      technologies: t("works.4.technologies"),
      title: t("works.4.title"),
      description: t("works.4.description"),
      isSecret: true,
    },
    {
      image: aceem,
      technologies: t("works.5.technologies"),
      title: t("works.5.title"),
      description: t("works.5.description"),
      isSecret: true,
    },
    // {
    //   image: aceem,
    //   technologies: t("works.6.technologies"),
    //   title: t("works.6.title"),
    //   description: t("works.6.description"),
    //   isSecret: true,
    // },
  ];

  return (
    <div id={t("headers.menu.4")} className="flex pt-28">
      <Space />
      <div className="w-6/8 relative">
        <Title text={t("headers.menu.4")} lineWidth="4/6" />
        <div className="mt-12 grid xl:grid-cols-3 grid-cols-1 gap-16 w-full">
          {workBoxes.map((box, index) => (
            <div key={index} ref={(el) => (workBoxRefs.current[index] = el)}>
              <WorkBox
                image={box.image}
                link={box.link}
                technologies={box.technologies}
                title={box.title}
                description={box.description}
                isSecret={box.isSecret}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
