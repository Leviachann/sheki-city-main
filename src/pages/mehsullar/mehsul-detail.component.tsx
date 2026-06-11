import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalization from 'assets/lang';
import { useGetProductDetail } from './actions/mehsul-detail.query';
import { useMehsulDetailStyles } from './mehsul-detail.style';
import placeholderImage from 'assets/images/statics/news.png';
import { Routes } from 'router/routes';
import { S3_BASE_URL } from 'core/configs/axios.config';

const MehsulDetailComponent = () => {
    const { id } = useParams<{ id: string }>();
    const translate = useLocalization();
    const classes = useMehsulDetailStyles();
    const navigate = useNavigate();

    const { data, isLoading, isError } = useGetProductDetail(id);

    const productImage = useMemo(() => {
        const image = data?.images?.find(img => img.isPrimary) ?? data?.images?.[0];
        return image?.imageUrl 
            ? `${S3_BASE_URL}${image.imageUrl}` 
            : placeholderImage;
    }, [data]);

    const handleBack = () => navigate(Routes.mehsullar);

    if (isLoading) {
        return <div className={classes.errorMessage}>{translate('yuklenir') as string}</div>;
    }

    if (isError || !data) {
        return <div className={classes.errorMessage}>{translate('mehsul_tapilmadi') as string}</div>;
    }

    return (
        <div className={classes.wrapper}>
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
                            {translate('geri') as string}
                        </button>
                    </div>

                    {data.description && (
                        <p className={classes.description}>{data.description}</p>
                    )}

                    <ul className={classes.metaList}>
                        <li>
                            <strong>{translate('kateqoriya') as string}:</strong> {data.category?.name}
                        </li>
                        <li>
                            <strong>{translate('movcud') as string}:</strong>{' '}
                            {data.isAvaible ? translate('beli') as string : translate('xeyr') as string}
                        </li>
                        <li>
                            <strong>{translate('valyuta') as string}:</strong> {data.currency}
                        </li>
                    </ul>

                    <button className={classes.actionButton}>
                        {translate('indi_alin') as string}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MehsulDetailComponent;