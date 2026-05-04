import PageHeroComponent from "core/shared/page-hero/page-hero.component";
import useLocalization from "assets/lang";

const XeberlerComponent = () => {
  const translate = useLocalization();
    return (
      <>
        <PageHeroComponent title={translate("xeberler")} subtitle={translate("xeberler_subtitle")}/>
      </>

    );
};

export default XeberlerComponent;