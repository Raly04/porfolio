import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SelectLang() {
  const [t, i18n] = useTranslation("global");
  const [lang, setLang] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <select
      onChange={(e) => setLang(e.target.value)}
      value={lang}
      className="bg-transparent text-foreground"
    >
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
}
