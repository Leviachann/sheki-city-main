import React from 'react';
import useLocalization from 'assets/lang';
import { IProduct } from 'pages/mehsullar/mehsullar.d';
import { useProductCardStyles } from './product-card.style';
import placeholderImage from 'assets/images/statics/news.png';

const ProductCard: React.FC<IProduct> = (props) => {
    const translate = useLocalization();
    const classes = useProductCardStyles();

    // Dynamically derive the base domain from the VITE_APP_API_MAIN environment variable
    const apiMain = import.meta.env.VITE_APP_API_MAIN || '';
    const baseDomain = apiMain.split('/api/v1/')[0] || 'https://dev-football-club-api.azintelecom.az';

    const getFullImageUrl = (path?: string) => {
        if (!path) return '';
        if (path.startsWith('http')) return path;
        return `${baseDomain}${path}`;
    };

    // Find primary image or fallback to first image or placeholder
    const primaryImage = props.images?.find(img => img.isPrimary) || props.images?.[0];
    const displayImage = primaryImage ? getFullImageUrl(primaryImage.imageUrl) : placeholderImage;

    return (
        <div className={classes.card}>
            <div className={classes.imageContainer}>
                <img src={displayImage} alt={props.name} />
            </div>
            
            <div className={classes.variants}>
                <div className={classes.variantDot}></div>
                <div className={classes.variantDot}></div>
                <div className={classes.variantDot}></div>
            </div>

            <h3 className={classes.title}>{props.name}</h3>

            <button className={classes.button}>
                {translate('indi_alin') as string}
            </button>
        </div>
    );
};

export default ProductCard;
