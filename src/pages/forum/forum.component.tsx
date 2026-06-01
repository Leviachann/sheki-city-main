import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import { useForumStyles } from './forum.style';
import useLocalization from 'assets/lang';
import { ArrowLeft } from 'assets/images/icons/arrows';
import FootballIcon from 'assets/images/icons/ball.png';
import ChatIcon from 'assets/images/icons/chat.png';
import RefreshIcon from 'assets/images/icons/refresh.png';
import CameraIcon from 'assets/images/icons/video-camera.png';
import HeartIcon from 'assets/images/icons/heartLike.png';

const UpRightArrow = () => (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M7 17L17 7M17 7H7M17 7V17' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/>
    </svg>
);



const ForumComponent = () => {
    const classes = useForumStyles();
    const navigate = useNavigate();
    const translate = useLocalization();

    const categories = [
        {
            id: 1,
            icon: <img src={FootballIcon} alt='Klub xəbərləri' />,
            title: translate('klub_xeberleri'),
            desc: translate('klub_xeberleri_desc')
        },
        {
            id: 2,
            icon: <img src={ChatIcon} alt='Matç müzakirələri' />,
            title: translate('matc_muzakireleri'),
            desc: translate('matc_muzakireleri_desc')
        },
        {
            id: 3,
            icon: <img src={RefreshIcon} alt='Transfer mövzuları' />,
            title: translate('transfer_movzulari'),
            desc: translate('transfer_movzulari_desc')
        },
        {
            id: 4,
            icon: <img src={CameraIcon} alt='Media mərkəzi' />,
            title: translate('media_merkezi'),
            desc: translate('media_merkezi_desc')
        },
        {
            id: 5,
            icon: <img src={HeartIcon} alt='Azarkeş klubu' />,
            title: translate('azarkes_klubu'),
            desc: translate('azarkes_klubu_desc')
        }
    ];

    return (
        <div>
            <PageHeroComponent title={translate('forum')} subtitle={translate('forum_subtitle')} />
            
            <div className={classes.container}>
                <div className={classes.headerRow}>
                    <button className={classes.backButton} onClick={() => navigate(-1)}>
                        <div className={classes.backIconWrapper}>
                            <ArrowLeft />
                        </div>
                        {translate('geri')}
                    </button>
                    
                </div>
                
                <div className={classes.list}>
                    {categories.map(category => (
                        <div key={category.id} className={classes.card}>
                            <div className={classes.iconContainer}>
                                {category.icon}
                            </div>
                            <div className={classes.textContainer}>
                                <div className={classes.cardTitle}>{category.title}</div>
                                <div className={classes.cardDesc}>{category.desc}</div>
                            </div>
                            <div className={classes.arrowContainer}>
                                <UpRightArrow />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ForumComponent;