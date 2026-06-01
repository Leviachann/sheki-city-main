import useLocalization from 'assets/lang';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
const OyunDetailComponent = () => {
  const translate = useLocalization();
  return (
    <div>
      <PageHeroComponent
        title={translate('oyunlar') as string}
        subtitle={translate('oyunlar_desc') as string}
      />
      <PageHeaderComponent current={translate('geri') as string} />
    </div>
  );
};

export default OyunDetailComponent;
