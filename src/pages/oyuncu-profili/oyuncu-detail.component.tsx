import React from 'react';
import { useLocation } from 'react-router-dom';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import useLocalization from 'assets/lang';
import { Routes } from 'router/routes';
import { useOyuncuDetailStyles } from './oyuncu-detail.style';
import { S3_BASE_URL } from 'core/configs/axios.config';
import defaultPlayerPlaceholder from 'assets/images/statics/mock-player-detail.png';
import { PlayerDetailProps } from './oyuncu-profili';

const OyuncuDetailComponent = ({ player: propPlayer }: PlayerDetailProps) => {
  const translate = useLocalization();
  const classes = useOyuncuDetailStyles();
  
  const location = useLocation();
  const statePlayer = location.state?.player;

  const player = propPlayer || statePlayer;

  const formatDate = (dateString?: string) => {
    if (!dateString) return '—';
    const parts = dateString.split('T')[0].split('-');
    if (parts.length !== 3) return dateString;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  const formatTransferFee = (fee?: number) => {
    if (!fee) return '—';
    const millionVal = fee / 1000000;
    if (millionVal >= 0.1) {
      return `${millionVal.toFixed(1).replace('.', ',')} ${translate('milyon_euro')}`;
    }
    return `${fee.toLocaleString()} euro`;
  };

  const getFootLabel = (foot?: string) => {
    if (foot === 'Left') return translate('sol_ayaq');
    if (foot === 'Right') return translate('sag_ayaq');
    return translate('her_ikisi');
  };

  const displayData = {
    name: player?.fullName || 'Nurlan Məmmədov',
    birthDate: player ? formatDate(player.dateOfBirth) : '13/12/1996',
    birthPlace: player?.birthPlace || translate('default_birth_place'),
    position: player?.positionName || translate('default_position'), // Fixed field mapping mapping
    jerseyNumber: player?.jerseyNumber !== undefined ? player.jerseyNumber.toString().padStart(2, '0') : '74',
    height: player?.heightCm ? `${player.heightCm} sm` : '180 sm',
    weight: player?.weightKg ? `${player.weightKg} kq` : '68 kq',
    foot: getFootLabel(player?.preferredFoot),
    contractStart: player ? formatDate(player.contractStartDate) : '01/07/2019',
    contractEnd: player ? formatDate(player.contractEndDate) : '01/07/2028',
    debutDate: player ? formatDate(player.clubDebutDate) : '05/08/2019',
    marketValue: player ? formatTransferFee(player.transferFee) : `5,8 ${translate('milyon_euro')}`,
    nationality: player?.nationality === 'Foreign' ? translate('xarici') : translate('yerli'),
  };

  const cleanPhotoPath = player?.photoUrl?.trim() || '';
  const playerImage = cleanPhotoPath ? `${S3_BASE_URL}${cleanPhotoPath}` : defaultPlayerPlaceholder;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultPlayerPlaceholder;
  };

  const breadcrumbs = [
    { label: translate('ana_sehife') as string, path: Routes.home },
    {
      label: translate('oyuncu_profili') as string,
      path: Routes.oyuncuProfili,
    },
    { label: displayData.name },
  ];

  return (
    <div className={classes.pageContainer}>
      <PageHeaderComponent breadcrumbs={breadcrumbs} />

      <div className={classes.detailCard}>
        <div className={classes.imageContainer}>
          <img
            src={playerImage}
            alt={displayData.name}
            className={classes.playerImage}
            onError={handleImageError}
          />
        </div>

        <div className={classes.infoGrid}>
          <div className={classes.infoColumn}>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('ad_soyad')}</p>
              <h2 className={classes.valueHighlight}>{displayData.name}</h2>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('movqe_forma')}</p>
              <p className={classes.value}>{displayData.position} / #{displayData.jerseyNumber}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('doguldugu_il')}</p>
              <p className={classes.value}>{displayData.birthDate}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('doguldugu_yer')}</p>
              <p className={classes.value}>{displayData.birthPlace}</p>
            </div>
          </div>

          <div className={classes.infoColumn}>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('boy')}</p>
              <p className={classes.value}>{displayData.height}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('ceki')}</p>
              <p className={classes.value}>{displayData.weight}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('islek_ayaq')}</p>
              <p className={classes.value}>{displayData.foot}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('vetendasliq')}</p>
              <p className={classes.value}>{displayData.nationality}</p>
            </div>
          </div>

          <div className={classes.infoColumn}>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('muqavile_tarixi')}</p>
              <p className={classes.value}>{displayData.contractStart} — {displayData.contractEnd}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('klubdaki_debut')}</p>
              <p className={classes.value}>{displayData.debutDate}</p>
            </div>
            <div className={classes.dataGroup}>
              <p className={classes.label}>{translate('transfer_qiymeti')}</p>
              <p className={classes.value}>{displayData.marketValue}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OyuncuDetailComponent;