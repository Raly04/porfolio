import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Code from "./code.block";
import SkillBox from "./skill.box";
import Space from "./space";
import Title from "./title";
import { useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

const langs = ["Java C# golang JS", "Dart"];
const db = ["Mongo DB MySQL", "PostgresSQL", "MariaDB"];
const frams = ["React Js Express Js", "Spring Boot"];
const mob = ["Flutter"];
const tools = ["Vs Code Linux", "Inkscape"];
const others = ["Github Restful API", "JPA"];
const code = ` // there are all services that i can provide

const my_services = {
  web_frontend_developement: ["React", "HTML & CSS , JS"],
  mobile_frontend_developement: ["Flutter"],
  backend_developement: ["Spring Boot", "Express Js", "Golang"],
  tooling: ["Golang"],
};

/*I can also build desktop application with Java and C#
Hire me now !!*/`;

export default function Skills() {
  const [t, i18n] = useTranslation("global");
  const skillBoxRefs = useRef([]);
  const codeRef = useRef();

  useEffect(() => {
    skillBoxRefs.current.forEach((ref, index) => {
      gsap.fromTo(
        ref,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.5,
          ease: "elastic.out(0.5, 0.15)",
          scrollTrigger: {
            trigger: ref,
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });
    gsap.fromTo(
      codeRef.current,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "elastic.out(0.5, 0.15)",
        scrollTrigger: {
          trigger: codeRef.current,
          toggleActions: "play reverse play reverse",
          start: "top bottom", // Ajuster selon les besoins
        },
      }
    );
  }, []);

  return (
    <div id={t("headers.menu.3")} className="flex mt-28">
      <Space />
      <div className="w-6/8 relative">
        <Title text={t("headers.menu.31")} lineWidth="2/6" />
        <div className="mt-12 grid xl:grid-cols-2 grid-cols-1 gap-16">
          <div ref={codeRef}>
            <Code
              code={t("skills.code")}
              language="javascript"
              showLineNumbers={true}
            />
          </div>
          <div className="flex md:flex-row flex-col items-start justify-center gap-8">
            <div className="flex-col flex gap-4">
              <div ref={(el) => (skillBoxRefs.current[0] = el)}>
                <SkillBox group={t("skills.list.1")} elements={frams} />
              </div>
              <div ref={(el) => (skillBoxRefs.current[1] = el)}>
                <SkillBox group={t("skills.list.6")} elements={mob} />
              </div>
            </div>
            <div className="flex-col flex gap-4">
              <div ref={(el) => (skillBoxRefs.current[2] = el)}>
                <SkillBox group={t("skills.list.2")} elements={tools} />
              </div>
              <div ref={(el) => (skillBoxRefs.current[3] = el)}>
                <SkillBox group={t("skills.list.4")} elements={others} />
              </div>
            </div>
            <div className="flex-col flex gap-4">
              <div ref={(el) => (skillBoxRefs.current[4] = el)}>
                <SkillBox group={t("skills.list.7")} elements={db} />
              </div>
              <div ref={(el) => (skillBoxRefs.current[5] = el)}>
                <SkillBox group={t("skills.list.5")} elements={langs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
