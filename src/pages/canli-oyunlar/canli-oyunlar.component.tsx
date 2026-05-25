import useLocalization from 'assets/lang';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { useCanliOyunlarStyles } from './canli-oyunlar.style';

const CanliOyunlarComponent = () => {
  const translate = useLocalization();
  const classes = useCanliOyunlarStyles();
  const embedUrl = 'https://www.youtube.com/embed/MiJIODpKngw';

  return (
    <div>
      <PageHeroComponent title={translate('canli_oyunlar')} />

      <PageHeaderComponent current={translate('canli_yayin') as string} />

      <div className={classes.videoWrapper}>
        <iframe
          className={classes.iframe}
          src={embedUrl}
          title='Canlı Yayım'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default CanliOyunlarComponent;
