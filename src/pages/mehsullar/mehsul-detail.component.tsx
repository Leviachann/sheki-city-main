import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import useLocalization from 'assets/lang';
import { useGetProductDetail } from './actions/mehsul-detail.query';
import { useMehsulDetailStyles } from './mehsul-detail.style';
import placeholderImage from 'assets/images/statics/news.png';
import { Routes } from 'router/routes';
import { S3_BASE_URL } from 'core/configs/axios.config';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { SizeSelectorComponent } from 'core/shared/size-selector/size-selector.component';

const MehsulDetailComponent = () => {
  const { id } = useParams<{ id: string }>();
  const translate = useLocalization();
  const classes = useMehsulDetailStyles();

  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    null,
  );

  const { data, isLoading, isError } = useGetProductDetail(id);

  const productImage = useMemo(() => {
    const image =
      data?.images?.find((img) => img.isPrimary) ?? data?.images?.[0];
    return image?.imageUrl
      ? `${S3_BASE_URL}${image.imageUrl}`
      : placeholderImage;
  }, [data]);

  const breadcrumbs = useMemo(
    () => [
      { label: translate('ana_sehife') as string, path: Routes.home },
      { label: translate('mehsullar') as string, path: Routes.mehsullar },
      { label: data?.name || '' },
    ],
    [data?.name, translate],
  );

  const variantsList = data?.variants || [];

  if (isLoading) {
    return (
      <div className={classes.loadingMessage}>
        {translate('yuklenir') as string}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className={classes.errorMessage}>
        {translate('mehsul_tapilmadi') as string}
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <PageHeaderComponent breadcrumbs={breadcrumbs} />

      <div className={classes.detailContent}>
        <div className={classes.textSection}>
          <h1 className={classes.title}>{data.name}</h1>
          <p className={classes.price}>
            {data.discountPrice ?? data.basePrice}{' '}
            <span className={classes.currency}>₼</span>
          </p>
          {data.description && (
            <p className={classes.description}>{data.description}</p>
          )}
        </div>
        <div className={classes.preview}>
          <img src={productImage} alt={data.name} className={classes.image} />
        </div>
        <div className={classes.infoCard}>
          <SizeSelectorComponent
            variants={variantsList}
            selectedVariantId={selectedVariantId}
            onSelectVariant={setSelectedVariantId}
          />

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
