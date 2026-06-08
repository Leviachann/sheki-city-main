import { useNewsCardStyles } from './news-card.style';
import { NewsCardProps } from './news-card';
import { ClockIcon } from 'assets/images/icons/clock';
import { ArrowLink } from 'assets/images/icons/arrows'; 
import useLocalization from 'assets/lang';
import { Routes, goTo } from 'router/routes';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({ image, title, description, date, id }: NewsCardProps) => {
    const classes = useNewsCardStyles();
    const navigate = useNavigate();
    const translate = useLocalization();

    const handleNavigate = () => {
        navigate(goTo(Routes.xeberDetail, id));
    };

    const truncateText = (text: string, maxLength: number) => {
        if (!text) return '';
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const truncatedTitle = truncateText(title, 35); 
    const truncatedDescription = truncateText(description, 60);

    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <img src={image} alt={title} className={classes.image} />
            </div>

            <h3 className={classes.title}>{truncatedTitle}</h3>
            
            <p className={classes.description}>
                {truncatedDescription}
            </p>

            <div className={classes.footer}>
                <div className={classes.dateBox}>
                    <ClockIcon/>
                    <span>{date}</span>
                </div>

                <div className={classes.moreLink} onClick={handleNavigate}>
                    <span>{translate('etrafli')}</span>
                    <ArrowLink/>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;