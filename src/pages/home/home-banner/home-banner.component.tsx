import React from 'react';
import { useGetAboutClubBanner } from 'pages/klub-haqqinda/actions/klub-banner.query'; 
import { useHomeBannerStyles } from './home-banner.style';
import { PageHeroWave } from 'assets/images/icons/pagehero-wave';
import { S3_BASE_URL } from 'core/configs/axios.config';

const HomeBanner: React.FC = () => {
    const classes = useHomeBannerStyles();
    
    const { data: banner, isLoading, error } = useGetAboutClubBanner(15, 'az');

    const displayTitle = banner?.translation?.title ;
    const displaySubtitle = banner?.translation?.subtitle;
    const displayCtaText = banner?.translation?.ctaText;

    const handleCtaClick = () => {
        if (banner?.ctaUrl) {
            window.open('/iane');
        } else {
            window.open('klub-haqqinda', '_self');
        }
    };

    if (isLoading || error || !banner || !banner.isActive) {
        return null; 
    }

    return (
        <div className={classes.outerContainer}>
            <PageHeroWave className={classes.waveSvg} />
            
            <div className={classes.contentLayout}>
                <div className={classes.textSection}>
                    {displayTitle && <h1 className={classes.title}>{displayTitle}</h1>}
                    {displaySubtitle && <p className={classes.subtitle}>{displaySubtitle}</p>}
                    
                    {displayCtaText && (
                        <button 
                            type='button' 
                            className={classes.ctaButton} 
                            onClick={handleCtaClick}
                        >
                            {displayCtaText}
                        </button>
                    )}
                </div>
                
                <div className={classes.graphicWrapper}>
                    <div className={classes.imageCard}>
                        {banner?.imageUrl && (
                            <img 
                                src={`${S3_BASE_URL}${banner.imageUrl}`} 
                                alt={typeof displayTitle === 'string' ? displayTitle : 'Home Banner'} 
                                className={classes.imgElement} 
                            />
                        )}
                    </div>
                    <div className={`${classes.shadowFrame} ${classes.frameLayer1}`} />
                    <div className={`${classes.shadowFrame} ${classes.frameLayer2}`} />
                    <div className={`${classes.shadowFrame} ${classes.frameLayer3}`} />
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;