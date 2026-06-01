import { useAchievementsCardStyles } from './achievements-card.style';
import { AchievementCardProps } from './achievements-card';

const AchievementsCard = ({ image, title, count, date, id }: AchievementCardProps) => {
    const classes = useAchievementsCardStyles();

    return (
        <div className={classes.card}>
            <div className={classes.imageWrapper}>
                <img src={image} alt={title} className={classes.image} />
            </div>

            <div className={classes.contentWrapper}>
                <h3 className={classes.title}>{title}</h3>
                <span className={classes.date}>{date}</span>
            </div>
            
            <p className={classes.count}>
                {count}
            </p>
        </div>
    );
};

export default AchievementsCard;