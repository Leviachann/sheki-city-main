import { useParams } from 'react-router-dom';
import { useXeber } from './actions/xeberler.query';
import { useGetXeberler } from './actions/xeberler.query'; 
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import NewsCard from 'core/shared/news-card/news-card.component'; 
import { useXeberDetailStyles } from './xeber-detail.style';
import useLocalization from 'assets/lang';
import { Routes } from 'router/routes';
import { formatDate } from 'core/helpers/format-date';
import newsImg from '../../assets/images/statics/news.png';
import DOMPurify from 'dompurify';

const XeberDetailComponent = () => {
    const classes = useXeberDetailStyles();
    const { id } = useParams<{ id: string }>();
    const translate = useLocalization();
    const currentArticleId = Number(id);

    const { data: article } = useXeber(currentArticleId);

    const { data: relatedData } = useGetXeberler(
        1,                 
        5,                
        article?.categoryId
    );

    if (!article) return <div>Xəbər tapılmadı</div>;

    const breadcrumbs = [
        { label: translate('ana_sehife') as string, path: Routes.home },
        { label: translate('xeberler') as string, path: Routes.xeberler },
        { label: article.title },
    ];

    const sanitizedBody = DOMPurify.sanitize(article.body || '');

    const relatedArticles = (relatedData?.items || [])
        .filter((item) => item.id !== currentArticleId)
        .slice(0, 4);

    return (
        <div>
            <PageHeaderComponent breadcrumbs={breadcrumbs} />
            <div className={classes.newsHeader}>
                <h2 className={classes.mainTitle}>{article.title}</h2>
                <span className={classes.date}>{formatDate(article.publishedAt)}</span>
            </div>

            <img src={newsImg} alt={article.title} className={classes.coverImage} />

            <div className={classes.body} dangerouslySetInnerHTML={{ __html: sanitizedBody }} />

            {relatedArticles.length > 0 && (
                <section className={classes.otherNews}>
                    <h2 className={classes.sectionTitle}>{translate('diger_xeberler')}</h2>
                    <div className={classes.newsGrid}>
                        {relatedArticles.map((item) => {
                            const cardProps = {
                                id: item.id,
                                title: item.title,
                                description: item.excerpt,
                                slug: item.slug,
                                category: item.category?.name || 'News',
                                date: item.publishedAt 
                                    ? new Date(item.publishedAt).toLocaleDateString('az-AZ') 
                                    : '',
                                image: newsImg 
                            };

                            return <NewsCard key={item.id} {...cardProps} />;
                        })}
                    </div>
                </section>
            )}
        </div>
    );
};

export default XeberDetailComponent;