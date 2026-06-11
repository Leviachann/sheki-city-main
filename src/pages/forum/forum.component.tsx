import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import useLocalization from 'assets/lang';
import { useForumStyles } from './forum.style';
import ForumCard from './forum-card.component';
import { ForumCategory } from './models/forum.model';
import { Routes } from 'router/routes';

import FootballIcon from 'assets/images/icons/ball.png';
import ChatIcon from 'assets/images/icons/chat.png';
import RefreshIcon from 'assets/images/icons/refresh.png';
import CameraIcon from 'assets/images/icons/video-camera.png';
import HeartIcon from 'assets/images/icons/heartLike.png';

const ForumComponent = () => {
  const classes = useForumStyles();
  const translate = useLocalization();

  const categories: ForumCategory[] = [
    {
      id: 1,
      icon: <img src={FootballIcon} alt='' />,
      title: translate('klub_xeberleri') as string,
      desc: translate('klub_xeberleri_desc') as string,
      path: Routes.xeberler,
    },
    {
      id: 2,
      icon: <img src={ChatIcon} alt='' />,
      title: translate('matc_muzakireleri') as string,
      desc: translate('matc_muzakireleri_desc') as string,
      path: Routes.oyunlar,
    },
    {
      id: 3,
      icon: <img src={RefreshIcon} alt='' />,
      title: translate('transfer_movzulari') as string,
      desc: translate('transfer_movzulari_desc') as string,
      path: Routes.oyuncuProfili,
    },
    {
      id: 4,
      icon: <img src={CameraIcon} alt='' />,
      title: translate('media_merkezi') as string,
      desc: translate('media_merkezi_desc') as string,
      path: Routes.canliOyunlar,
    },
    {
      id: 5,
      icon: <img src={HeartIcon} alt='' />,
      title: translate('azarkes_klubu') as string,
      desc: translate('azarkes_klubu_desc') as string,
      path: Routes.klubTarixi,
    }
  ];

  return (
    <div>
      <PageHeroComponent 
        title={translate('forum')} 
        subtitle={translate('forum_subtitle')} 
      />
      <PageHeaderComponent current={translate('geri') as string} />
      
      <div className={classes.container}>
        <div className={classes.list}>
          {categories.map((category) => (
            <ForumCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumComponent;