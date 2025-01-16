import React, { useEffect, useRef } from "react";
import "./styles/Hero.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="hero">
      <div className="inner">
        <div id="heroContent">
          <h1>{t("hero.title")}</h1>
          <h5>{t("hero.subtitle")}</h5>
          <button className="primary">{t("hero.button")}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
