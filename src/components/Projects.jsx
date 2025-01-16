import './styles/Projects.scss';



import { useTranslation } from "react-i18next";

const Projects = () => {
      const { t, i18n } = useTranslation();
    return (
        <div id="projects">
            <div className="inner">
            <p className="smallRedTitle">{t('projecten.subtitle')}</p>
            <h2>{t('projecten.title')}</h2>
            <p>{t('projecten.text')}</p>
            <button>
                    {t('projecten.button')}
                    <img src="/images/icons/right_red.png" alt="" />
                </button>
            </div>
        </div>
    )
    }

export default Projects;