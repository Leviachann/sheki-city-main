import React from 'react';
import { SizeSelectorProps } from './size-selector.interface';
import useLocalization from 'assets/lang';
import { useSizeSelectorStyles } from './size-selector.style';
import { useGetProductSizes } from './actions/size-selector.query';

export const SizeSelectorComponent: React.FC<SizeSelectorProps> = ({
  variants,
  selectedVariantId,
  onSelectVariant,
}) => {
  const translate = useLocalization();
  const classes = useSizeSelectorStyles();
  const { data: masterSizes, isLoading, isError } = useGetProductSizes();

  if (isLoading) {
    return (
      <div className={classes.sizeSection}>
        <div className={classes.skeletonText} />
        <div className={classes.skeletonGrid}>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={classes.skeletonButton} />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !masterSizes) {
    return null;
  }

  return (
    <div className={classes.sizeSection}>
      <span className={classes.sizeLabel}>{translate('mehsul')}</span>
      <hr className={classes.divide} />
      <div className={classes.sizeGrid}>
        {masterSizes.map((size) => {
          const matchingVariant = variants.find(
            (v) =>
              v.productSize?.name?.trim().toUpperCase() ===
              size.name.trim().toUpperCase(),
          );

          const isSelected = matchingVariant
            ? selectedVariantId === matchingVariant.id
            : false;
          const isUnavailableOrOutOfStock =
            !matchingVariant || matchingVariant.stockQty === 0;

          return (
            <button
              key={size.id}
              type='button'
              disabled={isUnavailableOrOutOfStock}
              className={`${classes.sizeButton} ${isSelected ? 'active' : ''} ${
                isUnavailableOrOutOfStock ? 'disabled' : ''
              }`}
              onClick={() =>
                matchingVariant && onSelectVariant(matchingVariant.id)
              }
            >
              {size.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
