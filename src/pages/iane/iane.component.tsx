import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import { useIaneStyles } from './iane.style';
import fifLogo from 'assets/images/icons/fif-logo.png';
import { ArrowLeft } from 'assets/images/icons/arrows';
import useLocalization from "assets/lang";

// const LeftArrowIcon = () => (
//     <svg width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
//         <line x1='19' y1='12' x2='5' y2='12'></line>
//         <polyline points='12 19 5 12 12 5'></polyline>
//     </svg>
// );

const IaneComponent = () => {
    const classes = useIaneStyles();
    const navigate = useNavigate();
  const translate = useLocalization();
    return (
        <div>
            <PageHeroComponent title={translate('iane')} subtitle={translate('iane_subtitle')} />
            
            <div className={classes.container}>
                <button className={classes.backButton} onClick={() => navigate(-1)}>
                    <div className={classes.iconWrapper}>
                        <ArrowLeft />
                    </div>
                    {translate('geri')}
                </button>
                
                <div className={classes.contentArea}>
                    <img src={fifLogo} alt='FUTBOLUN İNKİŞAF FONDU' className={classes.logo} />
                    
                    <h2 className={classes.title}>{translate('iane_title')}</h2>
                    
                    <p 
                        className={classes.description}
                        dangerouslySetInnerHTML={{ __html: translate('iane_description') }}
                    />
                    
                    <a href='https://fif.az/donate' target='_blank' rel='noopener noreferrer' className={classes.donateLink}>
                        https://fif.az/donate
                    </a>
                </div>
            </div>
        </div>
    );
};

export default IaneComponent;