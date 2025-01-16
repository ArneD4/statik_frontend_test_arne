import './styles/Sectoren.scss'
import { useTranslation } from "react-i18next";

const Sectoren = () => {
    const { t, i18n } = useTranslation();

    return (
        <div id="sectoren">
            <div className="inner">
            <p className='smallRedTitle'>{t('sectoren.subtitle')}</p>
            <h4>{t('sectoren.title')}</h4>
            <p>{t('sectoren.text')}</p>
            <div id="sectorenLijst">
            {t("sectoren.sectorenLijst", { returnObjects: true }).map(
            (item, index) => (
              <div className="sectorItem">
                <img className="sectorIcon" src={item.img} alt="" />
                <button>
                    {item.title}
                    <img src="/images/icons/right_red.png" alt="" />
                </button>
              </div>
            )
          )}
            </div>
            <button className='secondary'>
                {t('sectoren.button')}
                <img src="/images/icons/right_red.png" alt="" />
            </button>
            </div>
        </div>
    )
}


export default Sectoren;