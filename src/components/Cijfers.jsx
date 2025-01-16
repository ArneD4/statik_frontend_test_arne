import "./styles/Cijfers.scss";
import { useTranslation } from "react-i18next";

const Cijfers = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="cijfers">
      <div className="inner">
        <p className="smallRedTitle">{t("cijfers.subtitle")}</p>
        <h2>{t("cijfers.title")}</h2>
        <p>{t("cijfers.text")}</p>

        <div className="grid">
          <div className="grid-item" id="grid-item-1"></div>
          <div className="grid-item" id="grid-item-2">
            <p>{t("cijfers.cijferLijst.0.text_1")}</p>
            <h3>{t("cijfers.cijferLijst.0.text_2")}</h3>
            <p>{t("cijfers.cijferLijst.0.text_3")}</p>
          </div>
          <div className="grid-item" id="grid-item-3"></div>
          <div className="grid-item" id="grid-item-4">
            <p>{t("cijfers.cijferLijst.1.text_1")}</p>
            <h3>{t("cijfers.cijferLijst.1.text_2")}</h3>
            <p>{t("cijfers.cijferLijst.1.text_3")}</p>
          </div>
          <div className="grid-item" id="grid-item-5"></div>
          <div className="grid-item" id="grid-item-6">
            <p>{t("cijfers.cijferLijst.2.text_1")}</p>
            <h3>{t("cijfers.cijferLijst.2.text_2")}</h3>
            <p>{t("cijfers.cijferLijst.2.text_3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cijfers;
