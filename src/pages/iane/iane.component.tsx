import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import { useIaneStyles } from './iane.style';
import fifLogo from 'assets/images/icons/fif-logo.png';
import useLocalization from 'assets/lang';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';

const IaneComponent = () => {
  const classes = useIaneStyles();
  const translate = useLocalization();
  return (
    <div>
      <PageHeroComponent
        title={translate('iane')}
        subtitle={translate('iane_subtitle')}
      />

      <PageHeaderComponent current={translate('geri') as string} />
      <div className={classes.container}>

        <div className={classes.contentArea}>
          <img
            src={fifLogo}
            alt='FUTBOLUN İNKİŞAF FONDU'
            className={classes.logo}
          />

          <h2 className={classes.title}>{translate('iane_title')}</h2>

          <p
            className={classes.description}
            dangerouslySetInnerHTML={{ __html: translate('iane_description') }}
          />

          <a
            href='https://fif.az/donate'
            target='_blank'
            rel='noopener noreferrer'
            className={classes.donateLink}
          >
            https://fif.az/donate
          </a>
        </div>
      </div>
    </div>
  );
};

export default IaneComponent;
