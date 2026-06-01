import { useEffect, useState } from 'react';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';

// Define the structural shape of your backend partner data
interface IPartner {
    id: number;
    name: string;
    logoUrl: string;
    websiteUrl: string;
    isActive: boolean;
}

const HomeComponent = () => {
    const classes = useHomeStyles();
    const [partners, setPartners] = useState<IPartner[]>([]);

    // Base URL for API data requests
    const API_BASE = 'https://dev-football-club-api.azintelecom.az';
    
    // S3 Object Storage bucket root link for rendering media elements
    const S3_BASE = 'https://s3new.azintelecom.az';

    useEffect(() => {
        fetch(`${API_BASE}/api/v1/Partner`, {
            method: 'GET',
            headers: {
                'accept': '*/*'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.isSuccess && data.value) {
                // Filter out any partners that are explicitly marked inactive
                const activePartners = data.value.filter((p: IPartner) => p.isActive);
                setPartners(activePartners);
            }
        })
        .catch((err) => console.error("Partner loading error:", err));
    }, []);

    return (
        <div>
            <PageHeroComponent title="Sheki City FK" subtitle="Xoş gəlmisiniz!" />

            {partners.length > 0 && (
                <section className={classes.partnerSection}>
                    <h2 className={classes.title}>Partnyorlarımız</h2>
                    <div className={classes.partnerGrid}>
                        {partners.map((partner) => (
                            <a 
                                key={partner.id} 
                                href={partner.websiteUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className={classes.partnerLogoWrapper}
                            >
                                <img 
                                    src={`${S3_BASE}${partner.logoUrl}`} 
                                    alt={partner.name} 
                                    className={classes.logoImage} 
                                />
                            </a>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
};

// Quick temporary styles for the test view layout row
const useHomeStyles = createUseStyles({
    partnerSection: {
        maxWidth: rem(1200),
        margin: `${rem(64)} auto`,
        padding: `0 ${rem(20)}`,
        textAlign: 'center',
    },
    title: {
        fontSize: rem(28),
        fontWeight: 700,
        marginBottom: rem(32),
    },
    partnerGrid: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(48),
    },
    partnerLogoWrapper: {
        display: 'block',
        maxWidth: rem(160),
        transition: 'transform 0.2s ease',
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    logoImage: {
        width: '100%',
        height: rem(65), // Gives logos a matching standard height boundary line
        objectFit: 'contain' as const,
    },
});

export default HomeComponent;