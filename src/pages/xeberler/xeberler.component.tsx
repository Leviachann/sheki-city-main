import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import news from '../../assets/images/statics/news.png';
import NewsCard from 'core/shared/news-card/news-card.component';
import { useXeberlerStyles } from './xeberler.style';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
const newsData = [
  {
    id: 1,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'news',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 2,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'achievements',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 3,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'updates',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 4,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'updates',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 5,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'achievements',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 6,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'news',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 7,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'news',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 8,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'updates',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
  {
    id: 9,
    image: news,
    title: 'Adewole signs pro deal',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    category: 'achievements',
    date: '24.01.2025',
    slug: 'adewole-signs',
  },
];

const XeberlerComponent = () => {
  const translate = useLocalization();
  const classes = useXeberlerStyles();

  return (
    <>
      <PageHeroComponent
        title={translate('xeberler')}
        subtitle={translate('xeberler_subtitle')}
      />



      <section className={classes.container}>
        <div className={classes.grid}>
          {newsData.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default XeberlerComponent;
