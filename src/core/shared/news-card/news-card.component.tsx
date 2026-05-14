import { useNewsCardStyles } from './news-card.style';
import { NewsCardProps } from './news-card';
import { ClockIcon } from 'assets/images/icons/clock';
import { ArrowLink } from 'assets/images/icons/arrows'; 
import useLocalization from 'assets/lang';

const NewsCard = ({ image, title, description, date}: NewsCardProps) => {
    const classes = useNewsCardStyles();
    const translate = useLocalization();

    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <img src={image} alt={title} className={classes.image} />
            </div>

            <h3 className={classes.title}>{title}</h3>
            
            <p className={classes.description}>
                {description}
            </p>

            <div className={classes.footer}>
                <div className={classes.dateBox}>
                    <ClockIcon/>
                    <span>{date}</span>
                </div>

                <div className={classes.moreLink}>
                    <span>{translate('etrafli')}</span>
                    <ArrowLink/>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;