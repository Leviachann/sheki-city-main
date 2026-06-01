import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import useLocalization from 'assets/lang';
import clubImg from '../../assets/images/statics/club-history.jpg';
import { useKlubTarixiStyles } from './klub-tarixi.style';

const KlubTarixiComponent = () => {
    const classes = useKlubTarixiStyles();
    const translate = useLocalization();
  
  return (
    <div>
      <PageHeroComponent
        title={translate('klub_tarixi')}
        subtitle={translate('klub_tarixi_desc')}
      />
      <PageHeaderComponent current={translate('geri') as string} />
      <div className={classes.mainContainer}>
      <h2 className={classes.header}>{translate('klub_tarixi_title')}</h2>
      <img className={classes.coverImage} src={clubImg} />
      <h2 className={classes.header}>{translate('klub_tarixi_date_subtitle')}</h2>
      </div>
      <div className={classes.content}>
        <p> {translate('klub_tarixi_p1')}</p>
        <p> {translate('klub_tarixi_p2')}</p>
        <p> {translate('klub_tarixi_p3')}</p>
        <p> {translate('klub_tarixi_footer')}</p>
      </div>
    </div>
  );
};

export default KlubTarixiComponent;
