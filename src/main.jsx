// main.tsx or main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import "./index.css";

import global_en from "./translations/en/global.json";
import global_fr from "./translations/fr/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: global_en,
    },
    fr: {
      global: global_fr,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <I18nextProvider i18n={i18next}>
        <main className="dark text-foreground bg-background font-firacode w-full h-full">
          <App />
        </main>
      </I18nextProvider>
    </NextUIProvider>
  </React.StrictMode>
);
