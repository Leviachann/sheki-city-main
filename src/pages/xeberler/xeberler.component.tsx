import { useState } from 'react';
import { Pagination } from 'antd';
import PageHeroComponent from 'core/shared/page-hero/page-hero.component';
import useLocalization from 'assets/lang';
import newsImg from '../../assets/images/statics/news.png';
import NewsCard from 'core/shared/news-card/news-card.component';
import { useXeberlerStyles } from './xeberler.style';
import PageHeaderComponent from 'core/shared/section-header/section-header.component';
import { useGetXeberler } from './actions/xeberler.query';

const XeberlerComponent = () => {
    const translate = useLocalization();
    const classes = useXeberlerStyles();

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);

    const pageSize = 6;

    const { data, isLoading, isError } = useGetXeberler(
        currentPage,
        pageSize,
        selectedCategory
    );

    const handleSearch = (value: string) => {
        setSearchTerm(value.trim().toLowerCase());
        setCurrentPage(1); // Reset to page 1 on search filter
    };

    const handleCategoryChange = (value: string | number) => {
        if (value === 'all') {
            setSelectedCategory(undefined);
        } else {
            setSelectedCategory(Number(value));
        }
        setCurrentPage(1); 
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 350, behavior: 'smooth' });
    };

    const rawNewsList = data?.items || [];
    const totalCount = data?.totalCount || 0;

    const filteredNewsList = rawNewsList.filter((item) => {
        if (!searchTerm) return true;
        return (
            item.title?.toLowerCase().includes(searchTerm) ||
            item.excerpt?.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <>
            <PageHeroComponent
                title={translate('xeberler')}
                subtitle={translate('xeberler_subtitle')}
            />

            <PageHeaderComponent
                current={translate('butun_xeberler') as string || 'Bütün xəbərlər'}
                search={{
                    placeholder: translate('axtar') as string || 'Axtar',
                    onSearch: handleSearch,
                }}
                filters={[
                    {
                        label: translate('kateqoriya') as string || 'Kateqoriya',
                        defaultValue: 'all',
                        options: [
                            { label: translate('hamisi') as string || 'Hamısı', value: 'all' },
                            { label: 'Futbol Xəbərləri', value: 1 },
                            { label: 'Nailiyyətlər', value: 2 },
                            { label: 'Yeniliklər', value: 3 },
                        ],
                        onChange: handleCategoryChange,
                    },
                ]}
            />

            <section className={classes.container}>
                <div className={classes.grid}>
                    {isLoading ? (
                        <p className={classes.statusMessage}>
                            Loading news...
                        </p>
                    ) : isError ? (
                        <p className={classes.statusMessage}>
                            Failed to load news articles.
                        </p>
                    ) : filteredNewsList.length === 0 ? (
                        <p className={classes.statusMessage}>
                            No news found.
                        </p>
                    ) : (
                        filteredNewsList.map((item) => {
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
                        })
                    )}
                </div>

                {totalCount > pageSize && (
                    <div className={classes.paginationContainer}>
                        <Pagination
                            current={currentPage}
                            total={totalCount}
                            pageSize={pageSize}
                            onChange={handlePageChange}
                            showSizeChanger={false}
                        />
                    </div>
                )}
            </section>
        </>
    );
};

export default XeberlerComponent;