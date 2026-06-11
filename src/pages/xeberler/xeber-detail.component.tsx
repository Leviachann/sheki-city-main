import { useParams } from 'react-router-dom';
import { useXeber, useGetXeberler } from './actions/xeberler.query';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import NewsCard from 'core/shared/news-card/news-card.component';
import { useXeberDetailStyles } from './xeber-detail.style';
import useLocalization from 'assets/lang';
import { Routes } from 'router/routes';
import { formatDate } from 'core/helpers/format-date';
import newsImg from '../../assets/images/statics/news.png'; 
import SliderContainer from 'core/shared/slider-container/slider-container.component';
import { S3_BASE_URL } from 'core/configs/axios.config'; 

const XeberDetailComponent = () => {
  const classes = useXeberDetailStyles();
  const { id } = useParams<{ id: string }>();
  const translate = useLocalization();
  const currentArticleId = Number(id);

  const { data: article } = useXeber(currentArticleId);

  const { data: relatedData } = useGetXeberler(1, 5, article?.categoryId);

  if (!article) return <div>{'Xəbər tapılmadı'}</div>;

  const breadcrumbs = [
    { label: translate('ana_sehife') as string, path: Routes.home },
    { label: translate('xeberler') as string, path: Routes.xeberler },
    { label: article.title },
  ];

  const relatedArticles = (relatedData?.items || [])
    .filter((item) => item.id !== currentArticleId)
    .slice(0, 4);

  const mainCoverImage = article.coverImageUrl 
    ? `${S3_BASE_URL}${article.coverImageUrl}` 
    : newsImg;

  return (
    <div>
      <PageHeaderComponent breadcrumbs={breadcrumbs} />
      <div className={classes.newsHeader}>
        <h2 className={classes.mainTitle}>{article.title}</h2>
        <span className={classes.date}>{formatDate(article.publishedAt)}</span>
      </div>

      <img src={mainCoverImage} alt={article.title} className={classes.coverImage} />
      <div 
        className={classes.body} 
        dangerouslySetInnerHTML={{ __html: article.body || '' }} 
      />

      <SliderContainer title={translate('klub_planlar') as string}>
        {relatedArticles.map((item) => {
          const dynamicRelatedImage = item.coverImageUrl 
            ? `${S3_BASE_URL}${item.coverImageUrl}` 
            : newsImg;

          return (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.excerpt}
              date={
                item.publishedAt
                  ? new Date(item.publishedAt).toLocaleDateString('az-AZ')
                  : ''
              }
              image={dynamicRelatedImage}
            />
          );
        })}
      </SliderContainer>
    </div>
  );
};

export default XeberDetailComponent;