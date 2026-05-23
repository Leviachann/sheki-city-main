import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import { useGetProductDetail } from './actions/mehsul-detail.query';
import { useMehsulDetailStyles } from './mehsul-detail.style';
import placeholderImage from 'assets/images/statics/news.png';
import { Routes } from 'router/routes';

const MehsulDetailComponent = () => {
    const { id } = useParams<{ id: string }>();
    const translate = useLocalization();
    const classes = useMehsulDetailStyles();
    const navigate = useNavigate();

    const productId = id;
    const { data, isLoading, isError } = useGetProductDetail(productId);

    const productImage = useMemo(() => {
        const image = data?.images?.find((img) => img.isPrimary) || data?.images?.[0];
        if (!image) return placeholderImage;

        const apiMain = import.meta.env.VITE_APP_API_MAIN || '';
        const baseDomain = apiMain.split('/api/v1/')[0] || 'https://dev-football-club-api.azintelecom.az';
        return image.imageUrl.startsWith('http') ? image.imageUrl : `${baseDomain}${image.imageUrl}`;
    }, [data]);

    const handleBack = () => navigate(Routes.mehsullar);

    if (isLoading) {
        return <div className={classes.errorMessage}>{translate('loading') || 'Yüklənir...'}</div>;
    }

    if (isError || !data) {
        return <div className={classes.errorMessage}>{translate('not_found') || 'Məhsul tapılmadı'}</div>;
    }

    return (
        <div className={classes.wrapper}>
            <PageHeroComponent
                title={data.name}
                subtitle={translate('mehsullar_subtitle') as string}
            />
            <div className={classes.detailContent}>
                <div className={classes.preview}>
                    <img src={productImage} alt={data.name} className={classes.image} />
                </div>

                <div className={classes.infoCard}>
                    <div className={classes.headerRow}>
                        <div>
                            <h1 className={classes.title}>{data.name}</h1>
                            <p className={classes.price}>
                                {data.discountPrice ?? data.basePrice} {data.currency}
                            </p>
                        </div>
                        <button className={classes.backButton} onClick={handleBack}>
                            {translate('geri') || 'Geri'}
                        </button>
                    </div>

                    {data.description && (
                        <p className={classes.description}>{data.description}</p>
                    )}

                    <ul className={classes.metaList}>
                        <li>
                            <strong>{translate('kateqoriya') || 'Kateqoriya'}:</strong> {data.category?.name}
                        </li>
                        <li>
                            <strong>{translate('mövcud') || 'Mövcud'}:</strong> {data.isAvaible ? translate('beli') || 'Bəli' : translate('xe') || 'Xeyr'}
                        </li>
                        <li>
                            <strong>{translate('valyuta') || 'Valyuta'}:</strong> {data.currency}
                        </li>
                    </ul>

                    <button className={classes.actionButton}>{translate('indi_alin') || 'İndi alın'}</button>
                </div>
            </div>
        </div>
    );
};

export default MehsulDetailComponent;