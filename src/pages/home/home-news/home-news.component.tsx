import React from 'react';
import useLocalization from 'assets/lang';
import SliderContainer from 'core/shared/slider-container/slider-container.component';
import NewsCard from 'core/shared/news-card/news-card.component';
import { useGetXeberler } from 'pages/xeberler/actions/xeberler.query';
import { S3_BASE_URL } from 'core/configs/axios.config';
import newsImg from 'assets/images/statics/news.png';

const HomeNewsComponent = () => {
  const translate = useLocalization();

  const { data: newsData, isLoading } = useGetXeberler(1, 6, undefined);
  const newsList = newsData?.items || [];

  if (isLoading || newsList.length === 0) return null;

  return (
    <SliderContainer title={(translate('xeberler') as string)}>
      {newsList.map((item) => {
        const safeS3Base = S3_BASE_URL || '';
        const baseUrl = safeS3Base.endsWith('/') ? safeS3Base.slice(0, -1) : safeS3Base;
        
        const safeCoverUrl = item.coverImageUrl || '';
        const imagePath = safeCoverUrl.startsWith('/') ? safeCoverUrl : `/${safeCoverUrl}`;
        const dynamicSliderImage = (S3_BASE_URL && item.coverImageUrl)
          ? `${baseUrl}${imagePath}` 
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
            image={dynamicSliderImage}
          />
        );
      })}
    </SliderContainer>
  );
};

export default HomeNewsComponent;