import { useTranslation } from "react-i18next";
import { NyAinaLogo } from "./nyaina.logo";
import Space from "./space";
import Title from "./title";
import SocialMediaFooter from "./social.media.footer";

function Footer() {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="flex mt-28 pb-8">
      <Space />
      <div className="w-6/8 relative">
        <Title text="" lineWidth="1/6" />
        <div className="flex flex-col items-center justify-center">
          <div className=" flex xl:flex-row flex-col items-center justify-between w-full">
            <div className="flex flex-col items-center gap-1">
              <div className="flex md:flex-row flex-col items-center gap-1">
                <NyAinaLogo />
                <p className="font-bold text-inherit">{t("info.logo_name")}</p>
                <p className="text-secondary md:ml-4">{t("info.mail")}</p>
              </div>
              <div className="">{t("info.job")}</div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="flex md:flex-row flex-col items-center gap-1">
                <p className="font-bold text-inherit">{t("others.p_n")}</p>
                <p className="text-secondary ml-4">Whatsapp</p>
              </div>
              <div>{t("info.n")}</div>
            </div>
          </div>
          <div className="text-secondary mt-16 flex flex-col items-center justify-center">
            <SocialMediaFooter />
            <div>Copyright 2024 . {t("others.m_b_na")}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
