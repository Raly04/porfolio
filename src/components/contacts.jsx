import ContactSvg from "../assets/contact.svg";
import MyButton from "./my.button";
import Space from "./space";
import Title from "./title";
import sendIcon from "../assets/send.svg";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import loadingIcon from "../assets/loading.svg";
import successIcon from "../assets/check.png";
import failedIcon from "../assets/close.png";

function Contacts() {
  const [t] = useTranslation("global");
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [currentIcon, setCurrentIcon] = useState(sendIcon);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5
      }
    }
  };
  
  const imgVariants = {
    hidden: { 
      y: window.innerWidth < 768 ? 30 : 80, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: window.innerWidth < 768 ? 0.8 : 1.2,
        ease: [0.215, 0.61, 0.355, 1] // power3.out equivalent
      }
    }
  };
  
  const formVariants = {
    hidden: { 
      y: window.innerWidth < 768 ? 30 : 80, 
      opacity: 0,
      scale: 0.9
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: window.innerWidth < 768 ? 0.8 : 1.2,
        delay: window.innerWidth < 768 ? 0.1 : 0.3,
        ease: [0.215, 0.61, 0.355, 1] // power3.out equivalent
      }
    }
  };
  
  const arrowVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0,
      rotate: -45
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: window.innerWidth < 768 ? 0.6 : 1,
        delay: window.innerWidth < 768 ? 0.2 : 0.6,
        ease: window.innerWidth < 768 ? 
          [0.25, 0.46, 0.45, 0.94] : // power2.out equivalent
          [0.34, 1.56, 0.64, 1] // elastic.out equivalent
      }
    }
  };

  //email config

  const sendEmail = (e) => {
    e.preventDefault();
    setCurrentIcon(loadingIcon);
    emailjs
      .sendForm("service_3q3bmj9", "template_40zy4uo", formRef.current, {
        publicKey: "WrJyXpj7LHMfVVgpg",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setCurrentIcon(successIcon);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setCurrentIcon(failedIcon);
        }
      );
  };
  return (
    <div id={t("headers.menu.5")} className="flex pt-28">
      <Space />
      <motion.div 
        ref={containerRef}
        className="w-6/8 relative"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute -left-10 top-20 w-7 h-7 border-2 border-primary/20 rounded-full"
          animate={{
            x: [0, 12, 0],
            y: [0, -8, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute right-1/4 -top-6 w-5 h-5 bg-primary/10 rounded-md rotate-45"
          animate={{
            y: [0, 15, 0],
            rotate: [45, 90, 45],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div 
          className="absolute right-10 top-40 w-4 h-4 border border-primary/30 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <Title text={t("headers.menu.5")} lineWidth="5/6" />
        <div className="mt-12 grid xl:grid-cols-2 grid-cols-1 gap-16 w-full">
          <motion.div
            className="flex flex-col items-start justify-center gap-8"
            variants={imgVariants}
          >
            <div className="text-6xl font-bold">
              <div>{t("body.g_a_p")}</div>
              <div className="text-primary mt-4">{t("body.i_m")} </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-8">
              <motion.div 
                className="hidden lg:block"
                variants={arrowVariants}
              >
                <svg
                  width="147"
                  height="151"
                  viewBox="0 0 163 130"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.72367 27.274C9.49114 15.0548 15.8881 -1.32746 32.6123 3.15379C40.5593 5.28317 46.7344 17.1295 46.2487 24.6615C45.8457 30.9093 47.5811 38.8003 41.1332 42.6902C36.0686 45.7456 29.6683 45.3116 25.6745 40.5815C14.3328 27.1489 35.2904 17.7371 45.6826 19.7922C59.8673 22.5972 76.3042 57.9365 63.9494 69.0979C53.3564 78.6676 46.3867 63.9822 53.7858 55.2718C64.1942 43.0187 73.7683 42.63 85.8718 55.7353C95.3223 65.9679 92.4801 84.0285 84.8549 93.5294C83.2712 95.5027 77.3438 109.315 75.9126 107.93C61.7901 94.2659 86.81 74.1341 100.713 76.9965C116.687 80.2853 132.813 83.7953 143.371 96.4387C149.049 103.238 159.529 127.563 157.515 118.936C154.995 108.141 152.576 93.3273 157.05 82.5753C158.382 79.3759 162.386 69.0566 159.005 79.0729C155.523 89.3885 152.216 98.3938 150.799 108.637C150.484 110.916 153.446 114.15 154.457 116.083C155.313 117.721 148.649 115.617 147.853 115.534C140.977 114.82 134.693 117.468 128.802 120.759C123.544 123.697 117.526 129.21 113.561 127.25"
                    stroke="#00ADB5"
                    strokeOpacity="0.2"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <ContactSvg />
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            variants={formVariants}
          >
            <form
              ref={formRef}
              onSubmit={sendEmail}
              action=""
              className="grid grid-cols-2 gap-8"
            >
              <input
                type="text"
                placeholder={t("form.name")}
                className="input grid-cols-1"
                name="from_name"
                required
              />
              <input
                type="email"
                required
                placeholder={t("form.email")}
                className="input grid-cols-2"
                name="from_email"
              />
              <input
                required
                type="text"
                placeholder={t("form.title")}
                className="input col-span-2"
                name="tile"
              />
              <textarea
                type="text"
                placeholder={t("form.message")}
                className="input min-h-60 col-span-2"
                name="message"
              />
              <div>
                <MyButton
                  borderColor="primary"
                  img={currentIcon}
                  bg="background"
                  textColor="foreground"
                  text={t("btn.send")}
                />
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contacts;
