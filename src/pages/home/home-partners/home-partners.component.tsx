import React from 'react';
import useLocalization from 'assets/lang';
import { S3_BASE_URL } from 'core/configs/axios.config';
import { useGetPartners } from '../actions/home.query';
import { useHomePartnersStyles } from './home-partners.style';

const HomePartnersComponent = () => {
  const translate = useLocalization();
  const classes = useHomePartnersStyles();
  
  const { data: partners = [], isLoading } = useGetPartners();

  if (isLoading || partners.length === 0) return null;

  return (
    <section className={classes.section}>
      <div>
        <div className={classes.header}>
          <h2 className={classes.title}>
            {translate('partnyorlar') || 'Partnyorlar'}
          </h2>
          <p className={classes.subtitle}>
            {translate('partnyorlar_subtitle')}
          </p>
        </div>

        <div className={classes.row}>
          {partners.map((partner) => {
            const baseUrl = S3_BASE_URL.endsWith('/') ? S3_BASE_URL.slice(0, -1) : S3_BASE_URL;
            const logoPath = partner.logoUrl.startsWith('/') ? partner.logoUrl : `/${partner.logoUrl}`;
            const fullImageUrl = `${baseUrl}${logoPath}`;

            return (
              <a
                key={partner.id}
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.partnerLink}
                title={partner.name}
              >
                <img
                  src={fullImageUrl}
                  alt={partner.name}
                  className={classes.logo}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePartnersComponent;