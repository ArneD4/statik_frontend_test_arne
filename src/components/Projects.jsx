import "./styles/Projects.scss";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="projects">
      <div className="inner">
        <p className="smallRedTitle">{t("projecten.subtitle")}</p>
        <h2>{t("projecten.title")}</h2>
        <p>{t("projecten.text")}</p>
        <button>
          {t("projecten.button")}
          <img src="/images/icons/right_red.png" alt="" />
        </button>
      </div>
      <div id="projectCarousel">
        <div className="inner" id="projectCarouselNavigation">
            <button id="prev">
                <img src="/images/icons/right_red_big.png" alt="" />
            </button>
            <button id="next">
                <img src="/images/icons/right_red_big.png" alt="" />
            </button>
        </div>
        <div id="projectCarouselItems">
          {t("projecten.projectenLijst", { returnObjects: true }).map(
            (item, index) => (
              <div className="projectItem" style={{backgroundImage: `url(${item.img})`}} key={index}>
                <div className="projectItemContent">
                <div className="badge">
                  <p>{item.title}</p>
                </div>
                <h4>{item.subtitle}</h4>
                <div className="hoverContent">
                <p>{item.text}</p>
                <button>
                  {item.button}
                  <img src="/images/icons/right_white.png" alt="" />
                </button>
                </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
