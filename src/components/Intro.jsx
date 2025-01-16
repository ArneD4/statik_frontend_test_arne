import './styles/Intro.scss';
import { useTranslation } from "react-i18next";

const Intro = () => {
      const { t, i18n } = useTranslation();
    return (
        <div id="intro">
            <div className="inner">
                <div className="introContent" id="introLeft">
                <p className="smallRedTitle">{t('intro.subtitle')}</p>
                <h2>{t('intro.title')}</h2>
                </div>
                <div className="introContent" id="introRight">
                <p>{t('intro.text')}</p>
                <button className="secondary">{t('intro.button')}</button>
                </div>
            </div>
        </div>
    )
    }

export default Intro;