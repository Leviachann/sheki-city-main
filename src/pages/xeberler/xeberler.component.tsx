import PageHeroComponent from "core/shared/page-hero/page-hero.component";
import useLocalization from "assets/lang";
import { ArrowDown, ArrowLeft } from "assets/images/icons/arrows";
import { SearchIcon } from "assets/images/icons/search";

const XeberlerComponent = () => {
  const translate = useLocalization();
    return (
      <>
        <PageHeroComponent title={translate("xeberler")} subtitle={translate("xeberler_subtitle")}/>
        <ArrowLeft/>
        <SearchIcon/>
        <ArrowDown/>
      </>

    );
};

export default XeberlerComponent;