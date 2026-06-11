import { useNavigate } from 'react-router-dom';
import { ArrowOut } from 'assets/images/icons/arrows';
import { useForumStyles } from './forum.style';
import { ForumCardProps } from './models/forum.model';

const ForumCard = ({ category }: ForumCardProps) => {
  const classes = useForumStyles();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(category.path);
  };

  return (
    <div className={classes.card} onClick={handleCardClick}>
      <div className={classes.iconContainer}>
        {category.icon}
      </div>
      
      <div className={classes.textContainer}>
        <div className={classes.cardTitle}>{category.title}</div>
        <div className={classes.cardDesc}>{category.desc}</div>
      </div>

      <div>
        <ArrowOut />
      </div>
    </div>
  );
};

export default ForumCard;