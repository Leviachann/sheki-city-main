import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import useLocalization from 'assets/lang';

const KlubHaqqindaComponent = () => {
  const translate = useLocalization();
    return (
    <div>
        <PageHeaderComponent current={translate('geri') as string}/>
    </div>
    );
};

export default KlubHaqqindaComponent;