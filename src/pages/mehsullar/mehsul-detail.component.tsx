import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useLocalization from 'assets/lang';
import { useGetProductDetail } from './actions/mehsul-detail.query';
import { useMehsulDetailStyles } from './mehsul-detail.style';
import placeholderImage from 'assets/images/statics/news.png';
import { Routes } from 'router/routes';
import { S3_BASE_URL } from 'core/configs/axios.config';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';

const MehsulDetailComponent = () => {
    const { id } = useParams<{ id: string }>();
    const translate = useLocalization();
    const classes = useMehsulDetailStyles();
    const navigate = useNavigate();

    // Track active size variants selection locally
    const [selectedVariantId, setSelectedVariantId] = useState<number | null>(null);

    const { data, isLoading, isError } = useGetProductDetail(id);

    const productImage = useMemo(() => {
        const image = data?.images?.find(img => img.isPrimary) ?? data?.images?.[0];
        return image?.imageUrl 
            ? `${S3_BASE_URL}${image.imageUrl}` 
            : placeholderImage;
    }, [data]);

    // Format breadcrumbs dynamically using the loaded API response fields
    const breadcrumbs = useMemo(() => [
        { label: translate('ana_sehife') as string, path: Routes.home },
        { label: translate('mehsullar') as string, path: Routes.mehsullar },
        { label: data?.name || '' },
    ], [data?.name, translate]);

    // Sift out size parameters conditionally from response payload
    const variantsList = data?.variants || [];
    const hasSizeVariants = variantsList.length > 0 && variantsList.some(v => v.productSize?.name);

    if (isLoading) {
        return <div className={classes.loadingMessage}>{translate('yuklenir') as string}</div>;
    }

    if (isError || !data) {
        return <div className={classes.errorMessage}>{translate('mehsul_tapilmadi') as string}</div>;
    }  

    return (
        <div className={classes.wrapper}>
            <PageHeaderComponent breadcrumbs={breadcrumbs} />
            
            <div className={classes.detailContent}>
                {/* Left Side Window Image Section */}
                <div className={classes.preview}>
                    <img src={productImage} alt={data.name} className={classes.image} />
                </div>

                {/* Right Side Info Section */}
                <div className={classes.infoCard}>
                    <div>
                        <h1 className={classes.title}>{data.name}</h1>
                        <p className={classes.price}>
                            {data.discountPrice ?? data.basePrice} {data.currency}
                        </p>
                    </div>

                    {data.description && (
                        <p className={classes.description}>{data.description}</p>
                    )}

                    {/* Size Selector: Renders ONLY if variants exist in API payload */}
                    {hasSizeVariants && (
                        <div className={classes.sizeSection}>
                            <span className={classes.sizeLabel}>Məhsul</span>
                            <div className={classes.sizeGrid}>
                                {variantsList.map((variant) => {
                                    const sizeName = variant.productSize?.name;
                                    if (!sizeName) return null;
                                    
                                    const isSelected = selectedVariantId === variant.id;
                                    const isOutOfStock = variant.stockQty === 0;

                                    return (
                                        <button
                                            key={variant.id}
                                            disabled={isOutOfStock}
                                            className={`${classes.sizeButton} ${isSelected ? 'active' : ''} ${isOutOfStock ? 'disabled' : ''}`}
                                            onClick={() => setSelectedVariantId(variant.id)}
                                        >
                                            {sizeName}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <div className={classes.actionRow}>
                        <button className={classes.actionButton}>
                            {translate('indi_alin') as string}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MehsulDetailComponent;