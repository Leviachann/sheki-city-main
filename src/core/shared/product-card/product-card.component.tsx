import { useNavigate } from 'react-router-dom';
import useLocalization from 'assets/lang';
import { IProduct } from 'pages/mehsullar/mehsullar.d';
import { useProductCardStyles } from './product-card.style';
import placeholderImage from 'assets/images/statics/news.png';
import { Routes, goTo } from 'router/routes';
import { S3_BASE_URL } from 'core/configs/axios.config';

const ProductCard = ({ id, name, images }: IProduct) => {
    const navigate = useNavigate();
    const translate = useLocalization();
    const classes = useProductCardStyles();

    const handleNavigate = () => {
        navigate(goTo(Routes.mehsulDetail, id));
    };

    const primaryImage = images?.find(img => img.isPrimary) ?? images?.[0];
    const displayImage = primaryImage?.imageUrl
        ? `${S3_BASE_URL}${primaryImage.imageUrl}`
        : placeholderImage;

    return (
        <div className={classes.card} onClick={handleNavigate}>
            <div className={classes.imageContainer}>
                <img src={displayImage} alt={name} />
            </div>

            <h3 className={classes.title}>{name}</h3>

            <button
                className={classes.button}
                onClick={(e) => {
                    e.stopPropagation();
                    handleNavigate();
                }}
            >
                {translate('indi_alin') as string}
            </button>
        </div>
    );
};

export default ProductCard;